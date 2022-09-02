var navbar__list__toogle = document.querySelector(".navbar__list__toogle")
var navbar__toogle = document.querySelector(".navbar__toogle");

navbar__toogle.addEventListener("click",()=>{
    navbar__list__toogle.classList.toggle("navbar__toogle__open")
})

var navbar = document.querySelector(".navbar")
if(navbar.style.width == "850px" ){
    navbar__list__toogle.classList.remove("navbar__toogle__open")
}