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
  sidebarLeftFujifilmLogo.classList.toggle('sidebar-left__fujifilm-logo--alternative'); 

  let sidebarLeftSvg = document.querySelector('.sidebar-left__center--button-menu--svg-path');
  sidebarLeftSvg.classList.toggle('sidebar-left__center--button-menu--svg-path__alternative'); 

  let sidebarLeftMagnifier = document.querySelector('.sidebar-left__center--button-magnifier');
  sidebarLeftMagnifier.classList.toggle('opacity');
  let sidebarLeftCopy = document.querySelector('.sidebar-left__center--button-copy');
  sidebarLeftCopy.classList.toggle('opacity');
});


/*закрывает попап если нажать на клавишу ESCAPE*/ 
document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    popup.classList.remove('nav-top__alternative--show'); 
    
    let sidebarLeft = document.querySelector('.sidebar-left');
    sidebarLeft.classList.remove('sidebar-left--alternative');
    let sidebarLeftInstaxLogo = document.querySelector('.sidebar-left__instax-logo');
    sidebarLeftInstaxLogo.classList.remove('sidebar-left__instax-logo--alternative');
    let sidebarLeftFujifilmLogo = document.querySelector('.sidebar-left__fujifilm-logo');
    sidebarLeftFujifilmLogo.classList.remove('sidebar-left__fujifilm-logo--alternative'); 

    let sidebarLeftSvg = document.querySelector('.sidebar-left__center--button-menu--svg-path');
    sidebarLeftSvg.classList.remove('sidebar-left__center--button-menu--svg-path__alternative'); 

    let sidebarLeftMagnifier = document.querySelector('.sidebar-left__center--button-magnifier');
    sidebarLeftMagnifier.classList.remove('opacity');
    let sidebarLeftCopy = document.querySelector('.sidebar-left__center--button-copy');
    sidebarLeftCopy.classList.remove('opacity');
  
  } });

 
/* в попап меню позволяет скрыть/показать списки товаров при клике на subheader */
  let miniFilmHeader =   document.querySelector('.nav-top__hidden-subheader--alternative');
  let squareFilmHeader = document.querySelector('.nav-top__hidden-subheader--alternative:nth-of-type(3)');
  let wideFilmHeader =   document.querySelector('.nav-top__hidden-subheader--alternative:nth-of-type(4)');


  let miniFilmHeaderSvg =   document.querySelector('.nav-top__hidden-subheader--alternative__svg');
  let squareFilmHeaderSvg = document.querySelector('.nav-top__hidden-subheader--alternative:nth-of-type(3) .nav-top__hidden-subheader--alternative__svg');
  let wideFilmHeaderSvg =   document.querySelector('.nav-top__hidden-subheader--alternative:nth-of-type(4) .nav-top__hidden-subheader--alternative__svg');
  let miniFilmList =     document.querySelector('.nav-top__list--alternative:nth-of-type(1)');
  let squareFilmList =   document.querySelector('.nav-top__list--alternative:nth-of-type(2)');
  let wideFilmList =     document.querySelector('.nav-top__list--alternative:nth-of-type(3)');


  miniFilmHeader.onclick = function() {
  miniFilmList.classList.toggle('hidden');  
  miniFilmHeaderSvg.classList.toggle('rotate');}

  squareFilmHeader.onclick = function() {
  squareFilmList.classList.toggle('hidden');  
  squareFilmHeaderSvg.classList.toggle('rotate');}

  wideFilmHeader.onclick = function() {
  wideFilmList.classList.toggle('hidden');  
  wideFilmHeaderSvg.classList.toggle('rotate');}

