let DataHoje= new Date()
let DataEvento= new Date(2024,3,18)
let idade=21
let Participantes=["João","Maria","Roberto","Adalberto", "Ana","João", "Maria", "Roberto", "Adalberto", "Ana","João", "Maria", "Roberto", "Adalberto", "Ana","João", "Maria", "Roberto", "Adalberto", "Ana","João", "Maria", "Roberto", "Adalberto", "Ana","João", "Maria", "Roberto", "Adalberto", "Ana","João", "Maria", "Roberto", "Adalberto", "Ana","João", "Maria", "Roberto", "Adalberto", "Ana","João", "Maria", "Roberto", "Adalberto", "Ana","João", "Maria", "Roberto", "Adalberto", "Ana","João", "Maria", "Roberto", "Adalberto", "Ana","João", "Maria", "Roberto", "Adalberto", "Ana","João", "Maria", "Roberto", "Adalberto", "Ana","João", "Maria", "Roberto", "Adalberto", "Ana","João", "Maria", "Roberto", "Adalberto", "Ana","João", "Maria", "Roberto", "Adalberto", "Ana","João", "Maria", "Roberto", "Adalberto", "Ana","João", "Maria", "Roberto", "Adalberto", "Ana","João", "Maria", "Roberto", "Adalberto", "Ana","João", "Maria", "Roberto", "Adalberto", "Ana"]
// A lista Participantes possui 100 nomes, basta apagar um para compilar como se houvesse vaga no evento.
console.log("Informe a data do evento:")

if (DataEvento<DataHoje) {
    console.log("A data "+ DataEvento +" é inválida! O evento já ocorreu.")
}else{
    console.log(`${DataEvento} é válida!`)
    console.log (`Informe sua idade:`)
    if (idade<18) {
        console.log(`Sua idade (${idade} anos) é inválida! A idade mínima é de 18 anos.`)
    } else {
        console.log(`Sua idade (${idade} anos) é válida!`)
        console.log("Aguarde a verificação das vagas disponíveis.")
        if(Participantes.length<100) {
            console.log("Vaga diponível! Cadastro feito com sucesso!")
        }else{
            console.log("Não foi possível realizar o cadastro, evento cheio.")
        }
      

    }

}