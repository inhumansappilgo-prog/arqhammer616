# ARQUIVOS 616 — PACOTE DE PUBLICAÇÃO

Este pacote contém tudo que deve ser enviado ao GitHub e o código necessário para incorporar a página no Tumblr.

## Arquivos do site

Envie estes quatro arquivos para a raiz de um repositório chamado `arqhammer616`:

```text
index.html
axial-616.css
axial-616.js
.nojekyll
```

O arquivo `TUMBLR-EMBED.html` e este `README.md` são auxiliares. Eles podem permanecer no repositório sem interferir na página.

## Publicar no GitHub Pages

1. Crie ou abra o repositório público `arqhammer616`.
2. Clique em **Add file → Upload files**.
3. Envie todos os arquivos deste pacote e confirme em **Commit changes**.
4. Abra **Settings → Pages**.
5. Em **Source**, escolha **Deploy from a branch**.
6. Escolha **main**, **/(root)** e clique em **Save**.
7. Aguarde a publicação neste endereço:

```text
https://inhumansappilgo-prog.github.io/arqhammer616/
```

## Incorporar no Tumblr

1. Abra `TUMBLR-EMBED.html`.
2. Copie todo o código.
3. No Tumblr, acesse **Editar tema → Adicionar uma página**.
4. Escolha **Layout Personalizado**.
5. Defina a rota desejada, por exemplo `/616`.
6. Cole o código e salve.

O botão **Voltar** usa `target="_top"`; por isso, abre o menu principal no Tumblr completo e não fica preso dentro do iframe. A navegação inferior para **Dossiê 2** foi removida desta versão.

Se o repositório receber outro nome, altere o endereço `src` dentro de `TUMBLR-EMBED.html` para corresponder ao novo endereço do GitHub Pages.
