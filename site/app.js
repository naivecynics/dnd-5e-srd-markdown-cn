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
const zh={
 'README.md':['这是 D&D 5.2.1（2024）系统参考文档的 Markdown 整理版，面向 DM、开发者和玩家阅读、检索与二次整合。本站将按主题逐步完成规范汉化。','当前已接入角色创建、角色起源及项目文档；职业、装备、法术、怪物等内容暂保留为待汉化占位。'],
 'CHANGELOG.md':['项目首个版本于 2026-01-09 发布，包含完整 SRD 内容的 Markdown 转换、按主题拆分的文档、README、许可证和贡献指南。','格式转换保留官方 SRD 内容，统一使用 GitHub 风格表格和层级标题。'],
 'CONTRIBUTING.md':['欢迎改进这个资源。可以提交格式修复、内部链接、文档、解析器和验证工具等贡献。','不得修改官方 SRD 规则文本、添加自制内容，或大幅重组现有文件结构。'],
 'character-creation.md':['角色创建是一条从概念到可游玩角色的清晰流程：选择职业，确定起源，分配六项属性，选择阵营，最后补全角色卡。','本章还说明等级、护甲训练、背景、物种、语言、熟练项、生命值和装备等角色卡字段。'],
 'character-origins.md':['角色起源由背景和物种构成。背景反映冒险前最具塑造性的经历，并提供属性提升、起源专长、技能熟练、工具熟练和装备选择。','物种决定生物类型、体型、速度和特殊特征；本章收录龙裔、矮人、精灵、侏儒、人类、兽人等可选物种。']
};
const nav=document.querySelector('#nav'), main=document.querySelector('#main'), search=document.querySelector('#search');
function renderNav(q=''){nav.innerHTML='';let last='';let shown=0;docs.filter(x=>(x.t+x.d+x.f).toLowerCase().includes(q.toLowerCase())).forEach(x=>{shown++;if(x.g!==last){const g=document.createElement('div');g.className='nav-group';g.textContent=x.g;nav.append(g);last=x.g}const b=document.createElement('button');b.className='nav-item';b.innerHTML=`<span>${x.t}</span><span class="badge ${x.ready?'ready':''}">${x.ready?'中文':'待处理'}</span>`;b.onclick=()=>openDoc(x);nav.append(b)});document.querySelector('#count').textContent=`${shown}/${docs.length}`}
function esc(s){return s.replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]))}
function md(s){let out='',lines=s.split(/\r?\n/),inCode=false,table=false;for(let l of lines){if(l.startsWith('```')){inCode=!inCode;out+=inCode?'<pre><code>':'</code></pre>';continue}if(inCode){out+=esc(l)+'\n';continue}if(/^<table|^<thead|^<tbody|^<tr|^<th|^<td|^<\/table|^<\/thead|^<\/tbody|^<\/tr|^<\/th|^<\/td/.test(l.trim())){out+=l;continue}let m=l.match(/^(#{1,4})\s+(.*)/);if(m){out+=`<h${m[1].length}>${inline(m[2])}</h${m[1].length}>`;continue}if(/^\s*[-*]\s+/.test(l)){out+=`<li>${inline(l.replace(/^\s*[-*]\s+/,''))}</li>`;continue}if(/^\s*\d+\.\s+/.test(l)){out+=`<li>${inline(l.replace(/^\s*\d+\.\s+/,''))}</li>`;continue}if(!l.trim()){out+='';continue}out+=`<p>${inline(l)}</p>`}return out}function inline(s){return esc(s).replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>').replace(/_(.+?)_/g,'<em>$1</em>').replace(/`(.+?)`/g,'<code>$1</code>').replace(/\[(.+?)\]\((.+?)\)/g,'<a href="$2">$1</a>')}
function openDoc(x){document.querySelectorAll('.nav-item').forEach(b=>b.classList.toggle('active',b.textContent.includes(x.t)));main.innerHTML=`<article class="article"><div class="eyebrow">${x.g} · ${x.ready?'已接入中文导读':'待汉化'}</div><h1>${x.t}</h1><div class="kicker">${x.d} · 原文件：${x.f}</div>${x.ready?`<section class="translation"><h3>中文整理说明</h3><p>${zh[x.f][0]}</p><p>${zh[x.f][1]}</p></section>`:'<div class="empty">该章节已纳入目录，完整中文内容正在整理中。你仍可以展开下方原文阅读。</div>'}<details class="source" open><summary>展开原文（Markdown）</summary><div id="body" class="source-body">正在载入……</div></details></article>`;fetch('content/'+x.f).then(r=>r.text()).then(t=>document.querySelector('#body').innerHTML=md(t)).catch(()=>document.querySelector('#body').innerHTML='<p>原文暂时无法载入。</p>');location.hash=x.f}
function home(){main.innerHTML=`<section class="hero"><div class="eyebrow">DUNGEONS & DRAGONS · 5.2.1</div><h1>把规则，放在<br>冒险触手可及的地方。</h1><p>一个安静、清晰、适合长时间阅读的 SRD 中文整理站。先从角色创建开始，逐步补齐整套规则。</p></section><section class="cards">${docs.filter(x=>x.ready).map(x=>`<div class="card" data-f="${x.f}"><h3>${x.t}</h3><p>${x.d}</p></div>`).join('')}</section>`;document.querySelectorAll('.card').forEach(c=>c.onclick=()=>openDoc(docs.find(x=>x.f===c.dataset.f)))}
search.oninput=e=>renderNav(e.target.value);document.querySelector('#theme').onclick=()=>document.body.classList.toggle('dark');renderNav();let initial=docs.find(x=>location.hash.slice(1)===x.f);initial?openDoc(initial):home();
