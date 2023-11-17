function ConvertToTen(number,base) {
  //Armazena o numero no array distribuido cada caracter em uma possição diferente no array 
  let DivNum = [...number]

  //Inverte a ordem dos elementos
  let reverseNum = DivNum.reverse()

  //Cria uma variavel para somar os resultados das operações.
  let newNumber = 0

   //Cria um laço para converter o numero
  for (let i = 0; i < reverseNum.length; i++) {
    //Transforme a string em numero
    const num = parseInt(reverseNum[i])

    //Operação para converter e acumular
    newNumber+= ((base ** i ) * num)
  }
  
  //Retorna o numero convertido 
  return newNumber
}

export default ConvertToTen