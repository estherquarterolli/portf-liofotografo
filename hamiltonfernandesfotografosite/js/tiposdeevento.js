$(document).ready(function(){
$((".botao-filtro .filter .btn-filtro").click(function(){
    $(this).addClass("active").siblings().removeClass("active")
    $(".itens").fadeOut()
    setTimeout(function(){
        $(".itens").fadeIn()
    }, 700)
})
})