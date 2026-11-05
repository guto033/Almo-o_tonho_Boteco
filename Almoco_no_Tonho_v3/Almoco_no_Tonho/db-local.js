/* Substitui claude.use('user') e claude.use('db') quando o site roda fora do Claude
   (GitHub Pages etc.). Os dados ficam no localStorage do navegador de quem usa.
   Para pedidos compartilhados entre pessoas, troque por Firebase/Supabase. */
(function(){
  if(window.claude&&typeof window.claude.use==='function')return;
  var P='tonho:',subs={};
  function rd(k){try{return JSON.parse(localStorage.getItem(P+k))}catch(e){return null}}
  function wr(k,v){try{localStorage.setItem(P+k,JSON.stringify(v))}catch(e){}}
  function snap(c){
    var ids=JSON.parse(localStorage.getItem(P+'idx:'+c)||'[]');
    return {docs:ids.map(function(i){return mk(c+'/'+i)}).filter(function(d){return d.exists}).map(function(d){return {id:d.id,data:d.data}})};
  }
  function notify(c){(subs[c]||[]).forEach(function(f){f(snap(c))})}
  function mk(path){
    var parts=path.split('/'),c=parts[0],id=parts[1],v=rd(path);
    return {id:id,exists:v!==null,data:function(){return v},
      get:function(){return Promise.resolve(mk(path))},
      set:function(d){wr(path,d);var k=P+'idx:'+c,ix=JSON.parse(localStorage.getItem(k)||'[]');
        if(ix.indexOf(id)<0){ix.push(id);localStorage.setItem(k,JSON.stringify(ix))}notify(c);return Promise.resolve()},
      delete:function(){localStorage.removeItem(P+path);var k=P+'idx:'+c,
        ix=JSON.parse(localStorage.getItem(k)||'[]').filter(function(x){return x!==id});
        localStorage.setItem(k,JSON.stringify(ix));notify(c);return Promise.resolve()}};
  }
  var db={
    doc:function(p){var r=mk(p);return {get:r.get,set:r.set,delete:r.delete}},
    collection:function(c){return {
      doc:function(id){return db.doc(c+'/'+id)},
      onSnapshot:function(cb){(subs[c]=subs[c]||[]).push(cb);cb(snap(c));return function(){subs[c]=subs[c].filter(function(f){return f!==cb})}}
    }}
  };
  window.TONHO_MODE='local';
  window.claude={use:function(){return Promise.resolve(db)}};
})();
