function exe6(){

    let nomes = []
    let salarios = []
    for(let i = 0; i < 10; i++){
        nomes[i] = prompt('Informe nome')
        salarios[i] = Number(prompt('Informe salario'))
    }
    // calcula maior e menor salario
    let maior = salarios[0]
    let menor = salarios[0]
    for(let i = 0; i < 10; i++){
        if(salarios[i] > maior){
            maior = salarios[i] // atualiza maior
        }
        if(salarios[i] < menor){
            menor = salarios[i] // atualiza maior
        }
    }
    let nomeMaior = nomes(salarios.indexOf(maior))
    let nomeMenor = nomes(salarios.indexOf(menor))
    console.log(`${nomeMaior} vai receber o maior salario ${maior}`)
    console.log(`${nomeMenor} vai receber o menor salario ${menor}`)
}