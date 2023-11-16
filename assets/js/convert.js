import  ConvertSimple  from "./ConvertSimple.js";
import ConvertHex from "./convertHex.js";
import ConvertHexToTen from "./convertHexToTen.js";
import ConvertToTen from "./convertToTen.js";
import SendMsg from "./msg.js";
import pattern  from "./pattern.js";

const form = document.querySelector(".principal__convert___form")
const number = document.querySelector("[data-js='number']")
const base = document.querySelector("[data-js='base']")
const convert = document.querySelector("[data-js='convert']")

form.addEventListener("submit",(event)=>{ 
  event.preventDefault()
  const DivResult = document.querySelector('.result')
  if(DivResult !== null){
   DivResult.remove()
  }
  if (base.value === '10'){
    const newNum10 = new pattern(number.value)
    if (pattern.base10(newNum10) !== null) {
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
        SendMsg(`O numero ${number.value} não corresponde a base 10`)
    }
    
  } else {
    let numToTen = 0
    let numVali = true
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
        SendMsg(`Base indefinida ou sem função para conversão.`)
    }
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
      SendMsg("Este número não condiz com a base escolhida.")
    }
  }
})

