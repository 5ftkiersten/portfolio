$(document).ready(function() {
    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        navigation: true,
        navigationPosition: 'left',
        navigationTooltips: ['About', 'Blue State Digital', 'AirBSD', 'Indaba', 'Shatterproof', 'UK Labour Party', 'YMCA of NYC'],
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        //Scrolling
        scrollingSpeed: 500,
        scrollBar: false,
        loopHorizontal: true,
        continuousVertical: true,
        normalScrollElements: '#header, #logo, .footer',
        scrollOverflow: false,
        touchSensitivity: 15,

        //Accessibility
        recordHistory: false,

        //Design
        controlArrows: false,
        fixedElements: '#header, #logo, .footer',

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    });
});