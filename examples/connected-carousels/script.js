var connector = function(itemNavigation, carouselStage) {
    return carouselStage.jcarousel('items').eq(itemNavigation.index());
};

jQuery(function($) {
    var carouselStage      = $('.carousel-stage').jcarousel();
    var carouselNavigation = $('.carousel-navigation').jcarousel();

    carouselNavigation.jcarousel('items').each(function() {
        var item = $(this);

        item
            .on('active.jcarouselcontrol', function() {
                carouselNavigation.jcarousel('scrollIntoView', this);
                item.addClass('active');
            })
            .on('inactive.jcarouselcontrol', function() {
                item.removeClass('active');
            })
            .jcarouselControl({
                target: connector(item, carouselStage),
                carousel: carouselStage
            });
    });

    // Setup controls for the stage carousel
    $('.prev-stage')
        .on('inactive.jcarouselcontrol', function() {
            $(this).addClass('inactive');
        })
        .on('active.jcarouselcontrol', function() {
            $(this).removeClass('inactive');
        })
        .jcarouselControl({
            target: '-=1'
        });

    $('.next-stage')
        .on('inactive.jcarouselcontrol', function() {
            $(this).addClass('inactive');
        })
        .on('active.jcarouselcontrol', function() {
            $(this).removeClass('inactive');
        })
        .jcarouselControl({
            target: '+=1'
        });

    // Setup controls for the navigation carousel
    $('.prev-navigation')
        .on('inactive.jcarouselcontrol', function() {
            $(this).addClass('inactive');
        })
        .on('active.jcarouselcontrol', function() {
            $(this).removeClass('inactive');
        })
        .jcarouselControl({
            target: '-=1'
        });

    $('.next-navigation')
        .on('inactive.jcarouselcontrol', function() {
            $(this).addClass('inactive');
        })
        .on('active.jcarouselcontrol', function() {
            $(this).removeClass('inactive');
        })
        .jcarouselControl({
            target: '+=1'
        });
});
