const burgerLinks = document.querySelector('.burger__menu__link'); // блок с ссылками
const menu = document.querySelector('.btn__burger__menu'); // кнопка

function showLinks(event){
    if(event.target.closest('.btn__burger__menu')) {
        burgerLinks.classList.toggle('_active'); 
        menu.classList.toggle('_acitve');
    }
    if(!event.target.closest('.btn__burger__menu')) {
        burgerLinks.classList.remove('_active');
        menu.classList.toggle('_acitve');
    }
}

document.addEventListener('click', showLinks); // при нажатии в любое место, закрывается меню
