# Site — Aranea Belladona

Site estático com 3 páginas (sem build, sem instalação):

| Arquivo      | Idioma             |
|--------------|--------------------|
| `index.html` | Português (página inicial) |
| `en.html`    | English            |
| `es.html`    | Español            |

As bandeiras no topo de cada página levam para as outras versões.

## 1. Edite os links (só um arquivo)

Abra **`config.js`** e troque os valores:

```js
bonus:   "https://drive.google.com/...",   // botão BÔNUS (nas 3 páginas)
contato: "mailto:araneabelladona@gmail.com", // botão E-mail / contato
patreon: "https://...",                    // ícone "P"
x:       "https://x.com/..."               // ícone X
```

Enquanto estiver `#COLE-AQUI-...`, o botão fica sem destino.
O Drive precisa estar com o compartilhamento em "Qualquer pessoa com o link".

## 2. Publicar no GitHub Pages

1. Crie um repositório no GitHub (ex.: `aranea-site`).
2. Envie **todo o conteúdo desta pasta** (o `index.html` precisa ficar na raiz do repositório).
3. No repositório: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, escolha `main` e `/ (root)`, e salve.
4. Em alguns minutos o site abre em `https://SEU-USUARIO.github.io/aranea-site/`.

## 3. Ligar o seu domínio

1. Em **Settings → Pages → Custom domain**, digite o domínio (ex.: `seudominio.com.br`) e salve.
   O GitHub cria o arquivo `CNAME` sozinho.
2. No painel de DNS de onde o domínio está registrado:
   - **Apague** os registros antigos que apontam para o Canva.
   - Crie 4 registros **A** para o domínio raiz (`@`):
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Crie 1 registro **CNAME** para `www` apontando para `SEU-USUARIO.github.io`
3. Espere a propagação (minutos a 24h) e marque **Enforce HTTPS** em Settings → Pages.

## Animações incluídas

- Entrada suave de cada bloco ao carregar a página
- Foto "respirando" (brilho leve) e teia balançando
- Linha do título desenhando-se e título com leve "piscar"
- Brilho vermelho ao passar o mouse nas palavras, nas tags e nos ícones
- Seções que aparecem ao rolar a página

Quem tem "reduzir movimento" ativado no sistema não vê as animações (acessibilidade).

## Estrutura

```
index.html  en.html  es.html
style.css   script.js   config.js
imagens/
```

As fontes (Italiana, Gilda Display, Big Shoulders Display) vêm do Google Fonts.
