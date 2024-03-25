let openMenu = document.querySelector('.openMenu>i');
let sideMenu = document.querySelector('.side-menu');
let closeMenu = document.querySelector('.heading>i');

openMenu.addEventListener('click', ()=>{
    sideMenu.style.left = '0';
    openMenu.style.display = 'none';
});

closeMenu.addEventListener('click', ()=>{
    sideMenu.style.left = '-18rem';
    openMenu.style.display = 'block';
});

