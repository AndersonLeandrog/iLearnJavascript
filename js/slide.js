window.addEventListener('load', () => {
    let i = 0

    //terminar a iteração do botão
    $('.next').click(() => {
        i++
    }) 

    function atualizarSlide() {
        i++
        let img = $('.slide img')
        let title = $('.slide h3')

        if(i === 1) {
            img.attr('src', 'img/slide3.png').fadeIn(500)
            title.html('Acesse o nosso canal no youtube, todo dia novos vídeos sobre desenvolvimento!')
        } else if(i === 2) {
            img.attr('src', 'img/slide2.png').fadeIn(500)
            title.html('Confira todo o nosso conteúdo disponível no github de graça!')
        } else if(i > 3) {
            img.attr('src', 'img/slide1.png').fadeIn(500)
            title.html('Aprenda Javascript hoje mesmo, seja o diferencial que o mercado precisa.')
            i = 0
        }
    }

    setInterval(atualizarSlide, 5000)
})