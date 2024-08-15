let button = document.getElementById("burger__icon")
let menu = document.getElementById("burger__menu")
let active_menu = false

button.addEventListener("click", () => {
    if(!active_menu) {
        menu.style.display = "block"
    } else {
        menu.style.display = "none"
    }
    active_menu = !active_menu
})

let list = document.getElementById("menu__options").children
for(i = 0; i < list.length; i++) {
    list[i].addEventListener("click", () => {
        menu.style.display = "none"
        active_menu = !active_menu
    })
}