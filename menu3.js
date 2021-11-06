"use strict";
let navBottomMenu3Header = document.querySelector('.nav-bottom__menu3_header');
let navBottomMenu3HeaderSvg = document.querySelector('.nav-bottom__menu3_header--svg');
let subMenus = document.querySelectorAll('.sub-menu');

navBottomMenu3Header.addEventListener('click', function () { 
  
  /* скрыть содержимое меню3 */
    for (var n = 0; n < subMenus.length; n++) {
    var subMenu = subMenus[n];
    subMenu.classList.toggle('hidden');   
  } 
  /* повернуть стрелочку */
 navBottomMenu3HeaderSvg.classList.toggle('rotate');
 });
