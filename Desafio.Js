//1:-

let pensar1 = parseInt(prompt('Nota de HTML'))
let pensar2 = parseInt(prompt('Nota de CSS'))
let pensar3 = parseInt(prompt('Nota de JS'))

let media = (pensar1 + pensar2 + pensar3)/3
alert(media)

if (media >= 7){
alert ('Você foi Aprovado(a)!')
} else{
    alert('Você foi Reprovado!')
}



//2:-

let vel = prompt('Coloque a Velocidade do Carro')

if (vel > 80){
    let multa = (vel - 80) * 5
    alert('Você está acima do limite!. A multa é de ${multa}')
}else{
    alert('Você está dentro do limite')
}


//3:-

var n = prompt("Digíte o valor");
var total=n%2;
if(total == 0){
    alert("Par");
}
else{
    alert("Impar");
}
alert(total);



//4:-

 var salario = prompt ("Digíte o valor")
if (salario > 1250){
    let aumento = salario * 10 / 100
    let salariofinal = salario + aumento
    alert(`Seu aumento será de: ${salariofinal}`)
}else{
    let aumento2 = salario * 15 / 100
    let salariofinal = salario + aumento2
    alert(`Seu aumento será de: ${salariofinal}`)
}
