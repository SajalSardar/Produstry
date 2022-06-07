$(function($){
    //menu js 
    $('.menu_right_icon').on('click', function(){
        $('.logo').toggleClass('logo_left');
        $('#myNav ul').toggleClass('menu_hide');

    });

    //service_slide js
    $('.service_slide').slick({
        slidesToShow: 3
    });

    //blog slider 
    $('.blog_slider').slick({
        slidesToShow: 3,
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
    });


    //testimonial slider 
    $('.testimonial_content_slider').slick({
        slidesToShow: 1,
        arrows: false,
        asNavFor: '.testimonial_img_slider'
    });

    $('.testimonial_img_slider').slick({
        slidesToShow: 3,
        arrows: true,
        asNavFor: '.testimonial_content_slider',
        centerMode: true,
        centerPadding: '0px',
    });

});