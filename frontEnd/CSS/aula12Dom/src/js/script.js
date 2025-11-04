// const estrututra = document.getElementById('estrutura')
// estrututra.textContent = 'Olá, mundo!'
// estrututra.style.fontWeight = 'bold'
// estrututra.style.fontSize = '25px'
// const estrutura = document.querySelectorAll('.quadrado')
// estrutura.forEach((el) => {
//     // el.style.backgroundColor = 'aqua'
//     el.addEventListener('click', (event) => {
//       el.style.width = parseInt(getComputedStyle(el).width) + 100 + 'px'  
//     })
// })

const quadrado = document.getElementById("estrutura");

if (!quadrado) {
  alert("Elemento ñ encontrado!");
} else {
  const estiloInicial = getComputedStyle(quadrado);
  const larguraOriginal = estiloInicial.width;
  const corOriginal = estiloInicial.backgroundColor;
  const htmlOriginal = quadrado.innerHTML;
  
  quadrado.style.transition = "all 1s"
  
  let revertTimeout = null;
  
  quadrado.addEventListener("mouseenter", () => {
    // evita empilhar timeouts se o usuario passar o mouse varias vezes
    if (revertTimeout) {
      // clearTimeout(revertTimeout);
      revertTimeout = null;
    }
    //aplicar transformação ao passar o mouse
    quadrado.style.width = "300px";
    quadrado.style.backgroundColor = "#00ff1eff";
    quadrado.innerHTML = "<h2>Modificado</h2>"
  });
  quadrado.addEventListener("mouseleave", () => {    
    //apos 1s, reverte para os valores originais usando a transição definida
    if (revertTimeout) {
      // clearTimeout(revertTimeout);
      revertTimeout = null;
    }
    revertTimeout = setTimeout(() => {
      
      //reverte para o tam e cor original do quadrado apos 1s = 1000
      quadrado.style.width = larguraOriginal;
      quadrado.style.backgroundColor = corOriginal;
      // quadrado.innerHTML = "";
      quadrado.innerHTML = htmlOriginal;
    revertTimeout = null;
    }, 1000);
  })
}