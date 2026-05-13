const trekkspillEl = document.querySelector(".trekkspill-box")
const xEl = document.querySelector(".x")
const burgerEl = document.querySelector(".burger")
const ulEl = document.querySelector("ul")
const logoEl = document.querySelector(".logo")

/* nav-trekkspill */
trekkspillEl.addEventListener("click", function () {
    xEl.classList.toggle("active")
    burgerEl.classList.toggle("active")
    ulEl.classList.toggle("active")
    logoEl.classList.toggle("active")
    trekkspillEl.classList.toggle("active")
})




const porsjonInputEl = document.getElementById("porsjonInput")


porsjonInputEl.addEventListener("input", function () {
    let porsjoner = porsjonInputEl.value

    document.querySelector(".btr").innerHTML = porsjoner * 150
    document.querySelector(".sgr").innerHTML = porsjoner * 150 
    document.querySelector(".bsgr").innerHTML = porsjoner * 100
    document.querySelector(".egg").innerHTML = porsjoner * 1
    document.querySelector(".vsgr").innerHTML = porsjoner * 1
    document.querySelector(".flr").innerHTML = porsjoner * 250 
    document.querySelector(".ntr").innerHTML = porsjoner * 0.5
    document.querySelector(".bp").innerHTML = porsjoner * 0.5
    document.querySelector(".sb").innerHTML = porsjoner * 150
})