//Importa uma função
import SendMsg from "./msg.js"

function ConvertSimple(number,base,initialBase,initialNumber) {
  try {
    //Salva o numero escolhido pelo usuario antes das transformações
    const iNumber = number

    //Cria uma variavel para acumular os restos das divizoes
    let numberConvert = ''
    //caso number seja 0 ele passa a ser '0' e não null
    number === 0 ? numberConvert='0': null
    
    //Cria um loop enquanto number for maior que 0
    while (number > 0) {
      //Acumula o resto da divisão
      numberConvert = (number % base) + numberConvert
      //divide o numero e atualiza o numero
      number = Math.floor(number / base)
    }

    //Manda  o resultado para o usario
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