"use strict"

// menu-burger
const iconBurger = document.querySelector('.menu__icon');  // получаем в константу иконку меню-бургер
const headerMenu = document.querySelector('.header__menu');  // получаем в константу весь блок с меню
const menuItem = document.querySelectorAll('.menu__item');  // получаем в константу все пункты меню
const menuLink = document.querySelector('.menu__link');  // получаем в константу все пункты меню

const header = document.querySelector('.header');
console.log(iconBurger);
iconBurger.addEventListener('click', function (e) {
  iconBurger.classList.toggle('menu-open');
  headerMenu.classList.toggle('_open');
  header.classList.toggle('mobile');
  document.body.classList.toggle('_lock');
}
);




// ТАБЫ tabs Блок "Для кого подходит VIP"
const tabsFor = document.querySelectorAll('.for__tab-button'); // получаем в константу все табы-вкладки на странице
const contentsFor = document.querySelectorAll('.for__tab-content');   // получаем в константу все блоки с контентом таба на странице

// проходим циклом forEach по коллекции вкладок:
tabsFor.forEach(function (tab, index) {
  // по клику добавляем выбранному табу класс active:
 tab.addEventListener("click", function () {
    //ПРЕДВАРИТЕЛЬНО проходим по всем табам удаляем класс active у предыдущего активного таба:
  tabsFor.forEach(function (tab) {
    tab.classList.remove("active");
  });
    // и добавляем текущему
  tab.classList.add("active");

    //проходим по всем блокам с контентом и удаляем класс open у предыдущего активного блока:
  contentsFor.forEach(function (item) {
    item.classList.remove('open');
  })
    // для отображения содержимого в соответствии с выбранной вкладкой, добавляем блоку с контентом класс open (текущий индекс совпадает,
    //  т.к. кол-во вкладок и кол-во блоков с контентом одинаково)
  contentsFor[index].classList.add('open');
});
})


// ТАБЫ tabs (история)
const tabsHistory = document.querySelectorAll('.timeline__item-bullet'); // получаем в константу все табы-кнопки на странице
const contentsHistory = document.querySelectorAll('.history__content-item');   // получаем в константу все блоки с контентом таба на странице

// проходим циклом forEach по коллекции вкладок:
tabsHistory.forEach(function (tab, index) {
  // по клику добавляем выбранному табу класс active:
  tab.addEventListener("click", function () {
    //ПРЕДВАРИТЕЛЬНО проходим по всем табам удаляем класс active у предыдущего активного таба:
    tabsHistory.forEach(function (tab) {
      tab.classList.remove("active");
    });
    // и добавляем текущему
    tab.classList.add("active");

    //проходим по всем блокам с контентом и удаляем класс open у предыдущего активного блока:
    contentsHistory.forEach(function (item) {
      item.classList.remove('open');
    })
    // для отображения содержимого в соответствии с выбранной вкладкой, добавляем блоку с контентом класс open (текущий индекс совпадает,
    //  т.к. кол-во вкладок и кол-во блоков с контентом одинаково)
    contentsHistory[index].classList.add('open');
  });
})


// ТАБЫ tabs (контакты)
const tabs = document.querySelectorAll('.tabs__item'); // получаем в константу все табы-вкладки на странице
const contents = document.querySelectorAll('.tab-content');   // получаем в константу все блоки с контентом таба на странице

// проходим циклом forEach по коллекции вкладок:
tabs.forEach(function (tab, index) {
  // по клику добавляем выбранному табу класс active:
  tab.addEventListener("click", function () {
    //ПРЕДВАРИТЕЛЬНО проходим по всем табам удаляем класс active у предыдущего активного таба:
    tabs.forEach(function (tab) {
      tab.classList.remove("active");
    });
    // и добавляем текущему
    tab.classList.add("active");

    //проходим по всем блокам с контентом и удаляем класс open у предыдущего активного блока:
    contents.forEach(function (item) {
      item.classList.remove('open');
    })
    // для отображения содержимого в соответствии с выбранной вкладкой, добавляем блоку с контентом класс open (текущий индекс совпадает,
    //  т.к. кол-во вкладок и кол-во блоков с контентом одинаково)
    contents[index].classList.add('open');
  });
})

// выпадающий список в контактах
document.addEventListener('click', collapseFunction);
function collapseFunction(event){
	if(!event.target.classList.contains('spoller-btn')) return
	const attr = event.target.getAttribute('data-collapse');// получаем значение дата атрибута кнопки
	const collapsedBody = document.getElementById(attr); // получаем связанный с кнопкой блок с id=data-collapsed
	collapsedBody.classList.toggle('open');
	event.target.classList.toggle('active');
}

// ТАБЫ tabs (модальное окно с контактами)
const tabsPopup = document.querySelectorAll('.popup__button'); // получаем в константу все табы-вкладки на странице
const contentsPopup = document.querySelectorAll('.popup__content-item');   // получаем в константу все блоки с контентом таба на странице

// проходим циклом forEach по коллекции вкладок:
tabsPopup.forEach(function (tab, index) {
  // по клику добавляем выбранному табу класс active:
  tab.addEventListener("click", function () {
    //ПРЕДВАРИТЕЛЬНО проходим по всем табам удаляем класс active у предыдущего активного таба:
    tabsPopup.forEach(function (tab) {
      tab.classList.remove("active");
    });
    // и добавляем текущему
    tab.classList.add("active");

    //проходим по всем блокам с контентом и удаляем класс open у предыдущего активного блока:
    contentsPopup.forEach(function (item) {
      item.classList.remove('open');
    })
    // для отображения содержимого в соответствии с выбранной вкладкой, добавляем блоку с контентом класс open (текущий индекс совпадает,
    //  т.к. кол-во вкладок и кол-во блоков с контентом одинаково)
    contentsPopup[index].classList.add('open');
  });
})



 // проходим циклом forEach по пунктам меню и назначаемм каждому по клику обработчик, который срабатывает при открытом мобильном меню
 // обработчик закрывает мобильное меню и возвращает иконку бургера-меню в начальное "закрытое" положение
menuItem.forEach(function(item){
  item.addEventListener('click', function (e){
    if (headerMenu.closest('._open')) {
      headerMenu.classList.remove('_open');
      iconBurger.classList.remove('menu-open');
    }
  })
})

// назначаем обработчик на весь document
// document.addEventListener('click', function(e){
//   // если мы кликнули не на блок меню, то забираем у меню user-header класс .open и оно закрывается
// if(!e.target.closest('.user-header')){
//   user_menu.classList.remove('open');
// }
// })

jQuery(document).ready(function($) {
  $('.popup__form').on('submit', function(event) {
    event.preventDefault();
    let form  = $(this),
    btn       = form.find('.form-popup__button');

    btn.prop('disabled', true);
    if( !form.hasClass('disabled__send') ) {
      form.addClass('disabled__send');
      $.ajax({
        url:      '/send-form.php',
        type:     'POST',
        dataType: 'html',
        data:     'send=popup&'+form.serialize(),
      })
      .done(function(res) {
        if( res == 'success' ) {
          form[0].reset();
          Fancybox.getInstance().close();
          //Сюда код открытия окна success
          Fancybox.show([{ src: "#popupSuccess", type: "inline" }]);
        }
      })
      .always(function() {
        btn.prop('disabled', false);
        form.removeClass('disabled__send');
      });
    }
  });
  $('.callback__form').on('submit', function(event) {
    event.preventDefault();
    let form  = $(this),
    btn       = form.find('.form-callback__button');

    btn.prop('disabled', true);
    if( !form.hasClass('disabled__send') ) {
      form.addClass('disabled__send');
      $.ajax({
        url:      '/send-form.php',
        type:     'POST',
        dataType: 'html',
        data:     form.serialize(),
      })
      .done(function(res) {
        if( res == 'success' ) {
          form[0].reset();
          //Сюда код открытия окна success
          Fancybox.show([{ src: "#popupSuccess", type: "inline" }]);
        }
      })
      .always(function() {
        btn.prop('disabled', false);
        form.removeClass('disabled__send');
      });
    }
  });
}); 