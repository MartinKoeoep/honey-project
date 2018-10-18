$(document).ready(function() {

  const $video = $('#landingPageVideo');

  const $navLink = $('.navLink');
  const $dropdown = $('.dropdown');
  const idArray = ['landingPage','buyHoney','sellHoney','submitResearch','discoverResearch','howItWorks','aboutUs'];
  const initialLanding = window.location.href.split('#').pop();
  console.log(initialLanding);

  $navLink.click( (e) => {
    let clickTarget;
    if (e.target.tagName === 'IMG') {
      clickTarget = e.currentTarget.href.split('#').pop();
      sectionToggler(clickTarget);
      $video[0].play();
    } else {
      clickTarget = e.target.href.split('#').pop();
      $video[0].pause();
    }
    sectionToggler(clickTarget);
    $('.navbar-burger').toggleClass('is-active');
    $('.navbar-menu').toggleClass('is-active');
  });

  function sectionToggler(target){
    $(`#${target}`).removeClass('hide');
    const filteredList = idArray.filter( item => item !== target);
    filteredList.forEach(item => {
      $(`#${item}`).addClass('hide');
    });
  }

  $dropdown.click(function () {
    $dropdown.toggleClass('is-active');
  });

  // Check for click events on the navbar burger icon
  $('.navbar-burger').click(function() {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $('.navbar-burger').toggleClass('is-active');
    $('.navbar-menu').toggleClass('is-active');
  });

  sectionToggler(initialLanding);
});
