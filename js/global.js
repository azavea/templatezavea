$(document).ready(function() {
  $(".photo-container").on({
    mouseenter: function() {
      $(this).addClass('hover');
    }, mouseleave: function() {
      $(this).removeClass('hover');
    }
  });
  $("#photo-wrapper").on({
    mouseenter: function() {
      $(this).addClass('hover');
    }, mouseleave: function() {
      $(this).removeClass('hover');
    }
  }, '.photo');
  $("#homepage #hero-button button").click(function(e) {
      e.preventDefault();
      $('html, body').animate({
          scrollTop: $("#openings").offset().top
      }, 2000);
  });
});

// Our Philadelphia Carousel

var philadelphiaCarousel = {
  init: function() {
    root = this;
    wrapper = $('#photo-wrapper');
    $('#our-philadelphia').on('click', '.carousel-control', this.activateCarousel);
  },
  prev: function() {
    if (root.isAnimating()) return false;
    allElements = $(wrapper).find('.photo');
    allElementsLength = allElements.length - 1;
    newElement = $(allElements)[allElementsLength];
    newElementWidth = $(newElement).width();
    $(wrapper).css('left', "-="+newElementWidth).prepend(newElement).animate({
        left: "+="+newElementWidth,
      }, 400);
  },
  next: function() {
    if (root.isAnimating()) return false;
    allElements = $(wrapper).find('.photo');
    newElement = $(allElements)[0];
    newElementWidth = $(newElement).width();
    $(wrapper).animate({
      left: "-="+newElementWidth,
      }, 400, function() {
        $(wrapper).css('left', "+="+newElementWidth).append(newElement);
      });
  },
  isAnimating: function() {
    if ($(wrapper).is(':animated')) return true;
  },
  activateCarousel: function(e) {
    e.preventDefault();
    if ($(this).data('slide') == "prev") {
      root.prev();
    }
    else if ($(this).data('slide') == "next") {
      root.next();
    }
  }
};
$(document).ready(function() {
  philadelphiaCarousel.init();
});