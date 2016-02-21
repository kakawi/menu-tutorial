$(function() {
    $('.menu_top ul li').hover(
        /* Функция исполняется, когда мышь входит в область меню */
        function mouseOver() {
            $('> ul',this).fadeIn(1000);
        },
        /* Функция исполняется, когда мышь покидает область меню */
        function mouseOut() {
            $('> ul',this).fadeOut(1000);
        }
    )
});