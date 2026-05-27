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


const shopEl = document.querySelector("#shop")
const counterEl = document.querySelector("#antallCookies")
const cookieEl = document.querySelector(".cookie-click")
const upgradeBtn = document.querySelector("#oppgrader")
const gameboxEl = document.querySelector(".gamebox")
const shopboxEl = document.querySelector(".shopbox")
const prisEl = document.querySelector("#pris")
const closeShopEl = document.querySelector(".x-shop")
const infoEl = document.querySelector(".info")
const currentEl = document.querySelector(".current")

const upgrade = 2
let rate = 1
let antallCookies = 0
let cost = 100

currentEl.innerHTML = rate

cookieEl.addEventListener("click", function () {
    antallCookies = Math.floor(antallCookies + 1 * rate)
    counterEl.innerHTML = antallCookies
})

shopEl.addEventListener("click", function () {
    gameboxEl.classList.toggle("active")
    shopboxEl.classList.toggle("active")
    infoEl.classList.toggle("active")
})

closeShopEl.addEventListener("click", function () {
    gameboxEl.classList.toggle("active")
    shopboxEl.classList.toggle("active")
    infoEl.classList.toggle("active")


})

upgradeBtn.addEventListener("click", function () {
    if (antallCookies < cost) {
        alert("Du har ikke nok cookies!")
    }

    else{
        rate = rate * 2
        currentEl.innerHTML = rate
        antallCookies = antallCookies - cost
        cost = Math.floor(cost * 1.5)
        prisEl.innerHTML = Math.floor(cost)
    }
})
