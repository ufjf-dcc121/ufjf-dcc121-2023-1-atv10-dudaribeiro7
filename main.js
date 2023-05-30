import store, {adicionar, getItens} from "./store.js";

const form = document.forms.entrada;
form.addEventListener('submit', envia);

function envia(e){
    e.preventDefault();
    console.log('Formulário Enviado!');
    const n = form.valor.value;
    adicionar(n);
    form.valor.value = "";
    form.valor.focus();
    atualiza();
}

function atualiza(){
    const ol = document.querySelector('ol');
    ol.innerHTML = "";
    const itens = getItens();
    for (let i = 0; i < itens.length; i++) {
        const li = document.createElement('li');
        li.textContent = itens[i];
        ol.appendChild(li);
        
    }
    itens.push("BOOM!");
}