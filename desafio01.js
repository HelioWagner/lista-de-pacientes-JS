/*
  Escreva uma lista de pacientes
*/

const numberOne = Number(prompt('Digite o primeiro valor'))
const numberTwo = Number(prompt('Digite o segundo valor'))

let sum = numberOne + numberTwo
let restDiv = numberOne % numberTwo

alert('A soma dos dois valores são: '+sum)
alert('A subtracao dos dois valores são: '+(numberOne-numberTwo))
alert('A multiplicacao dos dois valores são: '+(numberOne*numberTwo))
alert('A divisao dos dois valores são: '+(numberOne/numberTwo))
alert('A divisao dos dois valores são: '+(restDiv))

vlrdigpar = ((sum%2) == 0)


if (vlrdigpar) {
  alert(`Soma dos dois valores é par: ${sum}`)
} else {
  alert(`Soma dos dois valores é impar: ${sum}`)
}

if (numberOne != numberTwo) {
  alert('Os números digitados são diferentes')
}else{
  alert('Os números digitados são iguais')
}
