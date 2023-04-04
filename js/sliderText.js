let shift = 0;
const sliderText = document.querySelector('.slider__text');

document.querySelector('.btn-next.info__company').addEventListener('click', function() {
    if(528 < windowWidth){
        shift += 550;
        if(shift > 4800 ) {
            shift = 0;
        }
        sliderText.style.left = -shift + 'px';
    }
    
    if (528 > windowWidth){
        shift += 465;
        if(shift > 2400 ) {
            shift = 0;
        }
        sliderText.style.left = -shift + 'px';
    
    }
});

document.querySelector('.btn-prev.info__company').addEventListener('click', function() {
    shift -= 550;
    if( shift < 0){
        shift = 0;
    }
    sliderText.style.left = -shift + 'px';
});



