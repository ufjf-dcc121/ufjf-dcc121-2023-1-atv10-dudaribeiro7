const store = { estado: [] };
export default store;

export function adicionar(valor){
    store.estado.push(valor);
}
export function remover(){
    store.estado.pop();
}

export function getItens(){
    return [...store.estado];
}