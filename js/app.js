$(document).ready(function() {

  const $navLink = $('.navLink');

  const idArray = ['landingPage','buyHoney','sellHoney','submitResearch','discoverResearch','howItWorks','aboutUs'];
  const initialLanding = window.location.href.split('#').pop();

  $navLink.click( (e) => {
    const clickTarget = e.target.href.split('#').pop();
    sectionToggler(clickTarget);
  });

  function sectionToggler(target){
    console.log(target);
    $(`#${target}`).removeClass('hide');
    $(`a[href="#${target}"]`).addClass('active');
    const filteredList = idArray.filter( item => item !== target);
    filteredList.forEach(item => {
      $(`a[href="#${item}"]`).removeClass('active');
      $(`#${item}`).addClass('hide');
    });
  }

  // Check for click events on the navbar burger icon
  $('.navbar-burger').click(function() {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $('.navbar-burger').toggleClass('is-active');
    $('.navbar-menu').toggleClass('is-active');
  });

  sectionToggler(initialLanding);
});
