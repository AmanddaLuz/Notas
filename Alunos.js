Alunos = prompt("Digite os nomes dos 5 Alunos matriculados, separados por vírgula. Ex: A,B,C")
Alunos = Alunos.split(",")
Aluno1 = Alunos[0]
Aluno2 = Alunos[1]
Aluno3 = Alunos[2]
Aluno4 = Alunos[3]
Aluno5 = Alunos[4]

notas1 = prompt("Digite as três notas de " + Aluno1 + " separadas por vírgula. Ex: 1,2,3")
notas1 = notas1.split(",")
n1 = parseFloat(notas1[0])
n2 = parseFloat(notas1[1])
n3 = parseFloat(notas1[2])
media1 = ((n1+n2+n3)/3)
if (media1 >5){
    status1 = "Aprovado!"
}
else (status1 = "Reprovado!")

notas2 = prompt("Digite as três notas de " + Aluno2 + " separadas por vírgula. Ex: 1,2,3")
notas2 = notas2.split(",")
n1 = parseFloat(notas2[0])
n2 = parseFloat(notas2[1])
n3 = parseFloat(notas2[2])
media2 = ((n1+n2+n3)/3)
if (media2 >5){
    status2 = "Aprovado!"
}
else (status2 = "Reprovado!")

notas3 = prompt("Digite as três notas de " + Aluno3 + " separadas por vírgula. Ex: 1,2,3")
notas3 = notas3.split(",")
n1 = parseFloat(notas3[0])
n2 = parseFloat(notas3[1])
n3 = parseFloat(notas3[2])
media3 = ((n1+n2+n3)/3)
if (media3 >5){
    status3 = "Aprovado!"
}
else (status3 = "Reprovado!")

notas4 = prompt("Digite as três notas de " + Aluno4 + " separadas por vírgula. Ex: 1,2,3")
notas4 = notas4.split(",")
n1 = parseFloat(notas4[0])
n2 = parseFloat(notas4[1])
n3 = parseFloat(notas4[2])
media4 = ((n1+n2+n3)/3)
if (media4 >5){
    status4 = "Aprovado!"
}
else (status4 = "Reprovado!")

notas5 = prompt("Digite as três notas de " + Aluno5 + " separadas por vírgula. Ex: 1,2,3")
notas5 = notas5.split(",")
n1 = parseFloat(notas5[0])
n2 = parseFloat(notas5[1])
n3 = parseFloat(notas5[2])
media5 = ((n1+n2+n3)/3)
if (media5 >5){
    status5 = "Aprovado!"
}
else (status5 = "Reprovado!")

alert("Aluno(a) " + Aluno1 + " foi: " + status1 + " com a média: " + media1 +"\n" 
      +"Aluno(a) " + Aluno2 + " foi: " + status2 + " com a média: " + media2 +"\n"
      +"Aluno(a) " + Aluno3 + " foi: " + status3 + " com a média: " + media3 +"\n"
      +"Aluno(a) " + Aluno4 + " foi: " + status4 + " com a média: " + media4 +"\n"
      +"Aluno(a) " + Aluno5 + " foi: " + status5 + " com a média: " + media5)