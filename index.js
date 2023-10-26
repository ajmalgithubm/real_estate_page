const menu = document.querySelector('#menu-bars');
const navbar = document.querySelector('.navbar')

menu.addEventListener('click', () => {
    console.log("button clicked")
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}