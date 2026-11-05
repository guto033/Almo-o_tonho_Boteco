/* Banco compartilhado (Firebase Firestore + Auth). Só ativa se firebase-config.js tiver a configuração
   e o SDK tiver carregado; caso contrário, db-local.js assume (localStorage, só neste aparelho). */
(function(){
  var cfg=window.FIREBASE_CONFIG;
  if(!cfg){window.TONHO_MODE='local';return}
  if(!window.firebase){window.TONHO_MODE='local';console.error('Firebase configurado, mas o SDK não carregou (sem internet?).');return}
  try{
    firebase.initializeApp(cfg);
    var fs=firebase.firestore();
    window.TONHO_AUTH=firebase.auth();
    window.TONHO_MODE='online';
    window.claude={use:function(){return Promise.resolve(fs)}};
  }catch(e){window.TONHO_MODE='local';console.error('Erro ao iniciar o Firebase:',e)}
})();
