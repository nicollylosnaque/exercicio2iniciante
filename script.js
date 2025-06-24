const nomeform = document.getElementById ("nomeform");
const texto = document.getElementById ("texto");
const enviar = document.getElementById ("enviar");
const lista = document.querySelectorAll ("lista");

enviar.addEventListener('click', buscar)

function buscar(){

    for( let i=0; i<itens.length; i++){
        if(itens[i].textContent == input.value){
         itens[i].style.fontWeight = "bold";
        }
       
    }
}