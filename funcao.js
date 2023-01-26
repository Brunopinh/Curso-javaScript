let n1 = Number(prompt('digite um numero:'))
let n2 = Number(prompt('digite outro numero'))
let n3 = prompt('digite qual operação')

var  resultado //declaração da variavel

function soma(a,b){ //declaração de uma função

    return a + b
}

function subtracao(a,b){
    
    return a - b
}
if (n3 == '+'){
    resultado = soma(n1,n2) //puxando a função soma com os valores obtidos n1,n2
    
    
}
else if (n3 ==  '-'){
    resultado = subtracao(n1,n2) 
    
    
}

alert(resultado)