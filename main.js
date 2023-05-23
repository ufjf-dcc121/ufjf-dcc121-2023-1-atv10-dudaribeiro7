const form = document.forms.entrada;
form.addEventListener('submit', envia);

function envia(e){
    e.preventDefault();
    alert('Formulário Enviado!');
}