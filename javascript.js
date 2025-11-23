
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    if(window.scrollY > 50){
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});



const menu = document.querySelector("nav ul");
const toggle = document.querySelector(".menu-toggle");

toggle.addEventListener("click", () => {
    menu.classList.toggle("show");
});
