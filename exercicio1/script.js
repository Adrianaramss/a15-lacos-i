// Utilizando o laço `while`, escreva um código que recebe um `prompt` perguntando se a pessoa deseja comer mais coxinhas. 
// “S” deve representar “sim”, e “N” deve representar “não”. Crie também uma `let conta` para guardar o valor total.

// Toda vez que a resposta for **sim**, o laço deve se repetir, e devemos adicionar R$2.50 ao valor total. Quando a 
// resposta não for **sim**, devemos imprimir o valor total da conta.


let coxinha = prompt("Deseja comer mais coxinha? \n s \n n").toLocaleUpperCase()
let conta = 0;

while (coxinha === "S") {
    conta = conta + 2.50
  
    coxinha = prompt("Deseja mais coxinha? \n s \n n").toLocaleUpperCase()
    console.log (conta)
}
alert(`valor da sua conta é ${conta}`)
