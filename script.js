const $ = document
const menus = $.querySelectorAll('a')
const indicator = $.querySelector('.indicator')

menus.forEach(menu => {
    menu.addEventListener('click', (event) => {
        indicator.style.width = event.target.offsetWidth + "px";
        indicator.style.left = event.target.offsetLeft + "px";
    })
})