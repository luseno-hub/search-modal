const searchTrigger = document.getElementById("search"),
  searchModal = document.querySelector("#search-box"),
  closeSearch = document.querySelector("#close");

searchTrigger.addEventListener("click", function (e) {
  e.preventDefault();
  searchModal.classList.add("-open");
  setTimeout(function () {
    inputSearch.focus();
  }, 500);
});

closeSearch.addEventListener("click", function (e) {
  e.preventDefault();
  searchModal.classList.remove("-open");
});

document.addEventListener("keyup", function (e) {
  if (e.keycode === 27) {
    // map escape key => keycode `27`
    searchModal.classList.remove("-open");
  }
});
