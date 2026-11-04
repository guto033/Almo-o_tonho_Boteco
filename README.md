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
