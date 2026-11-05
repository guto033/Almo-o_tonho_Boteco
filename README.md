# Almoço no Tonho

Versão integrada do sistema, pronta para ser colocada na raiz de um repositório GitHub.

## Arquivos
- `index.html`: página de entrada.
- `style.css`: identidade visual e estilos responsivos.
- `script.js`: cardápio, valores, sacola, pedidos em grupo e painel.
- `img/`: fotografias dos pratos utilizadas no cardápio.

## Conteúdo integrado
O cardápio mantém as categorias, descrições e preços do material fornecido, com as 31 fotografias disponíveis associadas aos respectivos pratos. Dois pratos sem fotografia no material recebido exibem um espaço reservado.

## Importante: autenticação e banco de dados
O código original utiliza `claude.use('user')` e `claude.use('db')`, recursos do ambiente Claude em que o protótipo foi criado. Eles não são disponibilizados automaticamente pelo GitHub Pages ou por uma hospedagem estática comum.

Portanto, a interface e o cardápio podem ser publicados como arquivos estáticos, mas login, pedidos compartilhados e painel administrativo dependem de um backend compatível. Para disponibilizar essas funções publicamente, será necessário migrar essa integração para um serviço como Firebase ou Supabase e configurar as regras de acesso.

## Publicação
Envie `index.html`, `style.css`, `script.js`, a pasta `img/` e este README para a raiz do repositório.

## Atualização: funcionamento fora do Claude
Foi adicionado `db-local.js`, que substitui `claude.use('user')` e `claude.use('db')` guardando os dados no `localStorage` do navegador. Com isso o cardápio, as fotos, a sacola e o envio de pedidos funcionam em qualquer hospedagem estática. Limitação: os pedidos ficam apenas no aparelho de quem os fez; o painel do administrador só enxerga pedidos feitos no mesmo navegador. Para reunir os pedidos de todos, migre para Firebase ou Supabase.

## Nova dinâmica (v2)
- **Tela inicial:** o participante escolhe "Sozinho" ou "Em grupo" logo no topo, informa o nome do grupo e as pessoas. Em cada prato aparece o botão "Dividir", que lista só as pessoas do grupo (marcar quem divide e o titular).
- **Gestor:** cada pedido tem o botão "Excluir pedido". O resumo e o botão "Gerar PDF" (fixo no rodapé) refletem apenas os pedidos que restarem.
- **Celular:** cabeçalho fixo, botões maiores para toque, campos sem zoom no iOS e layout ajustado para telas pequenas.
- O PDF usa a biblioteca jsPDF via CDN. Sem internet, o botão abre a impressão do navegador ("Salvar como PDF").

## Nova dinâmica (v3): sem login para participantes
- **Tela inicial:** o participante escolhe **Individual** ou **Em grupo**, digita o nome (e o nome do grupo) e vai direto ao cardápio. Não há cadastro nem senha.
- **Administrador:** botão "Administrador" no topo da tela inicial (usuário e senha).
- **Por que o pedido não aparecia no painel:** sem backend, os pedidos ficavam no `localStorage` de cada aparelho. A v3 envia os pedidos para o Firebase (Firestore), que é compartilhado.

## Ativar pedidos compartilhados (Firebase, gratuito)
1. Em https://console.firebase.google.com crie um projeto e, em "Build > Firestore Database", crie o banco (modo produção).
2. Em "Build > Authentication > Sign-in method", ative **E-mail/senha** e, em "Users", adicione o usuário `augusto@almocotonho.app` com a senha do administrador.
3. Em "Configurações do projeto > Seus apps", registre um app **Web** e copie o `firebaseConfig` para `firebase-config.js` (substitua o `null`).
4. Em Firestore > Regras, cole:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /orders/{id} {
      allow create, update: if request.resource.data.keys().hasOnly(['name','mode','title','members','items','shared','note','at'])
                            && request.resource.data.name is string && request.resource.data.name.size() < 80
                            && request.resource.data.note.size() < 500;
      allow read, delete: if request.auth != null;
    }
  }
}
```
5. Em Authentication > Settings > Authorized domains, confirme que o domínio do GitHub Pages (`SEU-USUARIO.github.io`) está na lista.

Com isso qualquer pessoa cria/atualiza o próprio pedido, e somente o administrador logado lê e exclui. Sem configurar o Firebase, o site funciona em modo local (teste) e o painel mostra um aviso.

## Ajustes (v3.1)
- **Grupo sem nome:** em "Em grupo" o responsável digita o próprio nome e cadastra os integrantes. O pedido aparece como "Grupo de <responsável>".
- **Painel e PDF:** mostram o valor de cada pedido, sem o total geral da compra.

## Confirmação, "Meu pedido" e uso simultâneo (v3.2)
- Ao enviar, aparece a tela "Pedido enviado!" com botão **OK**. A aba **Meu pedido** mostra o que foi enviado e o botão **Alterar pedido**.
- Para ver o pedido de novo (mesmo depois de sair), a pessoa entra com o mesmo nome no mesmo aparelho. O pedido fica guardado no aparelho; a leitura de pedidos no servidor é só do administrador.
- **Várias pessoas ao mesmo tempo:** cada pedido é um registro separado, com id único, então ninguém sobrescreve o pedido do outro, mesmo com nomes iguais em aparelhos diferentes. O painel do administrador atualiza em tempo real. Toque duplo em "Enviar" é bloqueado, e reenviar o mesmo pedido não duplica.
- Isso só vale com o Firebase configurado. No modo local (teste) não há compartilhamento.
