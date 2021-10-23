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




/* Изменить класс css навигации при клике на кнопку меню путем добавления/удаления класса */

let btn = document.getElementById('btn');
btn.onclick = function() {

  /* левый сайдбар */
  let sidebarLeft = document.querySelector('.sidebar-left');
  sidebarLeft.classList.toggle('sidebar-left--alternative');


 let sidebarLeftInstaxLogo = document.querySelector('.sidebar-left__instax-logo');
 sidebarLeftInstaxLogo.classList.toggle('sidebar-left__instax-logo--alternative');

 let sidebarLeftFujifilmLogo = document.querySelector('.sidebar-left__fujifilm-logo');
 sidebarLeftFujifilmLogo.classList.toggle('sidebar-left__fujifilm-logo--alternative');


 /* изменение структуры верхнего меню */
  let navTop = document.querySelector('.nav-top');
  let navTopMenu1 = document.querySelector('.nav-top__menu1');
  let navTopMenu1Header = document.querySelector('.nav-top__menu1_header');

  navTop.classList.toggle('nav-top__alternative');
  navTopMenu1.classList.toggle('nav-top__menu1__alternative');  
  navTopMenu1Header.classList.toggle('nav-top__menu1_header__alternative');


  
  
  

  /* скрытые заголовки */
   let navTopHiddenSubheaders = document.querySelectorAll('.nav-top__hidden-subheader');

  for (var g = 0; g < navTopHiddenSubheaders.length; g++) {
    var navTopHiddenSubheader = navTopHiddenSubheaders[g];
    navTopHiddenSubheader.classList.toggle('nav-top__hidden-subheader--alternative');    
  } 

  /* список элементов */
  let navTopLists = document.querySelectorAll('.nav-top__list');
 
  for (var h = 0; h < navTopLists.length; h++) {
    var navTopList = navTopLists[h];
    navTopList.classList.toggle('nav-top__list--alternative');    
  }


  /* элементы */
  let navTopItems = document.querySelectorAll('.nav-top__item');
  
  for (var g = 0; g < navTopItems.length; g++) {
    var navTopItem = navTopItems[g];
    navTopItem.classList.toggle('nav-top__item--alternative');    
  }




    /* в модальном меню скрывает айтемы при клике на субхеадер */
    var miniFilmHeader =   document.querySelector('.nav-top__hidden-subheader--alternative');
    let squareFilmHeader = document.querySelector('.nav-top__hidden-subheader--alternative:nth-of-type(3)');
    let wideFilmHeader =   document.querySelector('.nav-top__hidden-subheader--alternative:nth-of-type(4)');
    let miniFilmList =     document.querySelector('.nav-top__list--alternative:nth-of-type(1)');
    let squareFilmList =   document.querySelector('.nav-top__list--alternative:nth-of-type(2)');
    let wideFilmList =     document.querySelector('.nav-top__list--alternative:nth-of-type(3)');
    console.log(miniFilmHeader);
    console.log(squareFilmHeader);
    console.log(wideFilmHeader);
    console.log(miniFilmList);
    console.log(squareFilmList);
    console.log(wideFilmList);

     
    miniFilmHeader.onclick = function() {
        if (miniFilmList.style.display === "none") {
          miniFilmList.style.display = "flex";
        } else {
          miniFilmList.style.display = "none";
        }
      }
   
      squareFilmHeader.onclick = function() {
        if (squareFilmList.style.display === "none") {
          squareFilmList.style.display = "flex";
        } else {
          squareFilmList.style.display = "none";
        }
      }
    
      wideFilmHeader.onclick = function() {
        if (wideFilmList.style.display === "none") {
          wideFilmList.style.display = "flex";
        } else {
          wideFilmList.style.display = "none";
        }
      }



  };






/* Код необходимый в случае если посетитель выбрал цвет товара не по умолчанию. И хочет отправить другу ссылку на товар определенного цвета. И чтобы друг увидел товар именно того цвета который выбрал посетитель, будет происходить замена содержимого страницы. 

Когда происходит смена цвета, сайт добавляет в URL метку цвета. И код ниже проверяет ссылку на наличие метки. */
/*
var url = window.location.href;
if(url.indexOf('color=blue') != -1) {
*/
/* Если метка есть то происходит замена контента. */
/*x = document.getElementsByTagName('h1');
x[0].innerHTML = 'сработало'; }
*/


/* Надо зарефакторить код так чтобы не переписывать изменяемые стили */

/* Надо заменить в коде добавление метки на ее смену чтобы при переключении нескольких цветов ссылка не становилась очень длинной */



/* по клику на кнопку с onclick next() 

 Чтобы код заработал нужно добавить в html в элемент рядом с классом: onclick="next();" 
*/
/*function next() {
*/
  /* в url вставляется цвет */ 
 // var url = window.location.href;
 // window.location.hash = 'color=blue';

  /* изменится вторая цифра */
 // x = document.querySelectorAll('.description__bottom--number-second');
 // x[0].textContent = '02'; 
 // x[0].style = 'margin-right: 1.40625vw'; /*27px*/ 

  /* изменится NEXT рядом со второй цифрой */
 // y = document.querySelectorAll('.description__bottom--next');
  //y[0].style = 'margin-right: -0.4vw';


  /* изменятся картинки в центре*/
  //z = document.querySelectorAll('.center__slider');
 // z[0].innerHTML = '<picture class="js-center__slider--item"> <source srcset="img/mini11/113@1.avif 1x, img/mini11/113@2.avif 2x" type="image/avif"> <source srcset="img/mini11/113@1.webp 1x, img/mini11/113@2.webp 2x" type="image/webp"> <img  src="img/mini11/113@1.png" srcset="img/mini11/113@2.png 2x" alt="instax mini 11 white 3"> </picture>'; 


//};


