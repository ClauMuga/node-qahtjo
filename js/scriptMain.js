window.addEventListener('load', () => {

  // const vsnSM = 
  console.log('GMH | ScriptMain_v7 | 2022.10.11.01');
  
  // document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'complete') {
        // $('.load_image').fadeOut(300);
        hideLoader();
    }
  // }
  
  function hideLoader() {
    $('.load_image').fadeOut(300);
  }
  
  function showLoader() {
    // $('body, html').animate({scrollTop: '0px'}, 0);
    window.scrollTo(0, 0)
    $('.load_image').fadeIn(300);
  }
    
  // ---------onload---------------
  // window.onload = function(){
    
  // };

});