window.addEventListener('load', () => {
    //Troca de imagem ao selecionar o menu mobile
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


    //Exibe e oculta o menu de redes sociais
    $('.hideSocial').click(function() {
        click++
        if(click === 1) {
            $(this).attr('src', 'img/expand.png')
            $('.social').css('height', '25px')
            $('.social a').hide().fadeOut()
        } else {
            $(this).attr('src', 'img/close.svg')
            $('.social').css('height', '230px')
            $('.social a').show().fadeIn()
            click = 0
        }
    })
})