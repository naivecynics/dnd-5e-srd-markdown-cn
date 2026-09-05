const docs=[
 {f:'CHANGELOG.md',t:'更新日志',d:'项目版本更新记录',ready:true,g:'项目文档'},
 {f:'CONTRIBUTING.md',t:'贡献指南',d:'贡献方式、PR 流程与格式规范',ready:true,g:'项目文档'},
 {f:'README.md',t:'项目说明',d:'SRD 内容、使用方式与许可证',ready:true,g:'项目文档'},
 {f:'character-creation.md',t:'角色创建',d:'从职业、起源到属性与装备的创建流程',ready:true,g:'角色规则'},
 {f:'character-origins.md',t:'角色起源',d:'背景、物种、属性、专长与装备',ready:true,g:'角色规则'},
 {f:'classes.md',t:'职业',d:'12 个核心职业及其职业特性',g:'规则内容'},
 {f:'equipment.md',t:'装备',d:'武器、护甲、工具与冒险装备',g:'规则内容'},
 {f:'feats.md',t:'专长',d:'角色专长与能力',g:'规则内容'},
 {f:'gameplay-toolbox.md',t:'游戏工具箱',d:'旅行、载具与扩展规则',g:'规则内容'},
 {f:'magic-items.md',t:'魔法物品',d:'魔法物品、药水、戒指与神器',g:'规则内容'},
 {f:'monsters.md',t:'怪物规则',d:'怪物数据块及字段说明',g:'规则内容'},
 {f:'monsters-A-Z.md',t:'怪物图鉴 A–Z',d:'按字母排列的完整怪物数据',g:'规则内容'},
 {f:'animals.md',t:'动物',d:'动物生物数据与伙伴',g:'规则内容'},
 {f:'playing-the-game.md',t:'进行游戏',d:'核心游戏流程与战斗规则',g:'规则内容'},
 {f:'rules-glossary.md',t:'规则词汇表',d:'规则术语、动作与状态定义',g:'规则内容'},
 {f:'spells.md',t:'法术',d:'施法规则与完整法术列表',g:'规则内容'}
];
const nav=document.querySelector('#nav'), main=document.querySelector('#main'), search=document.querySelector('#search');
function renderNav(q=''){nav.innerHTML='';let last='';let shown=0;docs.filter(x=>(x.t+x.d+x.f).toLowerCase().includes(q.toLowerCase())).forEach(x=>{shown++;if(x.g!==last){const g=document.createElement('div');g.className='nav-group';g.textContent=x.g;nav.append(g);last=x.g}const b=document.createElement('button');b.className='nav-item';b.textContent=x.t;b.onclick=()=>openDoc(x);nav.append(b)});document.querySelector('#count').textContent=`${shown}/${docs.length}`}
function esc(s){return s.replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]))}
function md(s){let out='',lines=s.split(/\r?\n/),inCode=false,table=false;for(let l of lines){if(l.startsWith('```')){inCode=!inCode;out+=inCode?'<pre><code>':'</code></pre>';continue}if(inCode){out+=esc(l)+'\n';continue}if(/^<table|^<thead|^<tbody|^<tr|^<th|^<td|^<\/table|^<\/thead|^<\/tbody|^<\/tr|^<\/th|^<\/td/.test(l.trim())){out+=l;continue}let m=l.match(/^(#{1,4})\s+(.*)/);if(m){out+=`<h${m[1].length}>${inline(m[2])}</h${m[1].length}>`;continue}if(/^\s*[-*]\s+/.test(l)){out+=`<li>${inline(l.replace(/^\s*[-*]\s+/,''))}</li>`;continue}if(/^\s*\d+\.\s+/.test(l)){out+=`<li>${inline(l.replace(/^\s*\d+\.\s+/,''))}</li>`;continue}if(!l.trim()){out+='';continue}out+=`<p>${inline(l)}</p>`}return out}function inline(s){return esc(s).replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>').replace(/_(.+?)_/g,'<em>$1</em>').replace(/`(.+?)`/g,'<code>$1</code>').replace(/\[(.+?)\]\((.+?)\)/g,'<a href="$2">$1</a>')}
function openDoc(x){document.querySelectorAll('.nav-item').forEach(b=>b.classList.toggle('active',b.textContent===x.t));main.innerHTML=`<article class="article"><h1>${x.t}</h1><div id="body" class="source-body"></div></article>`;fetch('content/'+x.f).then(r=>r.text()).then(t=>document.querySelector('#body').innerHTML=md(t)).catch(()=>{});location.hash=x.f}
function home(){main.innerHTML=`<section class="cards">${docs.filter(x=>x.ready).map(x=>`<div class="card" data-f="${x.f}"><h3>${x.t}</h3></div>`).join('')}</section>`;document.querySelectorAll('.card').forEach(c=>c.onclick=()=>openDoc(docs.find(x=>x.f===c.dataset.f)))}
search.oninput=e=>renderNav(e.target.value);document.querySelector('#theme').onclick=()=>document.body.classList.toggle('dark');renderNav();let initial=docs.find(x=>location.hash.slice(1)===x.f);initial?openDoc(initial):home();
