$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
}); // отключение прокрутки страницы при заходе на нее

function scrollServices(top) {
    const mainServices = document.querySelector('.main__services'); 
    mainServices.scrollIntoView({
        block: 'center', // ставит элемент по центру
        inline: 'nearest', // убирает гор. прокрутку
        behavior: 'smooth', // плавная прокрутка
    });
}

scrollServices();

function scrollPrice(top) {
    const tabelProduct = document.querySelector('.tabel__product');
    tabelProduct.scrollIntoView({
        block: 'center',
        inline: 'nearest',
        behavior: 'smooth',
    });
}

scrollPrice();


