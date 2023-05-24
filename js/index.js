$(function() {
    $('.slider-blog__inner').slick({
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    arrows: false
                }
            },
        ]
    });
});