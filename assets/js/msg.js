function SendMsg(text) {
  const main = document.querySelector('main')
  const div = document.createElement('div')

  div.classList.add('result')
  main.appendChild(div)
  return div.innerHTML = `${text}`
}

export default SendMsg