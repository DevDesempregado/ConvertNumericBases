//Importando função para mandar mensagem
import SendMsg from "./msg.js";

function ConvertHex(number, initialBase, initialNumber) {
 try {
  //Cria uma constante para armazenar o numero antes das transformações
  const iNumber = number
  //Crie uma variavel para armazenar o numero convertido
  let numberConvert = ''
  //se number for 0 ele sera transformado em "0" e não null
  number === 0 ? numberConvert='0': null
  //Cria um laço fazer a converção do numero enquanto ele não for 0
  while (  number > 0) {
    //Divide o numero e armazena o resto da divisão na variavel 
    switch (number % 16) {
      case 10:
        numberConvert = 'A' + numberConvert
        number = Math.floor(number / 16)
        break;
      case 11:
        numberConvert = 'B' + numberConvert
        number = Math.floor(number / 16)
        break;
      case 12:
        numberConvert = 'C' + numberConvert
        number = Math.floor(number / 16)
        break;
      case 13:
        numberConvert = 'D' + numberConvert
        number = Math.floor(number / 16)
        break;
      case 14:
        numberConvert = 'E' + numberConvert
        number = Math.floor(number / 16)
        break;
      case 15:
        numberConvert = 'F' + numberConvert
        number = Math.floor(number / 16)
        break;
      default:
        numberConvert = (number % 16) + numberConvert
        number = Math.floor(number / 16)
        break;
    }
  }
  //Manda o resultado  para o usuario
  if (initialBase !== 10) {
    SendMsg(`O equivalente de (${initialNumber})${initialBase} é (${numberConvert})16.`)
  } else {
    SendMsg(`O equivalente de (${iNumber})${initialBase} é (${numberConvert})16.`)
  }
 } catch (error) {
  SendMsg("Algo deu errado")
 }
}
export default ConvertHex