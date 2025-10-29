// const estrututra = document.getElementById('estrutura')
// estrututra.textContent = 'Olá, mundo!'
// estrututra.style.fontWeight = 'bold'
// estrututra.style.fontSize = '25px'
const estrutura = document.querySelectorAll('.quadrado')
estrutura.forEach((el) => {
    // el.style.backgroundColor = 'aqua'
    el.addEventListener('click', (event) => {
      el.style.width = parseInt(getComputedStyle(el).width) + 100 + 'px'  
    })
})