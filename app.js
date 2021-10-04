$(window).scroll(function(){
    var scroll_position = $(window).scrollTop()/2;
    console.log(scroll_position);
    $('#leenung').css({
        'background-position-x' : - scroll_position + 'px',
    })
})