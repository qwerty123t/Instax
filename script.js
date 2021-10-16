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
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
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



/* Скрыть видео при клике на крестик + отобразить все элементы в центре*/

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





/* Код необходимый в случае если посетитель выбрал цвет товара не по умолчанию. И хочет отправить другу ссылку на товар определенного цвета. И чтобы друг увидел товар именно того цвета который выбрал посетитель, будет происходить замена содержимого страницы. 

Когда происходит смена цвета, сайт добавляет в URL метку цвета. И код ниже проверяет ссылку на наличие метки. */
var url = window.location.href;
if(url.indexOf('color=blue') != -1) {

/* Если метка есть то происходит замена контента. */
x = document.getElementsByTagName('h1');
x[0].innerHTML = 'сработало'; }



/* Надо зарефакторить код так чтобы не переписывать изменяемые стили */

/* Надо заменить в коде добавление метки на ее смену чтобы при переключении нескольких цветов ссылка не становилась очень длинной */



/* по клику на кнопку с onclick addUrl() */
function addUrl() {

  /* в url вставляется цвет */ 
  var url = window.location.href;
  window.location.hash = 'color=blue';

  /* изменится вторая цифра */
  x = document.querySelectorAll('.description__bottom--number-second');
  x[0].textContent = '02'; 
  x[0].style = 'margin-right: 1.40625vw'; /*27px*/ 

  /* изменится NEXT рядом со второй цифрой */
  y = document.querySelectorAll('.description__bottom--next');
  y[0].style = 'margin-right: -0.4vw';


};


