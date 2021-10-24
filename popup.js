let popup = document.querySelector('.nav-top__alternative');
let openPopupButton = document.querySelector('.sidebar-left__center--button-menu');


openPopupButton.addEventListener('click', function () { 


 /*отображает попап*/ 
popup.classList.toggle('nav-top__alternative--show');


/*изменяет дизайн левого сайдбара*/ 
  let sidebarLeft = document.querySelector('.sidebar-left');
  sidebarLeft.classList.toggle('sidebar-left--alternative');
  let sidebarLeftInstaxLogo = document.querySelector('.sidebar-left__instax-logo');
  sidebarLeftInstaxLogo.classList.toggle('sidebar-left__instax-logo--alternative');
  let sidebarLeftFujifilmLogo = document.querySelector('.sidebar-left__fujifilm-logo');
  sidebarLeftFujifilmLogo.classList.toggle('sidebar-left__fujifilm-logo--alternative'); });


/*закрывает попап если нажать на клавишу ESCAPE*/ 
document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    popup.classList.remove('nav-top__alternative--show'); } });


/* в попап меню позволяет скрыть/показать списки товаров при клике на subheader */
  let miniFilmHeader =   document.querySelector('.nav-top__hidden-subheader--alternative');
  let squareFilmHeader = document.querySelector('.nav-top__hidden-subheader--alternative:nth-of-type(3)');
  let wideFilmHeader =   document.querySelector('.nav-top__hidden-subheader--alternative:nth-of-type(4)');
  let miniFilmList =     document.querySelector('.nav-top__list--alternative:nth-of-type(1)');
  let squareFilmList =   document.querySelector('.nav-top__list--alternative:nth-of-type(2)');
  let wideFilmList =     document.querySelector('.nav-top__list--alternative:nth-of-type(3)');
    
  miniFilmHeader.onclick = function() {
  miniFilmList.classList.toggle('hidden');  }
  squareFilmHeader.onclick = function() {
  squareFilmList.classList.toggle('hidden');  }
  wideFilmHeader.onclick = function() {
  wideFilmList.classList.toggle('hidden');  }