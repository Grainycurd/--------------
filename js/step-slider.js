document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.step__item-adaptiv-slide');
    const prevButton = document.querySelector('.step__items-adaptiv-nav .prev');
    const nextButton = document.querySelector('.step__items-adaptiv-nav .next');
    const pagination = document.querySelectorAll('.step__items-adaptiv-nav .pagination span');

    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = 'flex';
            } else {
                slide.style.display = 'none';
            }
        });
    }

    function updatePagination(index) {
        pagination.forEach((dot, i) => {
            if (i === index) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    function updateButtons() {
        if (currentSlide === 0) {
            prevButton.classList.add('disabled');
        } else {
            prevButton.classList.remove('disabled');
        }

        if (currentSlide === slides.length - 1) {
            nextButton.classList.add('disabled');
        } else {
            nextButton.classList.remove('disabled');
        }
    }

    function goToSlide(index) {
        if (index >= 0 && index < slides.length) {
            currentSlide = index;
            showSlide(currentSlide);
            updatePagination(currentSlide);
            updateButtons();
        }
    }

    prevButton.addEventListener('click', () => {
        if (!prevButton.classList.contains('disabled')) {
            goToSlide(currentSlide - 1);
        }
    });

    nextButton.addEventListener('click', () => {
        if (!nextButton.classList.contains('disabled')) {
            goToSlide(currentSlide + 1);
        }
    });

    pagination.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
    });

    // Начальная инициализация
    showSlide(currentSlide);
    updatePagination(currentSlide);
    updateButtons();
});