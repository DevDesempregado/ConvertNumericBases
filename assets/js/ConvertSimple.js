import SendMsg from "./msg.js"

function ConvertSimple(number,base,initialBase,initialNumber) {
  try {
    const iNumber = number

    let numberConvert = ''
    
    number === 0 ? numberConvert='0': null
    
    while (number > 0) {
      numberConvert = (number % base) + numberConvert
      number = Math.floor(number / base)
    }

    if (initialBase !== 10) {
      SendMsg(`O equivalente de (${initialNumber})${initialBase} é (${numberConvert})${base}.`)
    } else {
      SendMsg(`O equivalente de (${iNumber})${initialBase} é (${numberConvert})${base}.`)
    }
  } catch (error) {
    SendMsg("Algo deu errado")
  }
}

export default ConvertSimple