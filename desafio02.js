/*
  Escreva uma lista de estudante com nota
*/

const notes = [ {nome:'Hélio',
                noteOne: 9,
                noteTwo :10},
                {nome:'Gisele',
                noteOne: 5,
                noteTwo :5}, 
                {nome:'Daniel',
                noteOne: 7,
                noteTwo :7}  
]

const mediaNotes = function (nota1,notas2)  {
       totalnota = ((nota1+notas2)/2)
      return totalnota
}

for (let notas of notes) {
   mediaNotas = mediaNotes(notas.noteOne, notas.noteTwo)  
  
   if (mediaNotas >= 7){
      alert(`A média do(a) aluno(a) ${notas.nome} é: ${mediaNotas}\nParabéns ${notas.nome}! Você foi aprovado no concurso!`)
   }
   else {
    alert(`A média do(a) aluno(a) ${notas.nome} é: ${mediaNotas}\nNão foi dessa vez, ${notas.nome}! Tente novamente!`)
   }

}
