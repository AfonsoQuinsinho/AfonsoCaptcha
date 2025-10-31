Captcha Resolver Afonso
======================

Este pacote foi montado conforme pedido, com a Google Secret Key inserida dentro de server.js.
**Atenção:** o ficheiro server.js contém a tua Secret Key. Não partilhes este ZIP publicamente.

Conteúdo:
- public/index.html (cliente) — usa a Site Key do Google reCAPTCHA v2.
- public/style.css, public/script.js — front-end.
- server.js — servidor Node/Express com a Secret Key já inserida.
- package.json

Chaves incluídas (para referência):
- Google Site Key (front-end): 6LcV3P0rAAAAAOpMWNtjIex0BBIiRRTstBsoYNiK
- Google Secret Key (inserida no server.js): 6LcV3P0rAAAAAMuSU4Qr9KSYTJRZqtum5Jw93Qiz
- 2Captcha API Key (opcional): 68a195140aaa1d927da66ca2fc156e56

### Instruções rápidas (local)
1. Dentro da pasta do projecto, os ficheiros públicos já estão no directório `public/`.
2. Instala dependências:
   ```
   npm install
   ```
3. Inicia o servidor:
   ```
   npm start
   ```
4. Abre http://localhost:3000 no teu navegador.

### Segurança
- Este pacote contém a tua Secret Key. Se fores publicar o projecto, regenera a Secret Key no painel do Google.
- Para produção, usa variáveis de ambiente (não inclua a secret no código fonte).

