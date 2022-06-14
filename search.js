$('a[href="#search"]').click(function () {
  event.preventDefault();
  $("#search-box").addClass("-open");
  setTimeout(function () {
    inputSearch.focus();
  }, 800);
});

$('a[href="#close"]').click(function () {
  event.preventDefault();
  $("#search-box").removeClass("-open");
});

$(document).keyup(function (e) {
  if (e.keyCode == 27) {
    // escape key maps to keycode `27`
    $("#search-box").removeClass("-open");
  }
});
