// server.js - Node/Express server to verify Google reCAPTCHA v2 token
// ATENÇÃO: este ficheiro contém a tua Google reCAPTCHA Secret Key tal como pediste.
// Não partilhes este ficheiro publicamente.
const express = require('express');
const fetch = require('node-fetch'); // included in package.json dependencies
const multer = require('multer');
const upload = multer();
const app = express();
const PORT = process.env.PORT || 3000;

// A tua Google reCAPTCHA secret (inserida no ficheiro)
const GOOGLE_SECRET = "6LcV3P0rAAAAAMuSU4Qr9KSYTJRZqtum5Jw93Qiz";

app.use(express.static('public'));

app.post('/submit', upload.none(), async (req, res) => {
  const token = req.body['g-recaptcha-response'];
  const nome = req.body['nome'] || 'Usuário';

  if(!token){
    return res.json({ success:false, message:'Token reCAPTCHA ausente.' });
  }

  try{
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${encodeURIComponent(GOOGLE_SECRET)}&response=${encodeURIComponent(token)}`;
    const r = await fetch(verifyUrl, { method:'POST' });
    const j = await r.json();

    if(j.success){
      return res.json({ success:true, message: `Olá ${nome}! reCAPTCHA verificado.` });
    } else {
      return res.json({ success:false, message: 'reCAPTCHA não verificado pelo Google.', details:j['error-codes'] });
    }
  } catch(err){
    console.error('Erro verificação:', err);
    return res.json({ success:false, message: 'Erro no servidor ao verificar reCAPTCHA.' });
  }
});

app.listen(PORT, ()=> console.log(`Server a correr em http://localhost:${PORT}`));
