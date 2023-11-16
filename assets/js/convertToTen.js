function ConvertToTen(number,base) {
  let DivNum = [...number]
  let reverseNum = DivNum.reverse()
  let newNumber = 0
  for (let i = 0; i < reverseNum.length; i++) {
    const num = parseInt(reverseNum[i]);
    newNumber+= ((base ** i ) * num)
  }
  return newNumber
}

export default ConvertToTen