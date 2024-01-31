document.querySelectorAll('.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const target = document.querySelector(this.getAttribute('href'));
  
      target.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
 
  
  
  
  
  

 





  function mostrarTexto() {
    var boton = document.getElementById("boton");
    var texto = document.getElementById("texto");

    if (texto.style.display === "none" || texto.style.display === "") {
        texto.style.display = "block";
        boton.innerHTML = "Mostrar Menos";
    } else {
        texto.style.display = "none";
        boton.innerHTML = "Mostrar Más";
    }
}