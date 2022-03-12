window.addEventListener('load', () => {

    //troca de imagem ao selecionar o menu
    let click = 0
    const t = 180
    $('#menu').click(() => {
        click++
        if(click === 1) {
            $('nav').fadeIn(t)
            $('#menu img').attr('src', 'img/back-menu.png')
        } else {
            click = 0
            $('nav').fadeOut(t)
            $('#menu img').attr('src', 'img/menu.png')
        }
    })

    $(window).resize(() => {
        window.innerWidth >= 1024? $('nav').show() : null
    })
})