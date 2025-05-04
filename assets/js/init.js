(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.tabs').tabs();
    $('.materialboxed').materialbox();
    $('.carousel.carousel-slider').carousel({
      fullWidth: true,
      indicators: true
    });

    // Function to move to the next slide every 3 seconds
    setInterval(function() {
      $('.carousel').carousel('next');
    }, 3000); // Adjust the interval as needed
  

  }); // end of document ready
})(jQuery); // end of jQuery name space
