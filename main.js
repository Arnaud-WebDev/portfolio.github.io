let menu = document.querySelector("#menu-icon")
let navbar = document.querySelector(".navbar")

menu.addEventListener('click',()  => {
  navbar.classList.toggle("active")
  menu.classList.toggle("toggle")
})
