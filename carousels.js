const htmlSlideShow = (() => {

    const htmlSlides = document.querySelectorAll('.html-carousel > .slide');
    const dots = document.querySelectorAll('.dot');

    let index = 0;
    let timer;

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
            dots[i].style.backgroundColor = '#bbb';
        }
        htmlSlides[index].style.display = 'block';
        dots[index].style.backgroundColor = 'green';
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

    dots.forEach((dot) => {
        dot.addEventListener("click", (e) => {
            index = Number(e.target.getAttribute('data-index'));
            showSlide(index);
        })
    })

    showSlide(index);
    setInterval(() => {
        incrementIndex();
        showSlide(index);
    }, 5000);
})();