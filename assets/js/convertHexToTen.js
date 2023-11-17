function ConvertHexToTen(number) {
  //Armazena o numero no array distribuido cada caracter em uma possição diferente no array 
  let DivNum = [...number]

  //Inverte a ordem dos elementos
  let reverseNum = DivNum.reverse()

  //Cria uma variavel para somar os resultados das operações.
  let newNumber = 0

  //Cria um laço para converter o numero de hexadecimal para base 10
  for (let i = 0; i < reverseNum.length ; i++) {

    //Cria uma variavel para armazenar um valor equivalente as letras hexadecimal 
    let num 
    
    //Adiciona um valor pra num dependendo do numero
    switch (reverseNum[i]) {
      case "A":
        num = 10
        break;
      case "B":
        num = 11
        break
      case "C":
        num = 12
        break
      case "D":
        num = 13
        break
      case "E":
        num = 14
        break 
      case "F":
        num = 15
        break
      default:
        num = parseInt(reverseNum[i])
        break;
    }
    newNumber += ((16 ** i) * num) 
  }
  return newNumber
}

export default ConvertHexToTen