$(document).ready(function () {
    $('.region').click(function () {
      var region = $(this).data('region');
      if (region === 'region1') {
        window.location.href = 'https://javascript.info/';
      } else if (region === 'region2') {
        window.location.href = 'https://www.css3.info/';
      } else if (region === 'region3') {
        window.location.href = 'https://html.spec.whatwg.org/multipage/';
      } else {
        window.location.href = 'https://www.collegelasalle.com';
      }
    });
  });
   
  // region.addEventListener("mouseout", function () {
  //   regionInfo.textContent = "Hover over a region to see information";
  // });