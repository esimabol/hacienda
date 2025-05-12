(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.tabs').tabs();
    $('.materialboxed').materialbox();
    $('.fixed-action-btn').floatingActionButton();
    $('.slider').slider({
      indicators: false
    });    
     $('.tooltipped').tooltip();
     $('.modal').modal();
    // Function to move to the next slide every 3 seconds
    // setInterval(function() {
    //   $('.carousel').carousel('next');
    // }, 3000);
   
  

  }); // end of document ready
})(jQuery); // end of jQuery name space
