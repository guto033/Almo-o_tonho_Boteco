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
let db,unsub=null,ADMIN_HASH='4002a55b18e93de6f9e9d6d52c20618161e63c86f4beff9dcb2e72d027a65898',S={pt:'menu',sent:null,conf:false,upd:false,sending:false,who:'',sess:null,tab:'p',err:'',cat:0,cart:{},shared:[],jd:null,grp:false,title:'',members:[''],note:'',sheet:false,saved:false,orders:[]};
const tot=it=>Object.entries(it||{}).reduce((s,[i,q])=>s+(IT[i]?IT[i].p*q:0),0),cnt=it=>Object.values(it||{}).reduce((s,q)=>s+q,0);
const heads=x=>x.mode=='grp'?Math.max(1,(x.members||[]).filter(m=>m.trim()).length):1;
const mineGet=sl=>{try{return JSON.parse(localStorage.getItem('tonho:mine:'+sl))}catch(e){return null}},mineSet=(sl,v)=>{try{localStorage.setItem('tonho:mine:'+sl,JSON.stringify(v))}catch(e){}};
function save(){try{sessionStorage.setItem('s',JSON.stringify(S.sess))}catch(e){}}
function start(){
 const local=window.TONHO_MODE!='online';
 if(S.tab=='a')return `<header><b>🍽️ Almoço no Tonho</b><button data-a="tab" data-v="p">← Voltar</button></header><div class="box"><b>Administrador</b><input id="au" placeholder="Usuário" autocomplete="username" autocapitalize="none"><input id="pw" type="password" placeholder="Senha" autocomplete="current-password"><p class="err">${esc(S.err)}</p><button class="p" style="width:100%" data-a="login">Entrar</button></div>`;
 return `<header><b>🍽️ Almoço no Tonho</b><button data-a="tab" data-v="a">Administrador</button></header><div class="box"><b>Como você vai almoçar?</b><div class="seg"><button class="chip ${S.grp?'':'on'}" data-a="m0" data-v="solo">🙋 Individual</button><button class="chip ${S.grp?'on':''}" data-a="m0" data-v="grp">👥 Em grupo</button></div><input data-f="who" value="${esc(S.who)}" placeholder="${S.grp?'Nome do responsável pelo grupo':'Seu nome'}" autocomplete="name"><p class="err">${esc(S.err)}</p><button class="p" style="width:100%" data-a="go">Ver cardápio</button>${local?'<p class="mu">Modo de teste: o pedido fica salvo só neste aparelho.</p>':''}</div>`}
function render(){
 if(!db){$.innerHTML='<div class="box"><b>Erro ao iniciar</b><p>Não foi possível carregar o sistema. Recarregue a página.</p></div>';return}
 if(!S.sess){$.innerHTML=start();return}
 $.innerHTML=`<header><b>🍽️ ${S.sess.role=='a'?'Painel do administrador':'Olá, '+esc(S.sess.name)}</b><button data-a="out">${S.sess.role=='a'?'Sair':'Início'}</button></header>`+(S.sess.role=='a'?admin():tabs()+(S.pt=='mine'?mine():shop())+(S.conf?confirmBox():''));
}
function tabs(){return `<div class="seg" style="margin:10px 12px"><button class="chip ${S.pt=='menu'?'on':''}" data-a="pt" data-v="menu">🍽️ Cardápio</button><button class="chip ${S.pt=='mine'?'on':''}" data-a="pt" data-v="mine">📋 Meu pedido${S.sent?' ✓':''}</button></div>`}
function confirmBox(){const o=S.sent;return `<div class="sheet" style="z-index:40;align-items:center"><div style="width:calc(100% - 32px);max-width:420px;border-radius:18px;text-align:center"><div style="font-size:3rem">✅</div><h2 style="margin:6px 0">${S.upd?'Pedido atualizado!':'Pedido enviado!'}</h2><p>Recebemos seu pedido, <b>${esc(S.sess.name)}</b>.<br>Total: <b>${R(tot(o.items))}</b></p><p class="mu">Você pode conferir ou alterar na aba “Meu pedido”.</p><button class="p" style="width:100%" data-a="ok">OK</button></div></div>`}
function mine(){const o=S.sent;
 if(!o)return `<div class="box"><b>Você ainda não enviou um pedido.</b><p class="mu">Escolha seus pratos no cardápio e envie o pedido.</p><button class="p" style="width:100%" data-a="pt" data-v="menu">Ir para o cardápio</button></div>`;
 const dirty=JSON.stringify([S.cart,S.note,S.shared])!==JSON.stringify([o.items,o.note,o.shared]);
 let h=`<div class="box"><div class="row"><b>${esc(tt(o))}</b><span class="ok">✓ Enviado</span></div><div class="mu">${new Date(o.at).toLocaleString('pt-BR')}</div>`;
 if(o.mode=='grp')h+=`<div class="mu">Integrantes: ${esc((o.members||[]).join(', '))}</div>`;
 Object.entries(o.items||{}).forEach(([id,q])=>{h+=`<div class="row" style="padding:8px 0;border-bottom:1px solid var(--bd)"><span>${q}x ${esc(IT[id]?IT[id].n:id)}</span><span>${R((IT[id]?IT[id].p:0)*q)}</span></div>`});
 (o.shared||[]).forEach(j=>{if(IT[j.id])h+=`<div class="mu">👥 ${esc(IT[j.id].n)} dividido entre ${esc(j.members.join(', '))} (titular: ${esc(j.members[j.holder])})</div>`});
 if(o.note)h+=`<div class="mu" style="margin-top:8px">Obs.: ${esc(o.note)}</div>`;
 h+=`<p class="row"><b>Total</b><b>${R(tot(o.items))}</b></p>`;
 if(dirty)h+='<p class="err">Você tem alterações que ainda não foram enviadas.</p>';
 return h+'<button class="p" style="width:100%" data-a="edit">✏️ Alterar pedido</button></div>'}
function shop(){
 const n=cnt(S.cart);let h=party()+(S.saved?'<p class="ok" style="margin:0 14px">✓ Pedido enviado. Para alterar, mexa na sacola e toque em “Atualizar pedido”.</p>':'')+`<div class="chips">${MENU.map((m,i)=>`<span class="chip ${S.cat==i?'on':''}" data-a="cat" data-v="${i}">${m[0]} ${m[1]}</span>`).join('')}</div>`;
 const m=MENU[S.cat];h+=`<h2>${m[1]}</h2>`;
 m[2].forEach(([id,nm,d,p])=>{const q=S.cart[id]||0;h+=`<div class="dish"><div class="t"><div class="n">${esc(nm)}</div><div class="mu">${esc(d)}</div><div class="pr">${R(p)}</div>${S.grp&&S.members.filter(x=>x.trim()).length>1?`<button class="chip dv" data-a="jt" data-id="${id}">👥 Dividir</button>`:''}</div><div class="ph${FOTOS[id]?"":" nf"}">${FOTOS[id]?ph(id,nm):'<span title="Foto em breve">📷</span>'}${q?`<div class="qs"><button data-a="q" data-id="${id}" data-d="-1">−</button>${q}<button data-a="q" data-id="${id}" data-d="1">+</button></div>`:`<button class="add" data-a="q" data-id="${id}" data-d="1">+</button>`}</div></div>`});
 if(n)h+=`<div class="bar"><button class="p" data-a="sheet"><span>🛍️ Ver sacola (${n})</span><span>${R(tot(S.cart))}</span></button></div>`;
 
 if(S.sheet)h+=sheet();if(S.jd)h+=jmodal();return h;
}
function sheet(){
 let h=`<div class="sheet"><div><div class="row"><h2 style="margin:0">Sua sacola</h2><button data-a="close">Fechar</button></div>`;
 Object.entries(S.cart).forEach(([id,q0])=>{const q=q0-S.shared.filter(j=>j.id==id).length;if(q<=0)return;h+=`<div class="row" style="padding:8px 0;border-bottom:1px solid var(--bd)"><span>${esc(IT[id].n)}<br><span class="mu">${R(IT[id].p)}</span></span><span>${q}x <button data-a="q" data-id="${id}" data-d="-1">−</button> <button data-a="q" data-id="${id}" data-d="1">+</button></span></div>`});
 S.shared.forEach((j,i)=>{h+=`<div class="box" style="margin:8px 0"><div class="row"><b>👥 ${esc(IT[j.id].n)}</b><button data-a="jrm" data-i="${i}">Remover</button></div><div class="mu">Titular: <b>${esc(j.members[j.holder])}</b> · Com: ${esc(j.members.join(', '))}</div><div class="mu">${R(IT[j.id].p)} ÷ ${j.members.length} = ${R(IT[j.id].p/j.members.length)} por pessoa</div></div>`});h+=(S.grp?`<div class="mu" style="margin:10px 0">👥 Grupo de <b>${esc(S.sess.name)}</b> · ${S.members.filter(m=>m.trim()).length} pessoas</div>`:"")+`<textarea rows="2" data-f="note" placeholder="Observações (sem cebola, alergias…)">${esc(S.note)}</textarea><p class="row"><b>Total</b><b>${R(tot(S.cart))}</b></p><p class="err">${esc(S.err)}</p><button class="p" style="width:100%" data-a="send" ${S.sending?'disabled':''}>${S.sending?'Enviando…':S.saved?'Atualizar pedido':'Enviar pedido'}</button></div></div>`;return h;
}
function party(){
 let h=`<div class="box"><b>Como você vai almoçar?</b><div class="seg"><button class="chip ${S.grp?'':'on'}" data-a="solo">🙋 Sozinho</button><button class="chip ${S.grp?'on':''}" data-a="gr">👥 Em grupo</button></div>`;
 if(S.grp){h+=`<div class="mu">Responsável: <b>${esc(S.sess.name)}</b>. Cadastre abaixo quem vai almoçar (inclua você).</div>`;
  S.members.forEach((m,i)=>{h+=`<div class="row"><input data-f="mem" data-i="${i}" value="${esc(m)}" placeholder="Nome da pessoa ${i+1}">${S.members.length>1?`<button data-a="memrm" data-i="${i}" aria-label="Remover">✕</button>`:''}</div>`});
  h+='<button data-a="mem">+ Adicionar pessoa</button><p class="mu">Para dividir um prato entre pessoas do grupo, toque em “Dividir” nele.</p>'}
 return h+(S.err&&!S.sheet&&!S.jd?`<p class="err">${esc(S.err)}</p>`:'')+'</div>'}
function jmodal(){const j=S.jd;return `<div class="sheet" style="z-index:30"><div><div class="row"><h2 style="margin:0">Dividir prato</h2><button data-a="jx">Cancelar</button></div><p><b>${esc(IT[j.id].n)}</b> · ${R(IT[j.id].p)}</p><p class="mu">Marque quem vai dividir e escolha o titular (responsável pelo prato).</p>${j.ms.map((m,i)=>`<div class="row pick"><label><input type="checkbox" data-a="js" data-i="${i}" ${j.sel[i]?'checked':''}> ${esc(m)}</label>${j.sel[i]?`<label class="mu"><input type="radio" name="ht" data-a="jh" data-i="${i}" ${j.holder==i?'checked':''}> Titular</label>`:''}</div>`).join('')}<p class="err">${esc(S.err)}</p><button class="p" style="width:100%" data-a="jok">Adicionar à sacola</button></div></div>`}
function clearShared(){S.shared.forEach(j=>{S.cart[j.id]--;if(S.cart[j.id]<=0)delete S.cart[j.id]});S.shared=[];if(!cnt(S.cart))S.sheet=false}
function pdf(){
 if(!S.orders.length){alert('Não há pedidos para gerar.');return}
 const J=window.jspdf;if(!J){alert('Biblioteca de PDF indisponível (sem internet). Na janela de impressão, escolha "Salvar como PDF".');print();return}
 const d=new J.jsPDF({unit:'mm',format:'a4'});let y=20;
 d.setFont('helvetica','bold');d.setFontSize(16);d.text('Almoço no Tonho',14,y);y+=7;
 d.setFont('helvetica','normal');d.setFontSize(10);d.text(new Date().toLocaleString('pt-BR'),14,y);y+=9;d.setFontSize(11);
 summary().replace(/—/g,'-').split('\n').forEach(l=>{d.setFont('helvetica',l&&l===l.toUpperCase()&&/[A-Z]/.test(l)?'bold':'normal');
  d.splitTextToSize(l||' ',182).forEach(t=>{if(y>280){d.addPage();y=20}d.text(t,14,y);y+=5.5})});
 d.save('pedido-almoco-tonho.pdf')}
const tt=x=>x.title||(x.mode=='grp'?'Grupo de '+x.name:x.name);
function summary(){const t={};S.orders.forEach(x=>Object.entries(x.items||{}).forEach(([i,q])=>t[i]=(t[i]||0)+q));
 let s=`PEDIDO DE ALMOÇO — ${S.orders.reduce((a,x)=>a+heads(x),0)} pessoas\n\nTOTAL POR ITEM\n`;
 Object.entries(t).forEach(([i,q])=>s+=`${q}x ${IT[i]?IT[i].n:i}\n`);s+='\nPOR PEDIDO\n';
 S.orders.forEach(x=>{s+=`\n${tt(x)}${x.mode=='grp'?' (integrantes: '+(x.members||[]).filter(m=>m.trim()).join(', ')+')':''} — ${R(tot(x.items))}\n`+Object.entries(x.items||{}).map(([i,q])=>` - ${q}x ${IT[i]?IT[i].n:i}\n`).join('')+(x.shared||[]).map(j=>` - EM CONJUNTO: ${IT[j.id].n} (titular: ${j.members[j.holder]}; com ${j.members.join(', ')})`+String.fromCharCode(10)).join('')+(x.note?` Obs: ${x.note}\n`:'')});
 return s}
function admin(){
 let h=(window.TONHO_MODE!='online'?`<div class="box"><b>⚠️ Modo local</b><p class="mu">O painel só mostra pedidos feitos neste mesmo navegador. Configure o Firebase (veja o README) para receber pedidos de todos os aparelhos.</p></div>`:'')+(S.err?`<p class="err" style="margin:12px">${esc(S.err)}</p>`:'')+`<p class="mu" style="margin:12px 12px 0">Exclua abaixo os pedidos que não devem entrar. O resumo e o PDF mostram só o que sobrar.</p><div class="box"><b>${S.orders.length}</b> pedidos · <b>${S.orders.reduce((a,x)=>a+heads(x),0)}</b> pessoas</div><div class="box"><b>Resumo para o restaurante</b><pre id="sum">${esc(summary())}</pre><button data-a="copy">Copiar resumo</button> <span id="cp" class="ok"></span></div>`;
 S.orders.forEach(x=>{h+=`<div class="box"><div class="row"><b>${esc(tt(x))}${x.mode=='grp'?' · '+heads(x)+' pessoas':''}</b><span>${R(tot(x.items))}</span></div>${x.mode=='grp'?`<div class="mu">Integrantes: ${esc((x.members||[]).filter(m=>m.trim()).join(', '))}</div>`:''}<div class="mu">${Object.entries(x.items||{}).map(([i,q])=>q+'x '+esc(IT[i]?IT[i].n:i)).join('; ')}</div>${(x.shared||[]).map(j=>`<div class="mu">👥 ${esc(IT[j.id].n)} — titular: <b>${esc(j.members[j.holder])}</b> · com ${esc(j.members.join(', '))}</div>`).join('')}${x.note?`<div class="mu">Obs: ${esc(x.note)}</div>`:''}<button class="dng" data-a="del" data-id="${x.id}">🗑️ Excluir pedido</button></div>`});
 return h+(S.orders.length?`<div class="bar"><button class="p" data-a="pdf"><span>📄 Gerar PDF</span><span>${S.orders.length} pedido${S.orders.length>1?'s':''}</span></button></div>`:'');
}
function loadMine(){const m=mineGet(S.sess.slug);S.sess.id=(m&&m.id)||S.sess.slug+'-'+(crypto.randomUUID?crypto.randomUUID():Math.random().toString(36).slice(2)+Date.now().toString(36)).replace(/-/g,'').slice(0,12);S.sent=(m&&m.order)||null;S.pt=S.sent?'mine':'menu';
 if(m&&m.order){const d=m.order;S.cart=d.items||{};S.grp=d.mode=='grp';S.title=d.title||'';S.members=(d.members&&d.members.length)?d.members:[''];S.note=d.note||'';S.shared=d.shared||[];S.saved=true}}
function watch(){if(unsub)unsub();unsub=db.collection('orders').onSnapshot(s=>{S.err='';S.orders=s.docs.map(d=>Object.assign({id:d.id},d.data()));if(S.sess&&S.sess.role=='a'&&!document.activeElement.closest('input,textarea'))render()},e=>{S.err='Não foi possível ler os pedidos ('+((e&&e.code)||'erro')+').';if(S.sess&&S.sess.role=='a')render()})}
$.addEventListener('input',e=>{const d=e.target.dataset,f=d.f;if(f=='title')S.title=e.target.value;else if(f=='who')S.who=e.target.value;else if(f=='note')S.note=e.target.value;else if(f=='mem')S.members[d.i]=e.target.value;else if(f=='jm')S.jd.members[d.i]=e.target.value});
$.addEventListener('click',async e=>{const b=e.target.closest('[data-a]');if(!b)return;const d=b.dataset,a=d.a;
 if(a=='tab'){S.tab=d.v;S.err=''}
 else if(a=='m0'){S.grp=d.v=='grp';S.err=''}
 else if(a=='go'){const name=S.who.trim(),sl=slug(name);if(!sl){S.err='Digite seu nome.';render();return}
  S.sess={role:'p',slug:sl,name};loadMine();if(S.grp&&!S.members.some(m=>m.trim()))S.members=[name,''];S.err='';save()}
 else if(a=='pt'){S.pt=d.v;S.err='';scrollTo(0,0)}
 else if(a=='edit'){S.pt='menu';S.sheet=true;S.err=''}
 else if(a=='ok'){S.conf=false;S.pt='mine';scrollTo(0,0)}
 else if(a=='cat'){S.cat=+d.v;scrollTo(0,0)}
 else if(a=='q'){if(+d.d<0&&(S.cart[d.id]||0)<=S.shared.filter(j=>j.id==d.id).length)return;S.cart[d.id]=(S.cart[d.id]||0)+ +d.d;if(S.cart[d.id]<=0)delete S.cart[d.id];if(!cnt(S.cart))S.sheet=false}
 else if(a=='sheet'){S.sheet=true;S.err=''}else if(a=='close')S.sheet=false;
 else if(a=='jt'){const ms=S.members.map(m=>m.trim()).filter(Boolean);S.jd={id:d.id,ms,sel:ms.map(()=>false),holder:-1};S.err=''}
 else if(a=='jx')S.jd=null;
 else if(a=='js'){S.jd.sel[+d.i]=!S.jd.sel[+d.i];if(!S.jd.sel[S.jd.holder])S.jd.holder=S.jd.sel.indexOf(true)}
 else if(a=='jh')S.jd.holder=+d.i;
 else if(a=='jok'){const j=S.jd,ls=j.ms.filter((_,i)=>j.sel[i]);if(ls.length<2){S.err='Marque ao menos 2 pessoas.';render();return}if(j.holder<0){S.err='Escolha o titular.';render();return}S.shared.push({id:j.id,members:ls,holder:ls.indexOf(j.ms[j.holder])});S.cart[j.id]=(S.cart[j.id]||0)+1;S.jd=null;S.err=''}
 else if(a=='jrm'){const j=S.shared.splice(+d.i,1)[0];S.cart[j.id]--;if(S.cart[j.id]<=0)delete S.cart[j.id];if(!cnt(S.cart))S.sheet=false}
 else if(a=='gr'){S.grp=true;S.err='';if(!S.members.some(m=>m.trim()))S.members=[S.sess.name,'']}
 else if(a=='solo'){if(S.shared.length&&!confirm('Os pratos divididos serão removidos da sacola. Continuar?'))return;clearShared();S.grp=false;S.err=''}
 else if(a=='mem')S.members.push('');
 else if(a=='memrm')S.members.splice(+d.i,1);
 else if(a=='out'){if(S.sess.role=='p'&&!S.saved&&cnt(S.cart)&&!confirm('Sua sacola ainda não foi enviada. Sair mesmo assim?'))return;
  if(S.sess.role=='a'){if(unsub){unsub();unsub=null}if(window.TONHO_AUTH)try{await TONHO_AUTH.signOut()}catch(x){}}
  S.sess=null;S.tab='p';S.sent=null;S.pt='menu';S.conf=false;S.sending=false;S.cart={};S.shared=[];S.saved=false;S.grp=false;S.title='';S.who='';S.members=[''];S.note='';S.err='';S.sheet=false;S.orders=[];try{sessionStorage.removeItem('s')}catch(x){}}
 else if(a=='login'){S.err='';const u=document.getElementById('au').value.trim(),pw=document.getElementById('pw').value;
  if(!u||!pw){S.err='Informe usuário e senha.';render();return}
  try{if(window.TONHO_MODE=='online')await TONHO_AUTH.signInWithEmailAndPassword(slug(u)+'@almocotonho.app',pw);
   else if(await sha(slug(u)+':'+pw)!==ADMIN_HASH)throw{code:'bad'};
   S.sess={role:'a'};watch();save()}
  catch(x){const c=(x&&x.code)||'';S.err=(c=='bad'||/auth\/(invalid|wrong|user-not)/.test(c))?'Usuário ou senha incorretos.':'Erro ao entrar'+(c?' ('+c+')':'')+'.'}}
 else if(a=='send'){if(S.sending)return;const ms=S.members.filter(m=>m.trim());
  if(S.grp&&!ms.length){S.err='Informe as pessoas do grupo na tela inicial.';S.sheet=false;render();scrollTo(0,0);return}
  const o={name:S.sess.name,mode:S.grp?'grp':'ind',title:'',members:S.grp?ms:[],items:S.cart,shared:S.shared,note:S.note,at:Date.now()},was=S.saved;
  S.sending=true;S.err='';render();
  try{await Promise.race([db.collection('orders').doc(S.sess.id).set(o),new Promise((_,rj)=>setTimeout(()=>rj({code:'timeout'}),15000))]);
   mineSet(S.sess.slug,{id:S.sess.id,order:o});S.sent=o;S.saved=true;S.upd=was;S.conf=true;S.sheet=false;S.err=''}
  catch(x){const c=(x&&x.code)||'';S.err=c=='timeout'?'Sem resposta do servidor. Verifique a internet e toque em enviar de novo.':c=='permission-denied'?'Sem permissão para enviar (regras do Firebase). Avise o administrador.':'Não foi possível enviar'+(c?' ('+c+')':'')+'. Tente de novo.'}
  S.sending=false}
 else if(a=='del'){if(confirm('Excluir este pedido?'))await db.collection('orders').doc(d.id).delete().catch(()=>{});return}
 else if(a=='pdf'){pdf();return}
 else if(a=='copy'){const t=summary(),c=document.getElementById('cp');try{await navigator.clipboard.writeText(t);c.textContent='Copiado!'}catch(x){const r=document.createRange();r.selectNodeContents(document.getElementById('sum'));getSelection().removeAllRanges();getSelection().addRange(r);c.textContent='Selecionado: copie com Ctrl+C'}return}
 render();
});
(async()=>{try{db=await claude.use('db');let s=null;try{s=JSON.parse(sessionStorage.getItem('s'))}catch(e){}
 if(s&&s.role=='p'){S.sess=s;S.who=s.name;loadMine()}
 else if(s&&s.role=='a'){const ok=window.TONHO_MODE!='online'||await new Promise(r=>{const u=TONHO_AUTH.onAuthStateChanged(x=>{u();r(!!x)})});if(ok){S.sess={role:'a'};watch()}}
}catch(e){}render()})();
