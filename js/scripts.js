// var slideBindings = {
//   slide1: {
//     tab: document.querySelector('.features-list-item__btn-1'),
//     description: document.querySelector('.desc-1'),
//     html: {
//       title: 'Доставка',
//       content: 'Мы с удовольствием доставим ваш товар прямо...'
//     }
//   },
//   slide2: {
//     tab: document.querySelector('.features-list-item__btn-2'),
//     description: document.querySelector('.desc-2'),
//     html: {
//       title: 'Доставка 2',
//       content: 'Мы с удовольствием доставим ваш товар прямо... 2'
//     }
//   },
//   slide3: {
//     tab: document.querySelector('.features-list-item__btn-3'),
//     description: document.querySelector('.desc-3'),
//     html: {
//       title: 'Доставка 3',
//       content: 'Мы с удовольствием доставим ваш товар прямо... 3'
//     }
//   }
// };
//
// for (var slide in slideBindings) {
//   slideBindings[slide].tab.addEventListener('click', function () {
//     console.log('qwe');
//   });
// }

// Search form
var searchForm = document.querySelector('.header__search-form-js');
var searchFormInput = searchForm.querySelector('.header__search-form-input-js');
var searchFormBtn = searchForm.querySelector('.search-form__btn');

searchFormInput.addEventListener('focus', handleSearchFormActivation);
searchFormInput.addEventListener('focusout', function (evt) {
  if (evt.relatedTarget === searchFormBtn) {
    handleSearchFormActivation();
  }
});
searchFormBtn.addEventListener('focusout', function () {
  handleSearchFormDeactivation();
});
searchFormInput.addEventListener('blur', handleSearchFormDeactivation);
searchFormBtn.addEventListener('mouseover', handleSearchFormActivation);
searchFormBtn.addEventListener('mouseout', handleSearchFormDeactivation);

function handleSearchFormActivation() {
  searchForm.classList.add('header__search-form--active');
  searchFormBtn.classList.add('search-form__btn--active');
}
function handleSearchFormDeactivation() {
  searchForm.classList.remove('header__search-form--active');
  searchFormBtn.classList.remove('search-form__btn--active');
}
// / Search form

// Header catalog tab

var catalogTab = document.querySelector('.catalog-tab-js');
catalogTab.addEventListener('mouseover', function () {

});

// / Header catalog tab