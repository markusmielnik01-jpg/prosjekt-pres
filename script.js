const trekkspillEl = document.querySelector(".trekkspill-box")
const xEl = document.querySelector(".x")
const burgerEl = document.querySelector(".burger")
const ulEl = document.querySelector("ul")


/* nav-trekkspill */
trekkspillEl.addEventListener("click", function(){
    xEl.classList.toggle("active")
    burgerEl.classList.toggle("active")
    ulEl.classList.toggle("active")
})