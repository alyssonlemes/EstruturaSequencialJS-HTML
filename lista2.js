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
