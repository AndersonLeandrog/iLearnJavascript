window.addEventListener('load', () => {
    //Slide da página principal
    let i = 0
    function atualizarSlide() {
        i++
        if(i === 1) {
            $('.slide img').attr('src', 'img/slide2.png').fadeIn(500)
        } else if(i > 1) {
            $('.slide img').attr('src', 'img/slide1.png').fadeIn(500)
            i = 0
        }
    }

    setInterval(atualizarSlide, 5000)
})