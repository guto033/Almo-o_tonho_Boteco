# Almoço no Tonho

Arquivos organizados para ficar na raiz de um repositório GitHub.

## Estrutura

- `index.html`: página principal (renomeada para o nome esperado por hospedagens estáticas).
- `img/`: fotografias referenciadas pelo HTML.

## Atenção: dependência necessária para o sistema funcionar

O HTML atual utiliza `claude.use('user')` e `claude.use('db')` para autenticação e banco de dados. Esses recursos são fornecidos pelo ambiente Claude em que o protótipo foi criado; eles não existem automaticamente no GitHub Pages ou em uma hospedagem estática comum.

Assim, esta organização corrige o nome do arquivo de entrada e mantém as imagens, mas **não torna por si só login, pedidos compartilhados e painel administrativo funcionais no GitHub Pages/Vercel**. Para publicar o sistema completo, será necessário substituir essa integração por um backend acessível pela web (por exemplo, Firebase ou Supabase) e configurar as permissões.

## Publicação como arquivos no GitHub

Extraia o ZIP e envie `index.html`, a pasta `img/` e este `README.md` para a raiz do repositório. Não envie apenas o HTML: a pasta `img/` precisa acompanhar o arquivo para que as fotos carreguem.
