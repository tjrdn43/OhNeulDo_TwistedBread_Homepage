const toggleBtn = document.querySelector('.navbar_toggleBtn');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');

toggleBtn.addEventListener('click', () => {
    icons.classList.toggle('active');
});
toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});