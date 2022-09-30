const display= document.querySelector('#display')
const valor= document.querySelectorAll('.valor')
const operado= document.querySelector('#operado')
const suma= document.getElementById('suma')
const restar= document.getElementById('restar')
const MULTI= document.getElementById('multi')
const division= document.getElementById('division')
const igual= document.getElementById('igual')
const borrar= document.getElementById('borrar')

igual.addEventListener('click'), ()=>{
    let a = valor[0].value
    let b = valor[1].value
    if(operado.textContent==='+'){
        display.innerText=+valor[0].value+ + valor[1].value
    }
}


suma.addEventListener('click'),()=>{
    operado.textContent='+'
    valor[1].value=valor[0].value
}
