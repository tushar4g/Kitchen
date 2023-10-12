const mobile = document.querySelector(".navbar-mobile-btn");
const nav_head= document.querySelector(".header");

const toggleNavbar = () => {
    // alert("we only connect this index.js file just above the closing body tag");
    nav_head.classList.toggle("active");
};

mobile.addEventListener('click', () => toggleNavbar());

document.querySelectorAll(".navbar-link").forEach(n => n.addEventListener("click"), () =>
{
    mobile.classList.remove("active");
    nav_head.classList.remove("active");
})