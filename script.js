// script.js
document.addEventListener("DOMContentLoaded", function () {
    var backgrounds = [
        'ImgInterstellar/test1.jpg',
        'ImgInterstellar/test2.jpg',
        'ImgInterstellar/test3.jpg',
        'ImgInterstellar/test4.jpg',
        'ImgInterstellar/test5.jpg',
    ];

    var currentIndex = 0;

    function changeBackground() {
        document.getElementById('background-slider').style.backgroundImage = 'url(' + backgrounds[currentIndex] + ')';
        currentIndex = (currentIndex + 1) % backgrounds.length;
    }

    // Chama changeBackground imediatamente para definir a primeira imagem de fundo
    changeBackground();

    // Configura uma transição para o background-slider
    document.getElementById('background-slider').style.transition = 'background 1s ease';

    // Configura um intervalo para mudar o fundo a cada 5 segundos
    setInterval(changeBackground, 5000);
});


