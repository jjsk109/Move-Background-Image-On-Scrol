"# Move-Background-Image-On-Scrol" 

jQury를 이용한 스크롤 공부
link : https://www.youtube.com/watch?v=K8v5ycE262s,

사진 모델 : 이녕(트위치, 이녕 https://www.youtube.com/channel/UCLoGhS_8p-G_pzrkfgMi9NA),
text 내용 : 이녕 나무 위키


var scroll_position = $(window).scrollTop()/2;
    $('#leenung').css({
        'background-position-x' : - scroll_position + 'px',
    })