const buttons = document.querySelectorAll('a')
console.log(buttons)
buttons.forEach(button => {
  button.addEventListener('click', function(event) {
    let x = event.clientX - event.target.offsetLeft
    let y = event.clientY - event.target.offsetTop
    console.log(x, y)

    let ripple = document.createElement('span')
    ripple.style.left = x + 'px'
    ripple.style.top = y + 'px'
    this.appendChild(ripple)

    setTimeout(() => {
      ripple.remove()
    }, 1000)
  }) 
})