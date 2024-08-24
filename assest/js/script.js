const hamburger = document.getElementById("hamburger")
const sidebar = document.getElementById("sidebar")
const close_button = document.getElementById("close_button")

hamburger.addEventListener("click", () => {
    sidebar.style.left = "0%"
})
close_button.addEventListener("click", () => {
    sidebar.style.left = "-100%"
})




