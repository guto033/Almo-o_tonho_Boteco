const MENU=[
["🍢","Petiscos",[["p1","Pão de alho recheado","Baguete com creme de alho e recheio à escolha. A partir de",45],["p2","Vaca Desatolada","Costela bovina desfiada e refogada (100g), aipim frito (150g)",59],["p3","Barrigada","Barriga suína marinada no limão com especiarias, frita",59],["p4","Feijão Amigo","Caldinho de feijoada (copo americano 200ml)",19],["p5","Provoleta","Provolone gratinado com orégano (250g), manjericão e tomate grelhado",49]]],
["🍟","Porções",[["o1","Alcatra Cream Cheese","Quatro queijos! 250g de alcatra em cubos, refogado na manteiga com alho",75],["o2","Mix Raiz","Aipim, batata rústica, batata palito, torresmo, bacon",65],["o3","Camarão à Milanesa","Camarão grande (250g) empanado no Panko",125],["o4","Isca de Peixe","Pescada amarela à milanesa, empanada no Panko (300g)",79],["o5","Isca de Frango","Peito de frango à milanesa (300g), empanado com flocos de milho",49],["o6","Porções Tradicionais","Batata frita, rústica ou aipim frito (300g) + barbecue de goiabada. A partir de",23]]],
["🧆","Bolinhos",[["b1","O cupim do boi de mamão","Bolinho de cupim marinado no vinho. Petisco do Comida di Buteco 2024",59],["b2","Suvaco de Sabugo (6 un)","Bolinho de milho verde com parmesão, empanado",47],["b3","Zé Pequeno (6 un)","Dadinho de tapioca com queijo minas e castanha do Pará",44],["b4","Colono (6 un)","Bolinho de linguiça colonial e queijo, vinagrete de abacaxi",39],["b5","Siri (6 un)","Bolinho de siri empanado no panko, maionese de limão siciliano",49]]],
["🍗","Coxinhas",[["c1","Coxinha de Costela (un)","Costela assada, desfiada, com massa artesanal. Campeã Comida di Buteco 2018",23],["c2","Coxinha de Queijo (un)","Muçarela e provolone, massa artesanal de aipim (150g)",18]]],
["🥟","Pastéis",[["t1","Pastel de Camarão","Molho vermelho com requeijão, vinagrete de abacaxi",42],["t2","Pastel Costela e Queijo","Costela assada, desfiada e refogada, muçarela e provolone",36],["t3","Pastel Muçarela c/ Parmesão","Muçarela e provolone, vinagrete de abacaxi",27],["t4","Vento Sul (4 pastéis)","4 pastéis recheados de vento, com barbecue de goiabada",15]]],
["🍛","Pratos Individuais",[["i1","Camarão com Abacaxi","Camarão, alho poró, tomate, cebola, leite de coco, requeijão, açafrão, abacaxi",138],["i2","Baião de Dois","Feijão vermelho, arroz, charque, calabresa, bacon, queijo, cebola, couve, vinagrete",87],["i3","Peixe à Milanesa","Filé de peixe à milanesa, arroz com legumes, lascas de coco e batata frita",109],["i4","Bife a Cavalo","Alcatra acebolada, ovo frito, queijo gratinado, batata rústica, arroz com crispe",94],["i5","Frango Parmegiana","Peito de frango recheado com presunto e queijo, molho de tomate, arroz e batata",79]]],
["🍽️","Pratos para 2",[["d1","Peixe ao Molho de Camarão (R$ 165)","Peixe à milanesa com molho de camarão e champignon, arroz com lascas de coco",165],["d2","Costela Assada","Costela bovina assada por 6h (aprox. 600g), arroz e legumes",208],["d3","Peixe ao Molho de Camarão (R$ 239)","Peixe à milanesa com molho de camarão e champignon, arroz com lascas de coco",239],["d4","Parmegiana de Frango Recheado","Peito de frango com presunto e queijo ao molho de tomate, arroz, legumes",149],["d5","Peixe Assado","Tainha assada (~700g) com mix de legumes à grega, arroz, batata",230],["d6","Camarão à Grega","Camarão à milanesa no Panko (250g), arroz à grega, aipim frito e legumes",215]]]];
const IT={};MENU.forEach(([e,c,l])=>l.forEach(([id,n,d,p])=>IT[id]={n,p}));
// FOTOS: id do prato -> caminho/URL da fotografia real (quadrada, ideal 400x400, .jpg/.webp).
// Fotos extraídas do cardápio oficial (Goomer). null = ainda sem foto: o app mostra o espaço reservado. Preencha só com fotos oficiais/autorizadas.
const FOTOS={
  p1:"img/p1.jpg",
  p2:"img/p2.jpg",
  p3:"img/p3.jpg",
  p4:"img/p4.jpg",
  p5:"img/p5.jpg",
  o1:"img/o1.jpg",
  o2:"img/o2.jpg",
  o3:"img/o3.jpg",
  o4:"img/o4.jpg",
  o5:"img/o5.jpg",
  o6:"img/o6.jpg",
  b1:"img/b1.jpg",
  b2:"img/b2.jpg",
  b3:"img/b3.jpg",
  b4:"img/b4.jpg",
  b5:"img/b5.jpg",
  c1:"img/c1.jpg",
  c2:"img/c2.jpg",
  t1:"img/t1.jpg",
  t2:"img/t2.jpg",
  t3:"img/t3.jpg",
  t4:"img/t4.jpg",
  i1:"img/i1.jpg",
  i2:"img/i2.jpg",
  i3:"img/i3.jpg",
  i4:null,
  i5:null,
  d1:"img/d1.jpg",
  d2:"img/d2.jpg",
  d3:"img/d3.jpg",
  d4:"img/d4.jpg",
  d5:"img/d5.jpg",
  d6:"img/d6.jpg"
};
const semFoto=Object.keys(IT).filter(i=>!FOTOS[i]);if(semFoto.length)console.info('Pratos sem foto ('+semFoto.length+'):',semFoto.map(i=>i+' '+IT[i].n).join(' | '));
const ph=(id,nm)=>FOTOS[id]?`<img class="im" src="${esc(FOTOS[id])}" alt="${esc(nm)}" width="104" height="104" loading="lazy" decoding="async" onerror="this.style.display='none'">`:'';

const $=document.getElementById('app'),esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const R=v=>'R$ '+v.toFixed(2).replace('.',','),slug=n=>n.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]/g,'');
const sha=async s=>[...new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(s)))].map(x=>x.toString(16).padStart(2,'0')).join('');
let db,unsub=null,ADMIN_HASH='4002a55b18e93de6f9e9d6d52c20618161e63c86f4beff9dcb2e72d027a65898',S={pt:'menu',sent:null,conf:false,upd:false,sending:false,who:'',au:'',sess:null,err:'',cat:0,cart:{},grp:false,split:'eq',per:[{}],pi:0,gopen:true,title:'',members:[''],note:'',sheet:false,saved:false,orders:[]};
const tot=it=>Object.entries(it||{}).reduce((s,[i,q])=>s+(IT[i]?IT[i].p*q:0),0),cnt=it=>Object.values(it||{}).reduce((s,q)=>s+q,0);
const heads=x=>x.mode=='grp'?Math.max(1,(x.members||[]).filter(m=>m.trim()).length):1;
const mineGet=sl=>{try{return JSON.parse(localStorage.getItem('tonho:mine:'+sl))}catch(e){return null}},mineSet=(sl,v)=>{try{localStorage.setItem('tonho:mine:'+sl,JSON.stringify(v))}catch(e){}};
// Grupo: split 'eq' = total dividido igualmente; 'pp' = cada um seus pratos (per: {nome: {id: q}}).
const isPP=x=>x.mode=='grp'&&x.split=='pp'&&x.per,ppOn=()=>S.grp&&S.split=='pp';
const nmOf=(m,i)=>m.trim()||'Pessoa '+(i+1),itTxt=it=>Object.entries(it||{}).map(([i,q])=>q+'x '+(IT[i]?IT[i].n:i)).join(', ');
const first=n=>String(n).trim().split(/\s+/)[0],joinE=a=>a.length>1?a.slice(0,-1).join(', ')+' e '+a[a.length-1]:a.join('');
const av=(m,i)=>`<span class="av av${i%4+1}" aria-hidden="true">${esc((m.trim()[0]||String(i+1)).toUpperCase())}</span>`;
const dirty=()=>!!S.sent&&JSON.stringify([S.cart,S.note])!==JSON.stringify([S.sent.items,S.sent.note]);
const nextSun=()=>{const d=new Date();d.setDate(d.getDate()+(7-d.getDay())%7);return d};
function splitLines(x){if(x.mode!='grp')return [];
 if(isPP(x))return Object.entries(x.per).map(([n,it])=>`${n}: ${itTxt(it)} — ${R(tot(it))}`);
 return [`Dividido igual entre ${heads(x)} pessoas: ${R(tot(x.items)/heads(x))} cada`]}
// Ícones (traço, herdam a cor do texto)
const sv=p=>`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
const I={user:sv('<circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 4.5-6 8-6s7 2 8 6"/>'),
 users:sv('<circle cx="9" cy="8" r="3.5"/><circle cx="17" cy="9" r="2.5"/><path d="M2.5 20c.8-3.5 3.5-5.5 6.5-5.5s5.7 2 6.5 5.5M16 14.5c2.6 0 4.8 1.7 5.5 4.5"/>'),
 bag:sv('<path d="M5 8h14l-1 12H6z"/><path d="M9 8a3 3 0 0 1 6 0"/>'),x:sv('<path d="M6 6l12 12M18 6L6 18"/>'),plus:sv('<path d="M12 5v14M5 12h14"/>'),
 trash:sv('<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>'),file:sv('<path d="M14 3H6v18h12V7z"/><path d="M14 3v4h4M9 13h6M9 17h6"/>'),
 copy:sv('<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V4H4v12h4"/>'),check:sv('<path d="M5 12l5 5L20 7"/>'),
 alert:sv('<circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16h.01"/>')};
const spin='<span class="spin" aria-hidden="true"></span>';
const alertBox=(k,t,m)=>`<div class="al ${k}" role="${k=='dg'?'alert':'status'}">${I.alert}<div><b>${esc(t)}</b>${esc(m)}</div></div>`;
const topBar=(right,adm)=>`<div class="top"><div class="logo"><span class="seal" aria-hidden="true"><i></i></span>TONHO${adm?' <span class="badge">ADMIN</span>':''}</div>${right}</div>`;
const opt=(a,v,on,ic,t,s)=>`<button class="opt${ic?'':' sm'}${on?' on':''}" data-a="${a}" data-v="${v}" role="radio" aria-checked="${on}">${ic?`<span class="ic">${ic}</span>`:''}<span class="tx"><b>${t}</b><small>${s}</small></span>${ic?'<span class="rd"></span>':''}</button>`;
function save(){try{sessionStorage.setItem('s',JSON.stringify(S.sess))}catch(e){}}
function start(){
 const local=window.TONHO_MODE!='online';
 // Acesso do administrador só pelo link secreto: …/#admin
 if(location.hash=='#admin')return `<div class="ent"><div style="margin-top:32px"><span class="seal lg" aria-hidden="true"><i></i></span></div><h1 class="d" style="margin:16px 0 6px">Área do organizador</h1><p class="mu" style="margin:0">Só para quem junta os pedidos.</p>
  <label class="field"><span>Usuário</span><input id="au" value="${esc(S.au)}" autocomplete="username" autocapitalize="none"></label>
  <label class="field"><span>Senha</span><span class="pw"><input id="pw" type="password" autocomplete="current-password"><button type="button" data-a="spw">Mostrar</button></span></label>
  ${S.err?alertBox('dg','Sem permissão',S.err):''}<p><button class="lnk" style="padding:0" data-a="home">← Voltar ao cardápio</button></p></div>
  <div class="bar"><button class="btn p" data-a="login">Entrar</button></div>`;
 const sun=nextSun();
 return `<div class="ent"><div class="poster"><span class="bigseal" aria-hidden="true"><span><i></i><b>TONHO</b><small>BOTECO</small></span></span><div class="pt"><span>Almoço de</span><span class="y">domingo · ${sun.getDate()}/${sun.getMonth()+1}</span></div></div>
  <h1 class="d">Como você vai almoçar?</h1>
  <div class="opts" role="radiogroup">${opt('m0','solo',!S.grp,I.user,'Individual','Só o meu prato')}${opt('m0','grp',S.grp,I.users,'Em grupo','Eu peço para várias pessoas')}</div>
  <label class="field"><span>${S.grp?'Nome do responsável pelo grupo':'Seu nome'}</span><input data-f="who" value="${esc(S.who)}" placeholder="Como te chamam no grupo" autocomplete="name"></label>
  ${S.grp?'<p class="hint">Você adiciona o resto do grupo no próximo passo.</p>':''}${S.err?`<p class="err">${esc(S.err)}</p>`:''}${local?'<p class="hint">Modo de teste: o pedido fica salvo só neste aparelho.</p>':''}</div>
  <div class="bar"><button class="btn p" data-a="go">Ver cardápio</button></div>`}
function render(){
 if(!db){$.innerHTML='<div class="empty"><h2 class="d">Erro ao iniciar</h2><p class="mu">Não foi possível carregar o sistema. Recarregue a página.</p></div>';return}
 if(!S.sess){$.innerHTML=start();return}
 if(S.sess.role=='a'){$.innerHTML=topBar('<button class="lnk" data-a="out">Sair</button>',1)+admin();return}
 $.innerHTML=topBar(`<div class="who"><span>${S.grp?'Grupo da':'Olá,'} <b>${esc(first(S.sess.name))}</b></span><button class="lnk" data-a="out">Sair</button></div>`)+tabs()+(S.pt=='mine'?mine():shop())+(S.conf?confirmBox():'');
}
function tabs(){return `<div class="tabs" role="tablist"><button role="tab" aria-selected="${S.pt=='menu'}" class="${S.pt=='menu'?'on':''}" data-a="pt" data-v="menu">Cardápio</button><button role="tab" aria-selected="${S.pt=='mine'}" class="${S.pt=='mine'?'on':''}" data-a="pt" data-v="mine">Meu pedido${dirty()?'<span class="dot" title="Alterações não enviadas"></span>':''}</button></div>`}
function confirmBox(){const o=S.sent,t=tot(o.items),h=heads(o);return `<div class="ov ctr"><div class="mdl" role="dialog" aria-modal="true" aria-labelledby="cft"><div class="okic">${I.check}</div><h2 class="d" id="cft" style="font-size:40px">${S.upd?'Pedido atualizado!':'Pedido enviado!'}</h2><p class="mu">Recebemos seu pedido, ${esc(first(S.sess.name))}. Se mudar de ideia, dá para alterar em “Meu pedido”.</p><div class="sumbox"><div class="row"><b>Total</b><b>${R(t)}</b></div>${o.mode=='grp'?`<div class="row mu sm"><span>${h} pessoas</span><span>${o.split=='pp'?'cada um paga o seu':R(t/h)+' cada'}</span></div>`:''}</div><button class="btn p" data-a="ok">OK</button></div></div>`}
function mine(){const o=S.sent;
 if(!o)return `<div class="empty"><div class="eic">${I.file}</div><h2 class="d">Nenhum pedido ainda</h2><p class="mu">Monte sua sacola no cardápio e toque em “Enviar pedido”. Ele aparece aqui.</p></div><div class="bar"><button class="btn s" data-a="pt" data-v="menu">Ir para o cardápio</button></div>`;
 const t=tot(o.items),h=heads(o),row=(a,b)=>`<div class="row it"><span>${a}</span><b>${b}</b></div>`;
 let s=dirty()?`<div class="pad">${alertBox('wn','Alterações não enviadas','Você mexeu na sacola depois de enviar. O pedido que vale ainda é o abaixo.')}</div>`:'';
 s+=`<div class="card"><div class="row"><h2 class="d">Pedido enviado</h2><span class="okb">Recebido</span></div><div class="mu sm" style="margin-top:6px">${esc(new Date(o.at).toLocaleString('pt-BR',{weekday:'long',day:'numeric',month:'short',hour:'2-digit',minute:'2-digit'}))}</div>`;
 if(o.mode=='grp')s+=`<div class="lbl">Integrantes</div><div>${esc(joinE(o.members||[]))}</div>`;
 if(isPP(o))s+='<div class="lbl">Divisão · cada um seus pratos</div>'+Object.entries(o.per).map(([n,it])=>row(`<b>${esc(n)}</b> <span class="mu sm">· ${esc(itTxt(it))}</span>`,R(tot(it)))).join('');
 else{s+='<div class="lbl">Itens</div>'+Object.entries(o.items||{}).map(([id,q])=>row(`${q}× ${esc(IT[id]?IT[id].n:id)}`,R((IT[id]?IT[id].p:0)*q))).join('');
  if(o.mode=='grp')s+=`<div class="lbl">Divisão</div><div>Dividir igual · <b>${R(t/h)}</b> por pessoa</div>`}
 if(o.note)s+=`<div class="lbl">Observações</div><div>${esc(o.note)}</div>`;
 return s+`<div class="row tot2"><b>Total</b><span class="d">${R(t)}</span></div></div><div class="bar"><button class="btn p" data-a="edit">Alterar pedido</button></div>`}
function group(){
 const ms=S.members,named=ms.filter(m=>m.trim()).length;let h;
 if(!S.gopen)h=`<div class="gsum"><span><b>${named} pessoas</b> · ${S.split=='pp'?'Cada um seus pratos':'Dividir igual'}</span><button class="lnk" data-a="gopen">Editar</button></div>`;
 else h=`<div class="card"><div class="row"><h2 class="d">Quem vai almoçar?</h2><span class="mu sm">${named} pessoas</span></div>
  ${ms.map((m,i)=>`<div class="mem">${av(m,i)}<input data-f="mem" data-i="${i}" value="${esc(m)}" placeholder="Nome da pessoa ${i+1}" aria-label="Nome da pessoa ${i+1}">${ms.length>1?`<button class="x" data-a="memrm" data-i="${i}" aria-label="Remover ${esc(nmOf(m,i))}">${I.x}</button>`:''}</div>`).join('')}
  <button class="dash" data-a="mem">${I.plus} Adicionar pessoa</button>
  <div class="field" style="margin-top:18px"><span>Como dividir a conta?</span></div>
  <div class="spl" role="radiogroup">${opt('split','eq',S.split=='eq','','Dividir igual','Total ÷ '+(named||1)+' pessoas')}${opt('split','pp',S.split=='pp','','Cada um seus pratos','Cada um paga o seu')}</div>
  <div style="margin-top:12px"><button class="btn s sm" data-a="gclose">Pronto</button></div></div>`;
 if(S.split=='pp'){const cur=nmOf(ms[S.pi]||'',S.pi);
  h+=`<div class="pfor"><span class="cap">Pedindo para</span><div class="pcs" role="radiogroup">${ms.map((m,i)=>`<button class="pchip${S.pi==i?' on':''}" data-a="pi" data-v="${i}" role="radio" aria-checked="${S.pi==i}">${av(m,i)}<span class="nm">${esc(first(nmOf(m,i)))}</span>${cnt(S.per[i])?`<span class="ct">${cnt(S.per[i])}</span>`:''}</button>`).join('')}</div><span class="sm">O que você adicionar agora vai para <b>${esc(cur)}</b>.</span></div>`}
 return h}
function shop(){
 const n=cnt(S.cart),pp=ppOn(),cur=pp?S.per[S.pi]||{}:S.cart,who=pp?first(nmOf(S.members[S.pi]||'',S.pi)):'';
 let h=(S.grp?group():'')+(S.err&&!S.sheet?`<p class="err pad">${esc(S.err)}</p>`:'');
 h+=`<div class="cats">${MENU.map((m,i)=>`<button class="chip${S.cat==i?' on':''}" data-a="cat" data-v="${i}">${m[1]}</button>`).join('')}</div>`;
 const m=MENU[S.cat];h+=`<h2 class="d sec">${m[1]}</h2>`;
 m[2].forEach(([id,nm,d,p])=>{const q=cur[id]||0;
  const tags=pp?S.members.map((x,i)=>i!=S.pi&&S.per[i]&&S.per[i][id]?`<span class="tag">${esc(first(nmOf(x,i)))} ×${S.per[i][id]}</span>`:'').join(''):'';
  h+=`<div class="dish"><div class="t"><div class="n">${esc(nm)}</div><div class="ds">${esc(d)}</div><div class="pl"><span class="pr">${R(p)}</span>${tags}</div></div><div class="ph">${FOTOS[id]?ph(id,nm):`<div class="nf" title="Foto em breve"><span>${esc(nm[0])}</span></div>`}${q?`<div class="qs"><button data-a="q" data-id="${id}" data-d="-1" aria-label="Tirar um ${esc(nm)}">−</button>${q}<button data-a="q" data-id="${id}" data-d="1" aria-label="Mais um ${esc(nm)}">+</button></div>`:`<button class="add" data-a="q" data-id="${id}" data-d="1" aria-label="Adicionar ${esc(nm)}${who?' para '+esc(who):''}">${I.plus}${who?`<span>${esc(who)}</span>`:''}</button>`}</div></div>`});
 h+=`<div class="bar">${n?`<button class="btn p cart" data-a="sheet"><span>${I.bag} Ver sacola (${n})</span><span>${R(tot(S.cart))}</span></button>`:`<button class="btn" disabled>${I.bag} Sacola vazia</button>`}</div>`;
 if(S.sheet)h+=sheet();return h;
}
function sheet(){
 const pp=ppOn(),names=S.members.map(m=>m.trim()).filter(Boolean),t=tot(S.cart);
 const row=(id,q,m)=>`<div class="li"><div class="t"><b>${esc(IT[id].n)}</b><small>${R(IT[id].p)} cada</small></div><div class="stp"><button data-a="q" data-id="${id}" data-d="-1"${m} aria-label="Tirar um">−</button>${q}<button data-a="q" data-id="${id}" data-d="1"${m} aria-label="Mais um">+</button></div><b class="lt">${R(IT[id].p*q)}</b></div>`;
 let b='';
 if(pp)S.members.forEach((nm,i)=>{const it=S.per[i]||{};if(!cnt(it))return;b+=`<div class="pcard"><div class="row"><span>${av(nm,i)}<b>${esc(nmOf(nm,i))}</b></span><b>${R(tot(it))}</b></div>${Object.entries(it).map(([id,q])=>row(id,q,` data-m="${i}"`)).join('')}</div>`});
 else b=Object.entries(S.cart).map(([id,q])=>row(id,q,'')).join('');
 b+=`<label class="field"><span>Observações</span><textarea rows="2" data-f="note" placeholder="Ex.: pastel bem frito, sem cebola">${esc(S.note)}</textarea></label>`;
 if(S.grp&&!pp&&names.length)b+=`<div class="split"><div><b>Dividido entre ${names.length} pessoas</b><small>${esc(joinE(names))}</small></div><div><span class="d">${R(t/names.length)}</span><small style="text-align:right">cada</small></div></div>`;
 if(S.err)b+=alertBox('dg',/internet/.test(S.err)?'Sem internet':'Não deu certo',S.err);
 return `<div class="ov"><div class="sh" role="dialog" aria-modal="true" aria-labelledby="sht"><div class="hd"><h2 class="d" id="sht">${pp?'Sacola do grupo':'Sua sacola'}</h2><button class="x" data-a="close" aria-label="Fechar">${I.x}</button></div><div class="bd">${b}</div><div class="ft"><div class="tot"><b>${pp?'Total do grupo':'Total'}</b><span class="d">${R(t)}</span></div><button class="btn p${S.sending?' busy':''}" data-a="send" ${S.sending?'disabled':''}>${S.sending?spin+' Enviando pedido…':S.saved?'Atualizar pedido':'Enviar pedido'}</button></div></div></div>`;
}
function pdf(){
 if(!S.orders.length){alert('Não há pedidos para gerar.');return}
 const J=window.jspdf;if(!J){alert('Biblioteca de PDF indisponível (sem internet). Na janela de impressão, escolha "Salvar como PDF".');print();return}
 const d=new J.jsPDF({unit:'mm',format:'a4'}),W=210,M=14,CW=W-2*M,sun=nextSun();let y=0;
 const C={ac:[200,68,26],red:[211,50,30],hl:[246,181,30],hls:[253,237,192],tx:[28,20,16],mu:[107,84,68],bd:[232,214,189],cr:[251,243,228],sf:[241,228,207]};
 const fill=c=>d.setFillColor(...c),wrap=(s,w,sz)=>{d.setFontSize(sz);return d.splitTextToSize(String(s),w)};
 const T=(s,x,yy,o={})=>{d.setFont('helvetica',o.b?'bold':o.i?'italic':'normal');d.setFontSize(o.s||10);d.setTextColor(...(o.c||C.tx));d.text(s,x,yy,o.a?{align:o.a}:undefined)};
 const need=h=>{if(y+h>282){d.addPage();y=18}};
 const sec=t=>{need(16);T(t,M,y,{b:1,s:12,c:C.ac});d.setDrawColor(...C.ac);d.setLineWidth(.6);d.line(M,y+2.2,W-M,y+2.2);y+=9};
 // Cabeçalho com as listras do letreiro
 for(let x=0,k=0;x<W;x+=7,k++){fill(k%2?C.cr:C.red);d.rect(x,0,7,5,'F')}
 y=19;T('ALMOÇO NO TONHO',M,y,{b:1,s:22});
 T('Pedido de '+sun.toLocaleDateString('pt-BR',{weekday:'long',day:'numeric',month:'long'}),M,y+7,{s:11,c:C.mu});
 T('Gerado em '+new Date().toLocaleString('pt-BR',{dateStyle:'short',timeStyle:'short'}),W-M,y,{s:9,c:C.mu,a:'right'});
 y+=15;
 // Números do dia
 const tot1={};S.orders.forEach(x=>Object.entries(x.items||{}).forEach(([i,q])=>tot1[i]=(tot1[i]||0)+q));
 const sw=(CW-8)/3,stat=(k,v,l,h)=>{const x=M+k*(sw+4);fill(h?C.hl:C.sf);d.roundedRect(x,y,sw,19,2.5,2.5,'F');T(String(v),x+5,y+10.5,{b:1,s:20});T(l,x+5,y+15.5,{b:1,s:8,c:h?C.tx:C.mu})};
 stat(0,S.orders.reduce((a,x)=>a+heads(x),0),'PESSOAS',1);stat(1,S.orders.length,'PEDIDOS');stat(2,cnt(tot1),'PRATOS');y+=29;
 // Para a cozinha: total por prato, na ordem do cardápio
 sec('PARA A COZINHA  ·  TOTAL POR PRATO');
 const ord=Object.keys(IT);
 Object.entries(tot1).sort((a,b)=>ord.indexOf(a[0])-ord.indexOf(b[0])).forEach(([i,q],k)=>{need(7.5);if(k%2==0){fill(C.cr);d.rect(M,y-5,CW,7.5,'F')}
  T(q+'x',M+13,y,{b:1,s:11,a:'right'});T(IT[i]?IT[i].n:i,M+17,y,{s:11});y+=7.5});
 y+=7;
 // Um bloco por pedido
 sec('POR PEDIDO');
 S.orders.forEach(x=>{const t=tot(x.items),h=heads(x),g=x.mode=='grp',pp=isPP(x);
  need(30);fill(C.sf);d.roundedRect(M,y-5.5,CW,13,2,2,'F');
  T(tt(x),M+4,y,{b:1,s:12});T(R(t),W-M-4,y,{b:1,s:12,a:'right'});
  T(g?`Grupo · ${h} pessoas · ${pp?'cada um paga os seus pratos':'conta dividida igualmente'}`:'Individual',M+4,y+4.8,{s:8.5,c:C.mu});y+=13;
  if(g){const l=wrap('Integrantes: '+joinE((x.members||[]).filter(m=>m.trim())),CW-8,10);need(l.length*5);T(l,M+4,y,{s:10});y+=l.length*5+2}
  const line=(a,b,o={})=>{const l=wrap(a,CW-42,o.s||10);need(l.length*5+1);T(l,M+4,y,o);if(b)T(b,W-M-4,y,{...o,a:'right'});y+=l.length*5};
  if(pp)Object.entries(x.per).forEach(([n,it])=>{line(n,R(tot(it)),{b:1});line(itTxt(it).replace(/, /g,'  ·  '),'',{s:9,c:C.mu});y+=2});
  else Object.entries(x.items||{}).forEach(([i,q])=>line(q+'x '+(IT[i]?IT[i].n:i),R((IT[i]?IT[i].p:0)*q)));
  if(g&&!pp){need(10);y+=1;fill(C.hls);d.roundedRect(M+2,y-4.5,CW-4,8,1.5,1.5,'F');T(`Dividido igual entre ${h} pessoas`,M+5,y+0.8,{s:10});T(R(t/h)+' cada',W-M-5,y+0.8,{b:1,s:10,a:'right'});y+=7}
  if(x.note){y+=1;line('Obs.: '+x.note,'',{i:1,s:9.5,c:C.mu})}
  y+=8});
 // Rodapé com numeração
 const N=d.getNumberOfPages();for(let p=1;p<=N;p++){d.setPage(p);d.setDrawColor(...C.bd);d.setLineWidth(.3);d.line(M,287,W-M,287);T('Almoço no Tonho',M,292,{s:8,c:C.mu});T(`Página ${p} de ${N}`,W-M,292,{s:8,c:C.mu,a:'right'})}
 d.save(`pedido-almoco-tonho-${sun.getDate()}-${sun.getMonth()+1}.pdf`)}
const tt=x=>x.title||(x.mode=='grp'?'Grupo de '+x.name:x.name);
function summary(){const t={};S.orders.forEach(x=>Object.entries(x.items||{}).forEach(([i,q])=>t[i]=(t[i]||0)+q));
 let s=`PEDIDO DE ALMOÇO — ${S.orders.reduce((a,x)=>a+heads(x),0)} pessoas\n\nTOTAL POR ITEM\n`;
 Object.entries(t).forEach(([i,q])=>s+=`${q}x ${IT[i]?IT[i].n:i}\n`);s+='\nPOR PEDIDO\n';
 S.orders.forEach(x=>{s+=`\n${tt(x)}${x.mode=='grp'?' ('+heads(x)+' pessoas)':''} — ${R(tot(x.items))}\n`+(x.mode=='grp'?` Integrantes: ${joinE((x.members||[]).filter(m=>m.trim()))}\n`:'');
  if(!isPP(x))s+=Object.entries(x.items||{}).map(([i,q])=>` - ${q}x ${IT[i]?IT[i].n:i}\n`).join('');
  s+=splitLines(x).map(l=>` - ${l}\n`).join('')+(x.note?` Obs: ${x.note}\n`:'')});
 return s}
function admin(){
 const n=S.orders.length,ppl=S.orders.reduce((a,x)=>a+heads(x),0);
 let h=`<h1 class="d atitle">${esc(nextSun().toLocaleDateString('pt-BR',{weekday:'long',day:'numeric',month:'long'}))}</h1>`;
 if(window.TONHO_MODE!='online')h+=`<div class="pad">${alertBox('wn','Modo local','O painel só mostra pedidos feitos neste mesmo navegador. Configure o Firebase (veja o README) para receber pedidos de todos os aparelhos.')}</div>`;
 if(S.err)h+=`<div class="pad">${alertBox('dg','Erro',S.err)}</div>`;
 h+=`<div class="stats"><div class="stat${n?' hl':''}"><span class="d">${n}</span><small>pedidos</small></div><div class="stat"><span class="d">${ppl}</span><small>pessoas</small></div></div>`;
 if(!n)return h+`<div class="empty"><h2 class="d">Ninguém pediu ainda</h2><p class="mu">Mande o link do cardápio no grupo do WhatsApp. Os pedidos aparecem aqui.</p><button class="btn s sm" data-a="clink">${I.copy} Copiar link do cardápio</button><p id="cp" class="okt"></p></div><div class="bar"><button class="btn" disabled>${I.file} Gerar PDF</button></div>`;
 h+=`<div class="card"><div class="row"><b>Resumo para o restaurante</b><button class="lnk" data-a="copy">${I.copy} Copiar</button></div><pre id="sum">${esc(summary())}</pre><span id="cp" class="okt"></span></div><h3 class="hsm">Pedidos (${n})</h3><p class="mu sm pad" style="margin:4px 0 0">Exclua os pedidos que não devem entrar. O resumo e o PDF mostram só o que sobrar.</p>`;
 S.orders.forEach(x=>{const t=tot(x.items),hd=heads(x),g=x.mode=='grp';
  h+=`<div class="card"><div class="row"><span><b>${esc(x.name)}</b> <span class="mu sm">· ${g?'grupo de '+hd:'individual'}${x.at?' · '+new Date(x.at).toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'}):''}</span></span><b>${R(t)}</b></div>`;
  if(g)h+=`<div class="mu sm" style="margin-top:4px">Integrantes: ${esc(joinE((x.members||[]).filter(m=>m.trim())))}</div><div class="mu sm">${isPP(x)?'Cada um seus pratos':'Dividir igual · '+R(t/hd)+' cada'}</div>`;
  if(isPP(x))h+=Object.entries(x.per).map(([p,it])=>`<div class="row it sm"><span>${esc(p)} <span class="mu">· ${esc(itTxt(it))}</span></span><span>${R(tot(it))}</span></div>`).join('');
  else h+=`<div class="sm" style="margin-top:6px">${esc(itTxt(x.items))}</div>`;
  h+=`${x.note?`<div class="mu sm" style="margin-top:4px">Obs: ${esc(x.note)}</div>`:''}<button class="btn dg" data-a="del" data-id="${x.id}">${I.trash} Excluir pedido</button></div>`});
 return h+`<div class="bar"><button class="btn p" data-a="pdf">${I.file} Gerar PDF</button></div>`;
}
function loadMine(){const m=mineGet(S.sess.slug);S.sess.id=(m&&m.id)||S.sess.slug+'-'+(crypto.randomUUID?crypto.randomUUID():Math.random().toString(36).slice(2)+Date.now().toString(36)).replace(/-/g,'').slice(0,12);S.sent=(m&&m.order)||null;S.pt=S.sent?'mine':'menu';
 if(m&&m.order){const d=m.order;S.cart=Object.assign({},d.items);S.grp=d.mode=='grp';S.split=d.split||'eq';S.title=d.title||'';S.members=(d.members&&d.members.length)?d.members.slice():[''];S.per=S.members.map(n=>Object.assign({},d.per&&d.per[n.trim()]));S.pi=0;S.note=d.note||'';S.saved=true;S.gopen=false}}
function watch(){if(unsub)unsub();unsub=db.collection('orders').onSnapshot(s=>{S.err='';S.orders=s.docs.map(d=>Object.assign({id:d.id},d.data()));if(S.sess&&S.sess.role=='a'&&!document.activeElement.closest('input,textarea'))render()},e=>{S.err='Não foi possível ler os pedidos ('+((e&&e.code)||'erro')+').';if(S.sess&&S.sess.role=='a')render()})}
const noHash=()=>history.replaceState(null,'',location.pathname+location.search);
async function copyTxt(t,c,sel){try{await navigator.clipboard.writeText(t);c.textContent='Copiado!'}catch(x){if(sel){const r=document.createRange();r.selectNodeContents(sel);getSelection().removeAllRanges();getSelection().addRange(r);c.textContent='Selecionado: copie com Ctrl+C'}else c.textContent=t}}
addEventListener('hashchange',()=>{S.err='';render()});
$.addEventListener('input',e=>{const d=e.target.dataset,f=d.f;if(e.target.id=='au')S.au=e.target.value;else if(f=='title')S.title=e.target.value;else if(f=='who')S.who=e.target.value;else if(f=='note')S.note=e.target.value;else if(f=='mem')S.members[d.i]=e.target.value});
$.addEventListener('click',async e=>{const b=e.target.closest('[data-a]');if(!b)return;const d=b.dataset,a=d.a;
 if(a=='home'){noHash();S.err=''}
 else if(a=='spw'){const p=document.getElementById('pw');p.type=p.type=='password'?'text':'password';b.textContent=p.type=='password'?'Mostrar':'Ocultar';return}
 else if(a=='m0'){S.grp=d.v=='grp';S.err=''}
 else if(a=='go'){const name=S.who.trim(),sl=slug(name);if(!sl){S.err='Escreva seu nome para continuar.';render();return}
  S.sess={role:'p',slug:sl,name};S.gopen=true;loadMine();if(S.grp&&!S.members.some(m=>m.trim())){S.members=[name,''];S.per=[{},{}]}S.err='';save()}
 else if(a=='pt'){S.pt=d.v;S.err='';scrollTo(0,0)}
 else if(a=='edit'){S.pt='menu';S.sheet=true;S.err=''}
 else if(a=='ok'){S.conf=false;S.pt='mine';scrollTo(0,0)}
 else if(a=='cat'){S.cat=+d.v;scrollTo(0,0)}
 else if(a=='pi')S.pi=+d.v;
 else if(a=='gopen')S.gopen=true;else if(a=='gclose')S.gopen=false;
 else if(a=='q'){const dd=+d.d;
  if(ppOn()){const k=d.m!=null?+d.m:S.pi,it=S.per[k]=S.per[k]||{};if(dd<0&&!it[d.id])return;it[d.id]=(it[d.id]||0)+dd;if(it[d.id]<=0)delete it[d.id]}
  S.cart[d.id]=(S.cart[d.id]||0)+dd;if(S.cart[d.id]<=0)delete S.cart[d.id];if(!cnt(S.cart))S.sheet=false}
 else if(a=='sheet'){S.sheet=true;S.err=''}else if(a=='close')S.sheet=false;
 else if(a=='split'&&d.v!=S.split){S.per=S.members.map(()=>({}));if(d.v=='pp'){S.per[0]=Object.assign({},S.cart);S.pi=0}S.split=d.v;S.err=''}
 else if(a=='mem'){S.members.push('');S.per.push({})}
 else if(a=='memrm'){const i=+d.i,it=S.per[i]||{};if(cnt(it)&&!confirm('Os pratos dessa pessoa serão removidos da sacola. Continuar?'))return;
  Object.entries(it).forEach(([id,q])=>{S.cart[id]-=q;if(S.cart[id]<=0)delete S.cart[id]});S.members.splice(i,1);S.per.splice(i,1);if(S.pi>=S.members.length)S.pi=S.members.length-1;if(!cnt(S.cart))S.sheet=false}
 else if(a=='out'){if(S.sess.role=='p'&&!S.saved&&cnt(S.cart)&&!confirm('Sua sacola ainda não foi enviada. Sair mesmo assim?'))return;
  if(S.sess.role=='a'){if(unsub){unsub();unsub=null}if(window.TONHO_AUTH)try{await TONHO_AUTH.signOut()}catch(x){}noHash()}
  S.sess=null;S.sent=null;S.pt='menu';S.conf=false;S.sending=false;S.cart={};S.saved=false;S.grp=false;S.split='eq';S.per=[{}];S.pi=0;S.gopen=true;S.title='';S.who='';S.au='';S.members=[''];S.note='';S.err='';S.sheet=false;S.orders=[];try{sessionStorage.removeItem('s')}catch(x){}}
 else if(a=='login'){S.err='';const u=document.getElementById('au').value.trim(),pw=document.getElementById('pw').value;
  if(!u||!pw){S.err='Informe usuário e senha.';render();return}
  try{if(window.TONHO_MODE=='online')await TONHO_AUTH.signInWithEmailAndPassword(slug(u)+'@almocotonho.app',pw);
   else if(await sha(slug(u)+':'+pw)!==ADMIN_HASH)throw{code:'bad'};
   S.sess={role:'a'};watch();save()}
  catch(x){const c=(x&&x.code)||'';S.err=(c=='bad'||/auth\/(invalid|wrong|user-not)/.test(c))?'Usuário ou senha incorretos. Confira e tente de novo.':'Erro ao entrar'+(c?' ('+c+')':'')+'.'}}
 else if(a=='send'){if(S.sending)return;const ms=S.members.map(m=>m.trim());
  if(S.grp&&!ms.some(Boolean)){S.err='Informe as pessoas do grupo.';S.sheet=false;S.gopen=true;render();scrollTo(0,0);return}
  let per=null;if(ppOn()){per={};for(let i=0;i<ms.length;i++){if(!cnt(S.per[i]))continue;
   if(!ms[i]){S.err='Digite o nome de todas as pessoas que têm pratos.';render();return}
   if(per[ms[i]]){S.err='Há nomes repetidos no grupo: '+ms[i]+'.';render();return}per[ms[i]]=S.per[i]}}
  const o=JSON.parse(JSON.stringify({name:S.sess.name,mode:S.grp?'grp':'ind',title:'',members:S.grp?ms.filter(Boolean):[],split:S.grp?S.split:null,items:S.cart,per,note:S.note,at:Date.now()})),was=S.saved;
  S.sending=true;S.err='';render();
  try{await Promise.race([db.collection('orders').doc(S.sess.id).set(o),new Promise((_,rj)=>setTimeout(()=>rj({code:'timeout'}),15000))]);
   mineSet(S.sess.slug,{id:S.sess.id,order:o});S.sent=o;S.saved=true;S.upd=was;S.conf=true;S.sheet=false;S.gopen=false;S.err=''}
  catch(x){const c=(x&&x.code)||'';S.err=c=='timeout'?'O pedido não foi enviado, mas sua sacola está guardada. Verifique a internet e tente de novo.':c=='permission-denied'?'Sem permissão para enviar (regras do Firebase). Avise o organizador.':'Não foi possível enviar'+(c?' ('+c+')':'')+'. Tente de novo.'}
  S.sending=false}
 else if(a=='del'){if(confirm('Excluir este pedido?'))await db.collection('orders').doc(d.id).delete().catch(()=>{});return}
 else if(a=='pdf'){pdf();return}
 else if(a=='copy'){copyTxt(summary(),document.getElementById('cp'),document.getElementById('sum'));return}
 else if(a=='clink'){copyTxt(location.origin+location.pathname,document.getElementById('cp'));return}
 render();
});
(async()=>{try{db=await claude.use('db');let s=null;try{s=JSON.parse(sessionStorage.getItem('s'))}catch(e){}
 if(s&&s.role=='p'){S.sess=s;S.who=s.name;loadMine()}
 else if(s&&s.role=='a'){const ok=window.TONHO_MODE!='online'||await new Promise(r=>{const u=TONHO_AUTH.onAuthStateChanged(x=>{u();r(!!x)})});if(ok){S.sess={role:'a'};watch()}}
}catch(e){}render()})();
