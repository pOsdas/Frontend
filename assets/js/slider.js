const sliderTrack = document.querySelector('.slider-track');
const sliderItems = document.querySelectorAll('.slider-item');
const moveSliderBtn = document.querySelector('.move-right-btn');

let currentPosition = 0;
const sliderWidth = sliderItems[0].offsetWidth; // Ширина одного элемента слайдера

// Обработчик нажатия кнопки "вправо" и "влево"
moveSliderBtn.addEventListener('click', () => {
    if (moveSliderBtn.textContent === '→') {
        if (currentPosition < sliderItems.length - 1) {
            currentPosition++;
            updateSliderPosition();
        }
        moveSliderBtn.textContent = '←';
    } else {
        if (currentPosition > 0) {
            currentPosition--;
            updateSliderPosition();
        }
        moveSliderBtn.textContent = '→';
    }
});

// Функция обновления позиции слайдера
function updateSliderPosition() {
    sliderTrack.style.transform = `translateX(-${currentPosition * sliderWidth}px)`;
}
