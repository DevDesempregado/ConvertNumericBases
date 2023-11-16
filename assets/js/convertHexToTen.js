function ConvertHexToTen(number) {
  let DivNum = [...number]
  let reverseNum = DivNum.reverse()
  let newNumber = 0

  for (let i = 0; i < reverseNum.length ; i++) {
    let num 
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