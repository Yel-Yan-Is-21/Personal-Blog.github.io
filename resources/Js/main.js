/* ---Grab elements---*/
const selectElement = selector => {
    const element = document.querySelector(selector);

    if(element){
        return element;
    } else {
        throw new Error(`Something went wrong,make sure that ${selector} exists or is typed correctly.`);
    }
}

/* ---Nav Style On Scroll---*/
function scrollHeader () {
    const headerElement = selectElement("#header");

    if(this.scrollY >= 15){
        headerElement.classList.add("activated");
    } else {
        headerElement.classList.remove("activated");   
    }
}
window.addEventListener("scroll", scrollHeader);

/* ---Open menu ---*/
const menuToggleIcon = selectElement(".menu-toggle-icon");

const toggleMenu = () => {
    const mobileMenu = selectElement("#menu");
    mobileMenu.classList.toggle("activated");
    menuToggleIcon.classList.toggle("activated");
}
menuToggleIcon.addEventListener("click", toggleMenu);

/* --- Open/Close Search pop up--- */
const formOpenbtn = selectElement("#search-icon");
const formClosebtn = selectElement("#form-close-btn");
const searchFormContainer = selectElement("#search-form-container");

formOpenbtn.addEventListener("click", function (){
    searchFormContainer.classList.toggle("activated");
});
formClosebtn.addEventListener("click", function (){
    searchFormContainer.classList.remove('activated');
});

/* ---Close the search form popup on ESC keypress---*/
window.addEventListener("keyup", function (event){
    if(event.key === "Escape"){
        searchFormContainer.classList.remove("activated");
    }
});
/* ---Switch theme add to loacl storage---*/
const bodyElement = document.body;
const themeToggleBtn =  selectElement("#theme-toggle-btn");
const currentTheme = localStorage.getItem("currentTheme");

if(currentTheme){
    bodyElement.classList.add("light-theme");
}

themeToggleBtn.addEventListener("click", function () {
    bodyElement.classList.toggle("light-theme");

    if(bodyElement.classList.contains("light-theme")){
        localStorage.setItem("currentTheme", "themeActive");
    } else {
        localStorage.removeItem("currentTheme");
    }
});

/* ---Swiper---*/
const swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,//spacing between each slide 
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination"
    },
// add responsive breakpoints
    breakpoints: {
        700: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        }
    }
});

