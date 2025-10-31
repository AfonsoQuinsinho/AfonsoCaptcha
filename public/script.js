// script.js - client-side behavior
document.getElementById('demo-form').addEventListener('submit', async function(e){
  e.preventDefault();
  const form = e.target;
  const result = document.getElementById('result');
  result.textContent = 'A enviar...';

  const formData = new FormData(form);
  const token = grecaptcha.getResponse();
  if(!token){
    result.textContent = 'Por favor completa o reCAPTCHA.';
    return;
  }
  formData.append('g-recaptcha-response', token);

  try{
    const resp = await fetch('/submit', { method:'POST', body: formData });
    const data = await resp.json();
    if(data.success){
      result.innerHTML = '<strong>Sucesso:</strong> ' + (data.message || 'Verificado com sucesso.');
      grecaptcha.reset();
      form.reset();
    } else {
      result.innerHTML = '<strong>Falha:</strong> ' + (data.message || 'Verificação falhou.');
    }
  }catch(err){
    console.error(err);
    result.textContent = 'Erro na submissão: ' + err.message;
  }
});
