let input = document.getElementById ("nome")
const enviar = document.getElementById ("enviar");
const lista = document.getElementById ("lista");
const itens = document.querySelectorAll ("li");

enviar.addEventListener('click', buscar)

function buscar(){

    for( let i=0; i<itens.length; i++){
        if(itens[i].textContent == input.value){
         itens[i].style.fontWeight = "bold";
        }
       
    }
}