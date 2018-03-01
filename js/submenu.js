document.querySelector( '#srv' )
  .addEventListener( "click", function() {
    this.classList.toggle( "act" );
    if ($(".fa").hasClass('fa-angle-down')) {
    $(".fa").removeClass('fa-angle-down').addClass('fa-angle-right');} else {
    $(".fa").removeClass('fa-angle-right').addClass('fa-angle-down');}
  }); 
