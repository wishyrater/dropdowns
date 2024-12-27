const htmlSlideShow = (() => {

    const htmlSlides = document.querySelectorAll('.html-carousel > .slide');

    let index = 0;

    const incrementIndex = () => {
        if (index === htmlSlides.length - 1) {
            index = 0;
        } else {
            index ++;
        }
    };

    const reduceIndex = () => {
        if (index === 0) {
            index = htmlSlides.length - 1;
        } else {
            index --;
        }
    };

    const showSlide = (index) => {

        for (let i = 0; i < htmlSlides.length; i++) {
            htmlSlides[i].style.display = 'none';
        }

        htmlSlides[index].style.display = 'block';
    };

    const buttons = document.querySelector('.slide-buttons');
    buttons.addEventListener('click', (e) => {
        if (e.target.classList.contains('prev-button')) {
            reduceIndex();
            showSlide(index);
        } else if (e.target.classList.contains('next-button')) {
            incrementIndex();
            showSlide(index);
        }
    });
})();