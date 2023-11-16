import SendMsg from "./msg.js";

function ConvertHex(number, initialBase, initialNumber) {
 try {
  const iNumber = number

  let numberConvert = ''

  number === 0 ? numberConvert='0': null

  while (  number > 0) {
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