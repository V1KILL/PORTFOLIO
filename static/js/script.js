window.sr = ScrollReveal({ distance: '200px', reset: true, origin: 'left',
duration: 2000})

sr.reveal('tecnologies')
sr.reveal('projects')
sr.reveal('aboutme')

var header = document.getElementById("header");
window.onscroll = function() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.style.transition = '0.3s padding ease'
        header.style.backdropFilter = "blur(10px)";
        header.style.padding = '35px'
  } else {
        header.style.padding = '10px'
        header.style.backgroundColor = "transparent";
  }
};

document.addEventListener('DOMContentLoaded', function () {
    var splides = document.querySelectorAll('.splide');
    splides.forEach(function(splide) {
        new Splide(splide, {
            type: 'slide',
            autoWidth: true,  // Permite que os slides tenham largura automática
            gap: 20,          // Espaço entre os slides
            pagination: false,
            arrows: true,     // Mantém os botões de navegação
        }).mount();
    });
});
