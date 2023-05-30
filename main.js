const form = document.forms.entrada;
form.addEventListener('submit', envia);

let estado = 0;

function envia(e){
    e.preventDefault();
    alert('Formulário Enviado!');
    estado++;
    atualiza();
}

function atualiza(){
    const ol = document.querySelector('ol');
    ol.innerHTML = `<li>${estado}</li>`;
}