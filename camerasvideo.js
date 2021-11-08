"use strict";

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



// /* Скрыть видео при клике на кнопку закрыть видео + отобразить все элементы в центре*/

// document.querySelector('.exit-button').addEventListener('click', function () {
//   toggle(document.querySelectorAll('.target'));
// });

// function toggle2 (elements, specifiedDisplay) {
// let element, index;

// elements = elements.length ? elements : [elements];
// for (index = 0; index < elements.length; index++) {
//   element = elements[index];

//   if (isElementHidden(element)) {
//     element.style.display = '';

//     // If the element is still hidden after removing the inline display
//     if (isElementHidden(element)) {
//       element.style.display = specifiedDisplay || 'block';
//     }
//   } else {
//     element.style.display = 'none';
//   }
// }
// function isElementHidden2 (element) {
//   return window.getComputedStyle(element, null).getPropertyValue('display') === 'none';
// }
// }


