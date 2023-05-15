const btn = document.querySelector("button.mobile-menu-button");
const iconHamburger = document.querySelector("#icon-hamburger");
const iconClose = document.querySelector("#icon-close");
const menu = document.querySelector(".mobile-menu");
const dropdownLinks = document.querySelectorAll('.relative > a');

btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    if (iconClose.classList.contains("hidden")) {
      iconClose.classList.remove("hidden");
      iconHamburger.classList.add("hidden");
  }else {
    iconClose.classList.add("hidden");
    iconHamburger.classList.remove("hidden");
  }
});

dropdownLinks.forEach(function(dropdownLink) {
    dropdownLink.addEventListener('click', function(e) {
        e.preventDefault();
        var dropdownMenu = this.nextElementSibling;
        dropdownMenu.classList.toggle('hidden');
    });
});
