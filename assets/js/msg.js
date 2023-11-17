function SendMsg(text) {
  //Captura elementos html na base 
  const main = document.querySelector('main')
  //Cria uma div 
  const div = document.createElement('div')

  //Adiciona uma classe css e um texto
  //Adicionar elemento na pagina
  div.classList.add('result')
  main.appendChild(div)
  return div.innerHTML = `${text}`
}

export default SendMsg