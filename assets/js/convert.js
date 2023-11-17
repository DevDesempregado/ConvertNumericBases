//Importando funções e classes
import  ConvertSimple  from "./ConvertSimple.js";
import ConvertHex from "./convertHex.js";
import ConvertHexToTen from "./convertHexToTen.js";
import ConvertToTen from "./convertToTen.js";
import SendMsg from "./msg.js";
import pattern  from "./pattern.js";

//Capturando elementos html usados no codigo
const form = document.querySelector(".principal__convert___form")
const number = document.querySelector("[data-js='number']")
const base = document.querySelector("[data-js='base']")
const convert = document.querySelector("[data-js='convert']")

//Criando um ouvinte no formulario
form.addEventListener("submit",(event)=>{ 
  //previnindo evento padrão do crome
  event.preventDefault()
  //Captura o elemento html com a classe result
  const DivResult = document.querySelector('.result')
  //Remove o elemento html com a classe result se ele existir
  if(DivResult !== null){
   DivResult.remove()
  }
  //Executa um bloco diferente dependendo da base inicial do numero 
  if (base.value === '10'){
    //Cria um novo objeto pattern com o valor de number.value
    const newNum10 = new pattern(number.value)
    //Verifica se o numero pertence a base
    if (pattern.base10(newNum10) !== null) {
      //Executa um bloco de codigo diferente pra cada valor de base  
      //Converte o numero pra base escolhida
      switch (convert.value) {
        case "2":
          ConvertSimple(parseInt(number.value),parseInt(convert.value),parseInt(base.value),number.value)
          break;
        case "8":
          ConvertSimple(parseInt(number.value),parseInt(convert.value),parseInt(base.value),number.value)
          break
        case "10" :
          SendMsg(`O equivalente de (${number.value})${base.value} é (${number.value})${convert.value}.`)
          break
        case "16" :
          ConvertHex(parseInt(number.value),parseInt(base.value),parseInt(number.value))
          break
        default:
          SendMsg(`Base indefinida ou sem função para conversão.`)
          break
      }
    } else{
        //Caso o codigo não pertença a base é mandado um erro
        SendMsg(`O numero ${number.value} não corresponde a base 10`)
    }
  } else {
    //Cria uma variavel para armazenar o numero convertido pra base 10
    let numToTen = 0
    //Uma variavel que serve de condicional
    let numVali = true
    //Executa um bloco de codigo diferente pra cada valor de base e verifica se o numero pertence a base, caso pertença converte ele pra base 10 
    switch (base.value) {
      case "2":
        let newNum02 = new pattern(number.value)
        if (pattern.base02(newNum02) !== null) {
          numToTen = ConvertToTen(number.value,parseInt(base.value))
        } else {
          numVali = false
        }
        break
      case "8":
        let newNum08 = new pattern(number.value)
        if (pattern.base08(newNum08) !== null) {
          numToTen = ConvertToTen(number.value,parseInt(base.value))
        } else {
          numVali = false
        }
        break
      case "16":
        let newNum16 = new pattern(number.value)
        if(pattern.base16(newNum16) !== null) {
          numToTen = ConvertHexToTen(number.value)
        } else {
          numVali = false 
        }
        break
      default:
        //Manda uma mensagem de erro pro usuario
        SendMsg(`Base indefinida ou sem função para conversão.`)
    }
    //Converte o numero pra base escolhida pelo usuario
    if (numVali === true) {
      switch (convert.value) {
        case "2":
          ConvertSimple(numToTen,parseInt(convert.value),parseInt(base.value),number.value)
          break
        case "8":
          ConvertSimple(numToTen,parseInt(convert.value),parseInt(base.value),number.value)
          break
        case "10":
          SendMsg(`O equivalente de (${number.value})${base.value} é (${numToTen})${convert.value}.`)
          break
        case "16":
          ConvertHex(numToTen,parseInt(base.value),parseInt(number.value))
          break
        default:
          SendMsg("Base indefinida ou sem função para conversão.")
          break
      }
    } else {
      //Manda uma mensagem de erro pro usuario
      SendMsg("Este número não condiz com a base escolhida.")
    }
  }
})

