
const header = document.querySelector("header")


console.log("active")

window.addEventListener("scroll",() => {
    header.classList.toggle("scrolled",window.pageYOffset > 0)
})