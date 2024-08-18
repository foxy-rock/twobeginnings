$(document).ready(function() {
	$('.block__title').click(function(event) {
		if ($('.block').hasClass('one')) {
			$('.block__title').not($(this)).removeClass('active');
			$('.block__text').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
});

const showMoreTab2 = document.querySelector('.show__more-tab-2');
const productsLengthTab2 = document.querySelectorAll('.mainkeys__cards-item-tab-2').length;
let itemsTab2 = 2;

showMoreTab2.addEventListener('click', () => {
  itemsTab2 += 2;
  const arrayTab2 = Array.from(document.querySelector('.mainkeys__cards-tab-2').children);
  const visItemsTab2 = arrayTab2.slice(0, itemsTab2);


  visItemsTab2.forEach(el => el.classList.add('is-visible'));

  if (visItemsTab2.length === productsLengthTab2) {
    showMoreTab2.style.display = 'none';
  }
});


const showMoreTab1 = document.querySelector('.show__more-tab-1');
const productsLengthTab1 = document.querySelectorAll('.mainkeys__cards-item-tab-1').length;
let itemsTab1 = 3;

showMoreTab1.addEventListener('click', () => {
  itemsTab1 += 2;
  const arrayTab1 = Array.from(document.querySelector('.mainkeys__cards-tab-1').children);
  const visItemsTab1 = arrayTab1.slice(0, itemsTab1);


  visItemsTab1.forEach(el => el.classList.add('is-visible'));

  if (visItemsTab1.length === productsLengthTab1) {
    showMoreTab1.style.display = 'none';
  }
});


const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav__header");

burger.addEventListener("click", function () {
  nav.classList.toggle("open");
});


let popupBg = document.querySelector('.popup__bg'); // Фон попап окна
let popup = document.querySelector('.popup'); // Само окно
let openPopupButtons = document.querySelectorAll('.more'); // Кнопки для показа окна
let closePopupButton = document.querySelector('.close-popup'); //

openPopupButtons.forEach((button) => { // Перебираем все кнопки
  button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
      e.preventDefault(); // Предотвращаем дефолтное поведение браузера
      popupBg.classList.add('active'); // Добавляем класс 'active' для фона
      popup.classList.add('active'); // И для самого окна
  })
});

closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
  popupBg.classList.remove('active'); // Убираем активный класс с фона
  popup.classList.remove('active'); // И с окна
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
  if(e.target === popupBg) { // Если цель клика - фот, то:
      popupBg.classList.remove('active'); // Убираем активный класс с фона
      popup.classList.remove('active'); // И с окна
  }
});
