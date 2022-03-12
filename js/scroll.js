window.onload = function(e) {
    //Volta ao topo da página
    this.onscroll = function() {
        $('.home').fadeIn(500).css('display', 'flex')
    }

    $('.home').click(() => {
        this.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        })
    })


    //Pega o elemento que foi clicado
    //Percorre por todos os elementos h1 passando o conteúdo da função
    //Na função ocorre uma verificação, se o texto html do trajeto clicado for igual ao da h1
    //Pega a posição em relação ao eixoY da h1 e rola a página verticalmente até esse eixo
    $('body').click((e) => {
        let target = e.target
        $('h1').each(function(e, i) {
            if($(i).text() === $(target).text() && target.tagName != 'H1') { 
                //Destaca o trajeto a medida em que é selecionado
                const noStyleDefined = { borderLeft: 'none', background: '' }
                const newSelectedStyle = { borderLeft: '2px solid yellow', background: '#000' }
                $(target).attr('class', 'topic')
                if($('.topic').length >= 0) {
                    $('.topic').css(noStyleDefined)
                    $(target).css(newSelectedStyle)
                }

                //Centraliza o conteúdo que foi selecionado com scrollTo
                let targetPosY = $(this).offset().top
                window.scrollTo({
                    top: targetPosY - 80,
                    left: 0,
                    behavior: 'smooth',
                })   
            }
        })
    })
}

