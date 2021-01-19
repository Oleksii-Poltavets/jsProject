function slider({container, slide, nextArrow, prewArrow, totalCounter, currentCounter, wrapper, field}) {
    //slider
    const slides = document.querySelectorAll(slide),
        slider = document.querySelector(container),
        prev = document.querySelector(prewArrow),
        next = document.querySelector(nextArrow),
        current = document.querySelector(currentCounter),
        total = document.querySelector(totalCounter),
        slidesWrapper = document.querySelector(wrapper),
        slidesField = document.querySelector(field),
        width = window.getComputedStyle(slidesWrapper).width;

    let slideIndex = 1,
        offset = 0;

    function addZeroToSlideIndex () {
        if (slideIndex < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }
    }

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`;
    } else {
        total.textContent = slides.length;
        current.textContent = slideIndex;
    }

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    });

    slider.style.position = 'relative';

    const pager = document.createElement('ol'),
        dots = [];
    pager.classList.add('carousel-indicators');
    slider.append(pager);

    
    for(let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.classList.add('dot');
        dot.setAttribute('data-slide-to', (i + 1));
        pager.append(dot);

        if (i == 0 ) {
            dot.style.opacity = '1';
        }
        dots.push(dot);
    }

    function addDotsActiveStyle () {
        dots.forEach(dot => dot.style.opacity = '0.5');
        dots[(slideIndex - 1)].style.opacity = '1';
    }

    function onlyNumbers (str) {
        return +str.replace(/\D/g, '');
    }

    next.addEventListener('click', () => {
        if (offset == onlyNumbers(width) * (slides.length-1)) {
            offset = 0;
        } else {
            offset += onlyNumbers(width);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex ++;
        }

        addZeroToSlideIndex();
        addDotsActiveStyle();
        
    });

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = onlyNumbers(width) * (slides.length-1);
            
        } else {
            offset -= onlyNumbers(width);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex --;
        }

        addZeroToSlideIndex();
        addDotsActiveStyle();
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = onlyNumbers(width) * (slideTo - 1);
            slidesField.style.transform = `translateX(-${offset}px)`;

            addZeroToSlideIndex();
            addDotsActiveStyle();
        });
    });
    // showSlides(slideIndex);

    // if (slides.length < 10) {
    //     total.textContent = `0${slides.length}`;
    // } else {
    //     total.textContent = slides.length;
    // }

    // function showSlides (n) {
    //     if (n > slides.length) {
    //         slideIndex = 1;
    //     }

    //     if (n < 1) {
    //         slideIndex = slides.length;
    //     }

    //     slides.forEach(slide => slide.style.display = 'none');

    //     slides[slideIndex - 1].style.display = 'block';

    //     if (slides.length < 10) {
    //         current.textContent = `0${slideIndex}`;
    //     } else {
    //         current.textContent = slideIndex;
    //     }
    // }
    

    // function plusSlide (n) {
    //     showSlides(slideIndex += n);
    // }

    // prev.addEventListener('click', () => {
    //     plusSlide(-1);
    // });

    // next.addEventListener('click', () => {
    //     plusSlide(1);
    // });
}

export default slider;