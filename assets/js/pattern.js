class pattern {

  constructor (number, base){
    this.number = number
    this.base = base
  }

  static base02 (userNumber){
    const numberPattern = new RegExp(/^[0-1]*$/)
    const ok = numberPattern.exec(userNumber.number)
    return ok
  }

  static base08 (userNumber){
    const numberPattern = new RegExp(/^[0-7]*$/)
    const ok = numberPattern.exec(userNumber.number)
    return ok
  }
  
  static base10 (userNumber){
    const numberPattern = new RegExp(/^[0-9]*$/)
    const ok = numberPattern.exec(userNumber.number)
    return ok 
  }

  static base16 (userNumber){
    const numberPattern = new RegExp(/^[(0-9)|(A-F)]*$/)
    const ok = numberPattern.exec(userNumber.number)
    return ok
  }
}

export default pattern