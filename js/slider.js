const mainElement = document.documentElement;
const windowWidth = mainElement.clientWidth;

console.log(windowWidth); 

let offset = 0; // сдвиг
const sliderLine = document.querySelector('.slider__track');

document.querySelector('.btn-next').addEventListener('click', function() { 
    if(1248 < windowWidth) {
        offset += 440;
        if( offset > 1578) {
            offset = 0;
        }
        sliderLine.style.left = -offset + 'px'; 
    }

    if (1248 > windowWidth > 529) {
        offset += 620;
        if( offset > 2500) {
            offset = 0;
        }
        sliderLine.style.left = -offset + 'px';
    }
    if (528 > windowWidth) {
        
        offset += 440;
        if( offset > 2200) {
            offset = 0;
        }
        sliderLine.style.left = -offset + 'px';
    }
});

document.querySelector('.btn-prev').addEventListener('click', function() { 
    if(1248 < windowWidth) {
        offset -= 440;
        if( offset < 0){
            offset = 1320;
        }
        sliderLine.style.left = -offset + 'px';
    }

    if(1248 > windowWidth > 529) {
        offset -= 620;
        if( offset < 0){
            offset = 2500;
        }
        sliderLine.style.left = -offset + 'px';
    }

    if (528 > windowWidth) {
        offset -= 440;
        if( offset < 0) {
            offset = 2200;
        }
        sliderLine.style.left = -offset + 'px';
    }
});


const photoSlider = document.querySelectorAll('.slider__item');
photoSlider.forEach(photo => {

    photo.insertAdjacentHTML(
        'beforeEnd', '<button class="btn slider__btn"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate laoreet sapien a sit ante.</span> </button>'
    );
    
    console.log(photo);
});
