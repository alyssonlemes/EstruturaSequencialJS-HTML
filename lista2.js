function exe1(){
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)
    let nota3 = Number(document.getElementById("nota3").value)
    let nota4 = Number(document.getElementById("nota4").value)

    let resultado = (nota1 + nota2 + nota3 + nota4) / 4

    if(resultado >= 7){
        resultado = "Aluno aprovado com média igual ou superior à 7"
    }
    else if(resultado < 7 && resultado > 0){
        resultado = "Aluno reprovado com média inferior à 7"
    }
    else if(resultado < 0){
        resultado = "As notas informadas são invalidas" 
    }

    document.getElementById("resultado").innerHTML = resultado //mostra o resultado
}

function exe2(){
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)

    let resultado = (nota1 + nota2 ) / 2

    if(resultado >= 0 && resultado <= 3){
        resultado = "Reprovado" 
    }

    else if(resultado > 3 && resultado <= 7){
        resultado = "Exame" 
    }
    
    else if(resultado > 7 && resultado <= 10){
        resultado = "Aprovado" 
    }
    document.getElementById("resultado").innerHTML = resultado //mostra o resultado

}

function exe3(){
        let numero1 = Number(document.getElementById("numero1").value)
        let numero2 = Number(document.getElementById("numero2").value)
      
        if(numero1 > numero2){
            document.getElementById("resultado").innerHTML = "o maior numero é o: " + numero1 //mostra o resultado
        }
    
        else if(numero2 > numero1){
            document.getElementById("resultado").innerHTML = "O maior numero é o: " + numero2 //mostra o resultado
        }

        else if(numero1 == numero2){
            document.getElementById("resultado").innerHTML = "Os números são iguais " //mostra o resultado
        }
        

}

function exe4(){

    let numero1 = Number(document.getElementById("numero1").value)
    let numero2 = Number(document.getElementById("numero2").value)
    let numero3 = Number(document.getElementById("numero3").value)

  
    if(numero1 > numero2 && numero1 > numero3){
        document.getElementById("resultado").innerHTML = "o maior numero é o: " + numero1 //mostra o resultado
    }

    else if(numero2 > numero1 && numero2 > numero3){
        document.getElementById("resultado").innerHTML = "O maior numero é o: " + numero2 //mostra o resultado
    }

    else if(numero3 > numero1 && numero3 > numero2){
        document.getElementById("resultado").innerHTML = "O maior numero é o: " + numero3 //mostra o resultado
    }

    else if(numero1 == numero2 && numero1 == numero3){
        document.getElementById("resultado").innerHTML = "Os números são iguais " //mostra o resultado
    }
        

}

function exe5(){
    // recupera nro1, nro2, escolha 
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    let escolha = Number(document.getElementById("escolha").value)
    // vamos verificar o que o usuário escolheu
    let resultado
    switch(escolha){
        case 1: resultado = (nro1 + nro2) / 2
                break // não entra nos cases de baixo
        case 2: if (nro1 >= nro2){
                    resultado = nro1 - nro2
                }
                else {
                    resultado = nro2 - nro1
                }
                break
        case 3: resultado = nro1 * nro2
                break
        case 4: if (nro2 != 0) {
                    resultado = nro1 / nro2
                }
                else {
                    resultado = "Não pode dividir por zero"
                }
                break
        default: resultado = "Opção inválida"
    }
    // saída do dados
    document.getElementById("resultado").innerHTML = resultado //mostra o resultado
}

function exe6(){

     // recupera nro1, nro2, escolha 
     let nro1 = Number(document.getElementById("nro1").value)
     let nro2 = Number(document.getElementById("nro2").value)
     let escolha = Number(document.getElementById("escolha").value)
     // vamos verificar o que o usuário escolheu
     let resultado
     let resultado2

     switch(escolha){
         case 1: resultado = nro1 ** nro2
         break // não entra nos cases de baixo
         case 2: resultado = Math.sqrt(nro1) //calcula a raiz quadrada
                 resultado2 = Math.sqrt(nro2)   
                 alert("A raiz do primeiro número é: " + resultado + " e do segundo: " + resultado2)
         break
         case 3: resultado = Math.cbrt(nro1) // calcula a raiz cubica
                 resultado2 = Math.cbrt(nro2)   
                 alert("A raiz cubica do primeiro número é: " + resultado + " e do segundo: " + resultado2)
         break

     }
     // saída do dados
     document.getElementById("resultado").innerHTML = resultado //mostra o resultado

}

function exe7(){
    let salario = Number(document.getElementById("salario").value)
    let porcentagem = salario * 30/100
    let resultado = salario

    if(salario <= 500 && salario > 0){
        resultado = salario + porcentagem

    }
    else if( salario > 500){
        resultado = salario
        alert("Você não tem direito ao aumento")
    }
    else if(salario < 0){
        alert("O salário digitado está incorreto, digite novamente")
    }
    document.getElementById("resultado").innerHTML = resultado //mostra o resultado
    

}

function exe8(){
    let salario = Number(document.getElementById("salario").value)
    let porcentagem1 = salario * 35/100
    let porcentagem2 = salario * 15/100
    let resultado = salario

    if(salario <= 300 && salario > 0){
        resultado = salario + porcentagem1

    }
    else if( salario > 300){
        resultado = salario + porcentagem2
      
    }
    else if(salario < 0){
        alert("O salário digitado está incorreto, digite novamente")
    }
    document.getElementById("resultado").innerHTML = resultado //mostra o resultado
}

function exe9(){
    let saldo = Number(document.getElementById("saldo").value)
    let porcentagem1 = saldo * 30/100
    let porcentagem2 = saldo * 25/100
    let porcentagem3 = saldo * 20/100
    let porcentagem4 = saldo * 10/100
    let resultado = saldo

    if(saldo > 400){
        resultado = saldo + porcentagem1

    }
    else if( saldo < 400 && saldo >= 300 ){
        resultado = saldo + porcentagem2
      
    }
    else if( saldo < 300 && saldo >= 200 ){
        resultado = saldo + porcentagem3
      
    }
    else if( saldo < 200 && saldo >= 0 ){
        resultado = saldo + porcentagem4
      
    }
    
    document.getElementById("resultado").innerHTML = resultado //mostra o resultado

}

function exe10(){

    let custo = Number(document.getElementById("custo").value)
    let porcentagemdist1 = custo * 5/100
    let porcentagemdist2 = custo * 10/100
    let porcentagemdist3 = custo * 15/100
    let porcentagemimposto1 = 0
    let porcentagemimposto2 = custo * 15/100
    let porcentagemimposto3 = custo * 20/100
    let resultado = custo

    if(custo <= 12000 && custo >= 0){
        resultado = custo + porcentagemdist1 + porcentagemimposto1

    }
    else if( custo > 12000 && custo <= 25000 ){
        resultado = custo + porcentagemdist2 + porcentagemimposto2
      
    }
    else if( custo > 25000 ){
        resultado = custo + porcentagemdist3 + porcentagemimposto3
      
    }
   
    
    document.getElementById("resultado").innerHTML = resultado //mostra o resultado

}

function exe11(){
    let salario = Number(document.getElementById("salario").value)
    let porcentagem1 = salario * 15/100
    let porcentagem2 = salario * 10/100
    let porcentagem3 = salario * 5/100
    let resultado = salario

    if(salario <= 300 && salario > 0){
        resultado = salario + porcentagem1

    }
    else if( salario > 300 && salario < 600){
        resultado = salario + porcentagem2
      
    }
    else if( salario >= 600 && salario <= 900){
        resultado = salario + porcentagem2
      
    }
    else if( salario > 900){
        resultado = salario 
        alert("Não houve aumento")
      
    }
    else if(salario < 0){
        alert("O salário digitado está incorreto, digite novamente")
    }
    document.getElementById("resultado").innerHTML = resultado //mostra o resultado

}

function exe12(){
    let salario = Number(document.getElementById("salario").value)
    let bonificacao1 = 100
    let bonificacao2 = 75
    let bonificacao3 = 50
    let bonificacao4 = 35
    let resultado = salario

    if(salario <= 350 && salario > 0){
        resultado = salario + bonificacao1

    }
    else if( salario > 350 && salario < 600){
        resultado = salario + bonificacao2
      
    }
    else if( salario >= 600 && salario <= 900){
        resultado = salario + bonificacao3
      
    }
    else if( salario > 900){
        resultado = salario + bonificacao4
        
      
    }
    else if(salario < 0){
        alert("O salário digitado está incorreto, digite novamente")
    }
    document.getElementById("resultado").innerHTML = resultado //mostra o resultado

}
function exe13(){
    let preco = Number(document.getElementById("preco").value)
    let porcentagem1 = preco * 5/100
    let porcentagem2 = preco * 10/100
    let porcentagem3 = preco * 15/100
   
    let resultado = preco
    let classificacao = ""

    if(preco <= 50 && preco > 0){
        resultado = preco + porcentagem1

         if(resultado < 80){
            classificacao = "Barato"
        }
        else if(resultado >= 80 && resultado < 120){
            classificacao = "Normal"
        }
        else if(resultado >= 120 && resultado < 200){
            classificacao = "Caro"
        }
        else if(resultado > 200){
            classificacao = "Muito caro"
        }    
        document.getElementById("classificacao").innerHTML = classificacao //mostra a classificacao

    }
    else if( preco > 50 && preco <= 100){
        resultado = preco + porcentagem2

        if(resultado < 80){
            classificacao = "Barato"
        }
        else if(resultado >= 80 && resultado < 120){
            classificacao = "Normal"
        }
        else if(resultado >= 120 && resultado < 200){
            classificacao = "Caro"
        }
        else if(resultado > 200){
            classificacao = "Muito caro"
        }    
        document.getElementById("classificacao").innerHTML = classificacao //mostra a classificacao
      
    }
    else if( preco > 100){
        resultado = preco + porcentagem3

        if(resultado < 80){
            classificacao = "Barato"
        }
        else if(resultado >= 80 && resultado < 120){
            classificacao = "Normal"
        }
        else if(resultado >= 120 && resultado < 200){
            classificacao = "Caro"
        }
        else if(resultado > 200){
            classificacao = "Muito caro"
        }    
        document.getElementById("classificacao").innerHTML = classificacao //mostra a classificacao
      
    }
    
    else if(preco < 0){
        alert("O preco digitado está incorreto, digite novamente")
    }
    
    document.getElementById("resultado").innerHTML = resultado //mostra o resultado
   
}
function exe14(){
    let salario = Number(document.getElementById("salario").value)
    let porcentagem1 = salario * 50/100
    let porcentagem2 = salario * 40/100
    let porcentagem3 = salario * 30/100
    let porcentagem4 = salario * 20/100
    let porcentagem5 = salario * 10/100
    let porcentagem6 = salario * 5/100

    let resultado = salario

    if(salario <= 300 && salario > 0){
        resultado = salario + porcentagem1

    }
    else if( salario > 300 && salario <= 500){
        resultado = salario + porcentagem2
      
    }
    else if( salario > 500 && salario <= 700){
        resultado = salario + porcentagem3
      
    }
    else if( salario > 700 && salario <= 800){
        resultado = salario + porcentagem4
      
    }
    else if( salario > 800 && salario <= 1000){
        resultado = salario + porcentagem5
      
    }
    else if( salario > 1000){
        resultado = salario + porcentagem6
      
    }
    else if(salario < 0){
        alert("O salário digitado está incorreto, digite novamente")
    }
    document.getElementById("resultado").innerHTML = resultado //mostra o resultado

}

function exe15(){
    let tipo = Number(document.getElementById("tipo").value)
    let valor = Number(document.getElementById("valor").value)
    
    let resultado = valor

    let porcentagem1 = valor * 3/100
    let porcentagem2 = valor * 4/100

    if(tipo == 1){
        resultado = valor + porcentagem1
    }
    if(tipo == 2){
        resultado = valor + porcentagem2
    }
    if(tipo >= 3 || tipo < 0){
        alert("Valor incorreto, digite 1 ou 2")
    }

    document.getElementById("resultado").innerHTML = resultado //mostra o resultado

}

function exe16(){
    let preco = Number(document.getElementById("preco").value)
    let porcentagem1 = preco * 10/100
    let porcentagem2 = preco * 15/100
    let resultado = preco

    if(preco <= 30 && preco > 0){
        resultado = preco
        alert("Produto não tem desconto")
        document.getElementById("desconto").innerHTML = resultado //mostra o desconto
    }
    else if( preco > 30 && preco <= 100){
        resultado = preco - porcentagem1
        document.getElementById("desconto").innerHTML = porcentagem1 //mostra o desconto
    }
    else if( preco > 100){
        resultado = preco - porcentagem2
        document.getElementById("desconto").innerHTML = porcentagem2 //mostra o desconto
    }
    else if(preco < 0){
        alert("O preco digitado está incorreto, digite novamente")
    }
    document.getElementById("resultado").innerHTML = resultado //mostra o resultado
}

function exe17(){
    let senha = Number(document.getElementById("senha").value)
    let resultado = ""

    if(senha == 4531){
        resultado = "Senha correta! Acesso permitido"
    }
    else{
        resultado = "Senha incorreta! Acesso negado"
    }
    document.getElementById("resultado").innerHTML = resultado //mostra o resultado
}

function exe18(){
    let idade = Number(document.getElementById("idade").value)
    let resultado = ""

    if(idade >= 18){
        resultado = "A pessoa é maior de 18 anos"
    }
    else if(idade < 18 && idade > 0) {
        resultado = "A pessoa não é maior de 18 anos"
    }
    else if(idade <= 0) {
        resultado = "A idade está incorreta, digite novamente"
    }
    document.getElementById("resultado").innerHTML = resultado //mostra o resultado
}

function exe19(){
    let sexo = Number(document.getElementById("sexo").value)
    let altura = Number(document.getElementById("altura").value)

    let resultado = 0

    if(sexo == 1){
        resultado = (72.7 * altura) - 58
    }
    else if(sexo == 2){
        resultado = (62.1 * altura) - 44.7
    }
    document.getElementById("resultado").innerHTML = resultado //mostra o resultado
}

function exe20(){
    let idade = Number(document.getElementById("idade").value)
    let resultado = ""

    if(idade >= 5 && idade <= 7){
        resultado = "O atleta está na categoria INFANTIL"
    }
    else if(idade >= 8 && idade <= 10){
        resultado = "O atleta está na categoria JUVENIL"
    }
    else if(idade >= 11 && idade <= 15){
        resultado = "O atleta está na categoria ADOLESCENTE"
    }
    else if(idade >= 16 && idade <= 30){
        resultado = "O atleta está na categoria ADULTO"
    }
    else if(idade >= 50){
        resultado = "O atleta está na categoria SÊNIOR"
    }
    else if(idade <= 0) {
        resultado = "A idade está incorreta, digite novamente"
    }
    else if(idade > 0 && idade <= 4) {
        resultado = "O atleta não tem categoria"
    }
    document.getElementById("resultado").innerHTML = resultado //mostra o resultado

}

function exe21(){
    let codigo = Number(document.getElementById("codigo").value)
    let resultado = ""

    if(codigo == 1){
        resultado = "Sul"
    }
    else if(codigo == 2){
        resultado = "Norte"
    }
    else if(codigo == 3){
        resultado = "Leste"
    }
    else if(codigo == 4){
        resultado = "Oeste"
    }
    else if(codigo == 5 || codigo == 6){
        resultado = "Nordeste"
    }
    else if(codigo == 7 || codigo == 8 || codigo == 9){
        resultado = "Sudeste"
    }
    else if(codigo >= 10 && codigo <= 20){
        resultado = "Centro-oeste"
    }
    else if(codigo >= 21 && codigo <= 30){
        resultado = "Nordeste"
    }
    else if(codigo <= 0 || codigo > 30 ){
        resultado = "Codigo de procedencia inexistente, digite novamente"
    }

    document.getElementById("resultado").innerHTML = resultado //mostra o resultado
}

function exe22(){
    let peso = Number(document.getElementById("peso").value)
    let idade = Number(document.getElementById("idade").value)
    let resultado = 0

    if(peso <= 60 && idade < 20){
        resultado = 9
    }
    else if(peso > 60 && peso <= 90 && idade < 20){
        resultado = 8
    }
    else if(peso > 90 && idade < 20){
        resultado = 7
    }
    else if(peso > 90 && idade < 20){
        resultado = 7
    }


    else if(peso <= 60 && idade >= 20 && idade <= 50){
        resultado = 6
    }
    else if(peso > 60 && peso <= 90 && idade >= 20 && idade <= 50){
        resultado = 5
    }
    else if(peso > 90 && idade >= 20 && idade <= 50){
        resultado = 4
    }


    else if(peso <= 60 && idade > 50){
        resultado = 3
    }
    else if(peso > 60 && peso <= 90 && idade > 50){
        resultado = 2
    }
    else if(peso > 90 && idade > 50){
        resultado = 1
    }
    document.getElementById("resultado").innerHTML = resultado //mostra o resultado
}

function exe23(){
    let codigo = Number(document.getElementById("codigo").value)
    let quantidade = Number(document.getElementById("quantidade").value)

    let preco = 0
    let total = 0
    let desconto = 0

    // definindo preco do produto

    if(codigo >= 1 && codigo <= 10){
        preco = 10
        document.getElementById("preco").innerHTML = preco //mostra o preco
    }
    else if(codigo >= 11 && codigo <= 20){
        preco = 15
        document.getElementById("preco").innerHTML = preco //mostra o preco
    }
    else if(codigo >= 21 && codigo <= 30){
        preco = 20
        document.getElementById("preco").innerHTML = preco //mostra o preco
    }
    else if(codigo >= 31 && codigo <= 40){
        preco = 30
        document.getElementById("preco").innerHTML = preco //mostra o preco
    }
    

    //definindo valor total
    total = preco * quantidade
    document.getElementById("total").innerHTML = total //mostra o resultado

    //definindo desconto
    if(total < 250){
        desconto = total * 5/100
        document.getElementById("desconto").innerHTML = desconto //mostra o desconto
    }
    else if(total >=250 && total <= 500){
        desconto = total * 10/100
        document.getElementById("desconto").innerHTML = desconto //mostra o desconto
    }
    else if(total > 500){
        desconto = total * 15/100
        document.getElementById("desconto").innerHTML = desconto //mostra o desconto
    }
    

    //definindo valor final
    resultado = total - desconto
    document.getElementById("resultado").innerHTML = resultado //mostra o resultado

}

function exe24(){
    let preco = Number(document.getElementById("preco").value)
    let categoria = Number(document.getElementById("categoria").value)
    let situacao = document.getElementById("situacao").value
    
    let aumento = 0
    let imposto = 0
    let novo = 0

    //calculando valor do aumento
    if(preco <= 25 && categoria == 1){
        aumento = preco * 5/100
        document.getElementById("aumento").innerHTML = aumento //mostra o aumento

    }
    else if( preco <= 25 && categoria == 2){
        aumento = preco * 8/100
        document.getElementById("aumento").innerHTML = aumento //mostra o aumento

    }
    else if( preco <= 25 && categoria == 3){
        aumento = preco * 10/100
        document.getElementById("aumento").innerHTML = aumento //mostra o aumento

    }
    else if(preco > 25  && categoria == 1){
        aumento = preco * 12/100
        document.getElementById("aumento").innerHTML = aumento //mostra o aumento

    }
    else if(preco > 25  && categoria == 2){
        aumento = preco * 15/100
        document.getElementById("aumento").innerHTML = aumento //mostra o aumento

    }
    else if(preco > 25  && categoria == 3){
        aumento = preco * 15/100
        document.getElementById("aumento").innerHTML = aumento //mostra o aumento
        
    }


    document.getElementById("resultado").innerHTML = resultado //mostra o resultado

 
}
