AOS.init();

document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function(){
        const posicaoAtual = window.scrollY;
        console.log(posicaoAtual)

        if (posicaoAtual > alturaHero) {
            ocultaElementosDoHeader();
        } else {
            exibeElementosDoHeader();
        }
    });
})

function ocultaElementosDoHeader () {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function exibeElementosDoHeader () {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}