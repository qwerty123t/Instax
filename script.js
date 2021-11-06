"use strict";
/* Слайдер */

/* Индекс слайда по умолчанию */
let slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующий слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("js-center__slider--item");
      if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[slideIndex - 1].style.display = "block";
}


/* Показать/скрыть видео при клике на превью + скрыть все элементы в центре*/

document.querySelector('.toggle-button').addEventListener('click', function () {
  toggle(document.querySelectorAll('.target'));
});

function toggle (elements, specifiedDisplay) {
let element, index;

elements = elements.length ? elements : [elements];
for (index = 0; index < elements.length; index++) {
  element = elements[index];

  if (isElementHidden(element)) {
    element.style.display = '';

    // If the element is still hidden after removing the inline display
    if (isElementHidden(element)) {
      element.style.display = specifiedDisplay || 'block';
    }
  } else {
    element.style.display = 'none';
  }
}
function isElementHidden (element) {
  return window.getComputedStyle(element, null).getPropertyValue('display') === 'none';
}
}



/* Скрыть видео при клике на кнопку закрыть видео + отобразить все элементы в центре*/

document.querySelector('.exit-button').addEventListener('click', function () {
  toggle(document.querySelectorAll('.target'));
});

function toggle2 (elements, specifiedDisplay) {
let element, index;

elements = elements.length ? elements : [elements];
for (index = 0; index < elements.length; index++) {
  element = elements[index];

  if (isElementHidden(element)) {
    element.style.display = '';

    // If the element is still hidden after removing the inline display
    if (isElementHidden(element)) {
      element.style.display = specifiedDisplay || 'block';
    }
  } else {
    element.style.display = 'none';
  }
}
function isElementHidden2 (element) {
  return window.getComputedStyle(element, null).getPropertyValue('display') === 'none';
}
}


