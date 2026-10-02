(()=>{
const $=s=>document.querySelector(s),S=SITE,P=PROJECTS,F=PHOTOS,A=ABOUT,
esc=t=>String(t??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c])),
src=p=>"images/"+encodeURIComponent(p.file),
proj=s=>P.find(p=>p.slug===s);
let cur=[],pos=0,last=null;

$("#name").textContent=S.name;$("#tag").textContent=S.tagline;document.title=S.name;

function nav(r){
  const on=k=>r[0]===k?' aria-current="page"':"";
  $("#nav").innerHTML=
    `<a href="#/archive"${on("archive")}>Archive</a>`+
    (P.length?`<a href="#/projects"${r[0]==="projects"&&!r[1]?' aria-current="page"':""}>Projects</a>`+
    `<div class="sub"${r[0]==="projects"?"":" hidden"}>${P.map(p=>`<a href="#/projects/${esc(p.slug)}"${r[1]===p.slug?' aria-current="page"':""}>${esc(p.title)}</a>`).join("")}</div>`:"")+
    `<a href="#/about"${on("about")}>About</a><a href="#/contact"${on("contact")}>Contact</a>`;
}

function grid(list,none){
  cur=list;
  if(!list.length)return `<p class="empty">${none}</p>`;
  return `<div class="grid">${list.map((p,i)=>`<button data-i="${i}" aria-label="${esc(p.title||"Open photograph "+p.file)}"><img src="${src(p)}" alt="${esc(p.title||p.caption||"")}" loading="lazy"></button>`).join("")}</div>`;
}

function route(){
  let r=location.hash.replace(/^#\/?/,"").split("/").filter(Boolean);
  if(!r.length||(r[0]==="projects"&&!P.length))r=["archive"];
  closeLb(true);nav(r);
  const m=$("#main");
  if(r[0]==="about"){
    m.innerHTML=`<div class="pad"><h1>About</h1>${A.text.map(t=>`<p>${esc(t)}</p>`).join("")}<ul>${A.experience.map(t=>`<li>${esc(t)}</li>`).join("")}</ul><p>${A.links.map(l=>`<a href="${esc(l.url)}" rel="noopener">${esc(l.label)}</a>`).join("<br>")}</p></div>`;
  }else if(r[0]==="contact"){
    m.innerHTML=`<div class="pad"><h1>Contact</h1><p><a href="mailto:${esc(S.email)}">${esc(S.email)}</a></p><p class="mute">San Salvador, El Salvador</p></div>`;
  }else if(r[0]==="projects"&&r[1]){
    const p=proj(r[1]);
    if(!p){location.hash="#/projects";return}
    m.innerHTML=`<div class="pad"><h1>${esc(p.title)}</h1>${p.summary?`<p>${esc(p.summary)}</p>`:""}</div>`+grid(F.filter(x=>x.project===p.slug),"No photographs in this project yet.");
  }else if(r[0]==="projects"){
    const c=P.map(p=>({p,f:F.find(x=>x.project===p.slug)})).filter(x=>x.f);
    m.innerHTML=c.length?`<div class="grid">${c.map(x=>`<a class="cap" href="#/projects/${esc(x.p.slug)}"><img src="${src(x.f)}" alt="" loading="lazy"><span>${esc(x.p.title)}</span></a>`).join("")}</div>`:`<p class="empty">No projects with photographs yet.</p>`;
  }else{
    m.innerHTML=grid(F,"No photographs yet. Add the first one in data.js.");
  }
  scrollTo(0,0);
}

function draw(){
  const p=cur[pos],pr=proj(p.project),
  meta=[pr&&pr.title,p.place,p.year].filter(Boolean).map(esc).join(", ");
  $("#lb").innerHTML=`<button class="x" aria-label="Close">×</button>`+
    `<button class="nav-b" style="left:6px" data-d="-1" aria-label="Previous">‹</button>`+
    `<button class="nav-b" style="right:6px" data-d="1" aria-label="Next">›</button>`+
    `<div class="stage"><img src="${src(p)}" alt="${esc(p.title||"")}"></div>`+
    `<div class="info"><div>${p.title?`<h2>${esc(p.title)}</h2>`:""}${meta?`<p>${meta}</p>`:""}${p.caption?`<p>${esc(p.caption)}</p>`:""}</div><button class="btn" id="lic">License this image</button></div>`;
}
function openLb(i){pos=i;last=document.activeElement;draw();$("#lb").hidden=false;$("#lb .x").focus()}
function closeLb(quiet){$("#lb").hidden=true;if(!quiet&&last)last.focus()}

function licForm(){
  const p=cur[pos],f=document.createElement("form");f.className="lic";
  const sel=(n,l,o)=>`<label>${l}<select name="${n}">${o.map(x=>`<option>${x}</option>`).join("")}</select></label>`;
  f.innerHTML=sel("use","Use",["Editorial","Book","Exhibition","Web / digital","Other"])+
    `<label>Publication or project<input name="pub" required></label>`+
    `<label>Territory<input name="ter" placeholder="e.g. Worldwide, Europe" required></label>`+
    sel("dur","Duration",["One time","1 year","3 years","Perpetual"])+
    sel("cli","Client type",["Media","Publisher","NGO / institution","Private"])+
    `<button class="btn" type="submit">Send request</button>`;
  f.onsubmit=e=>{
    e.preventDefault();const d=new FormData(f);
    const body=`Photograph: ${p.title||p.file} (${p.file})\nUse: ${d.get("use")}\nPublication / project: ${d.get("pub")}\nTerritory: ${d.get("ter")}\nDuration: ${d.get("dur")}\nClient type: ${d.get("cli")}\n`;
    location.href=`mailto:${S.email}?subject=${encodeURIComponent("License request: "+(p.title||p.file))}&body=${encodeURIComponent(body)}`;
  };
  return f;
}

$("#main").addEventListener("click",e=>{const b=e.target.closest("[data-i]");if(b)openLb(+b.dataset.i)});
$("#lb").addEventListener("click",e=>{
  const t=e.target.closest("button");if(!t)return;
  if(t.classList.contains("x"))closeLb();
  else if(t.dataset.d){pos=(pos+ +t.dataset.d+cur.length)%cur.length;draw()}
  else if(t.id==="lic"){const o=$("#lb form");o?o.remove():($("#lb").appendChild(licForm()),$("#lb input").focus())}
});
addEventListener("keydown",e=>{
  if($("#lb").hidden||/INPUT|SELECT/.test(e.target.tagName))return;
  if(e.key==="Escape")closeLb();
  if(e.key==="ArrowRight"||e.key==="ArrowLeft"){pos=(pos+(e.key==="ArrowRight"?1:-1)+cur.length)%cur.length;draw()}
});
addEventListener("hashchange",route);
route();
})();
