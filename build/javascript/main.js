const btn = document.querySelector("button.mobile-menu-button");
const iconHamburger = document.querySelector("#icon-hamburger");
const iconClose = document.querySelector("#icon-close");
const menu = document.querySelector(".mobile-menu");
const dropdownLinks = document.querySelectorAll('.nameArrow');
const productDropdown = document.querySelector(".product-dropdown");
const companyDropdown = document.querySelector(".company-dropdown");
const connectDropdown = document.querySelector(".connect-dropdown");

const productArrow = document.querySelector(".product-arrow");
const companyArrow = document.querySelector(".company-arrow");
const connectArrow = document.querySelector(".connect-arrow");

btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    if (iconClose.classList.contains("hidden")) {
        iconClose.classList.remove("hidden");
        iconHamburger.classList.add("hidden");
    } else {
        iconClose.classList.add("hidden");
        iconHamburger.classList.remove("hidden");
    }
});

function hideDropdowns() {
    productDropdown.classList.add('hidden');
    companyDropdown.classList.add('hidden');
    connectDropdown.classList.add('hidden');
    productArrow.classList.remove("rotate-180");
    companyArrow.classList.remove("rotate-180");
    connectArrow.classList.remove("rotate-180");
}

dropdownLinks.forEach(function (dropdownLink) {
    dropdownLink.addEventListener('click', function (e) {
        e.preventDefault();
        var dropdownMenu = this.nextElementSibling;

        if (dropdownMenu === productDropdown && !dropdownMenu.classList.contains('hidden')) {
            dropdownMenu.classList.add('hidden');
            productArrow.classList.remove("rotate-180");
        } else if (dropdownMenu === companyDropdown && !dropdownMenu.classList.contains('hidden')) {
            dropdownMenu.classList.add('hidden');
            companyArrow.classList.remove("rotate-180");
        } else if (dropdownMenu === connectDropdown && !dropdownMenu.classList.contains('hidden')) {
            dropdownMenu.classList.add('hidden');
            connectArrow.classList.remove("rotate-180");
        } else {
            hideDropdowns();

            if (dropdownMenu === productDropdown) {
                companyDropdown.classList.add('hidden');
                connectDropdown.classList.add('hidden');
                productArrow.classList.add("rotate-180");
            } else if (dropdownMenu === companyDropdown) {
                productDropdown.classList.add('hidden');
                connectDropdown.classList.add('hidden');
                companyArrow.classList.add("rotate-180");
            } else if (dropdownMenu === connectDropdown) {
                productDropdown.classList.add('hidden');
                companyDropdown.classList.add('hidden');
                connectArrow.classList.add("rotate-180");
            }

            dropdownMenu.classList.toggle('hidden');
        }
    });
});