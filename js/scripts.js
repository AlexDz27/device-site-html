// Search form accessibility
;(function () {
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
}());
// / Search form accessibility

// Featured items slider functionality manager
function FeaturedItemsSliderManager() {
  this.imgEl = document.querySelector('.featured-item-img');
  this.title = document.querySelector('.featured-items-list__cta');
  this.desc = document.querySelector('.featured-items-list__desc');
  this.number = document.querySelector('.featured-items-list__count');
  this.infoTitles = document.querySelector('.featured-item-info__titles');
  this.infoValues = document.querySelector('.featured-item-info__content');

  this.checkboxes = toArray(document.querySelectorAll('.featured-items-toggles-list__input'));

  this.checkboxesToData = {
    1: {
      title: 'Делай селфи,<br> как Бен Стиллер!',
      number: '01',
      desc: 'Самая длинная палка для селфи доступна в нашем магазине. Восемь (Восемь, Карл!) метров длиной и весом' +
        ' всего 5 килограмм.',
      imgPath: 'img/self-palka.png',
      info: [
        {
          title: 'Длина палки',
          value: '8,5 м'
        },
        {
          title: 'Вес палки',
          value: '5 кг'
        },
        {
          title: 'Материал',
          value: 'Карбон'
        }
      ]
    },
    2: {
      title: 'Худеем<br> правильно!',
      number: '02',
      desc: 'Мотивирующие фитнес-браслеты помогут найти в себе силы не пропускать занятия и соблюдать диету.',
      imgPath: 'img/slider-2.png',
      info: [
        {
          title: 'Без подзарядки',
          value: '48 часов'
        },
        {
          title: 'Вес палки',
          value: '5 кг'
        },
      ]
    },
    3: {
      title: 'Порхает как бабочка,<br> жалит как пчела!',
      number: '03',
      desc: 'Этот обычный, на первый взгляд, квадрокоптер оснащен  мощным лазером, замаскированным под стандартную' +
        ' камеру.',
      imgPath: 'img/slider-3.png',
      info: [
        {
          title: 'Радиус поражения',
          value: '50 м'
        }
      ]
    },
  };

  var activateSlide = function (checkbox) {
    var activeCheckboxIdx = checkbox.dataset.checkIdx;

    var activeData = this.checkboxesToData[activeCheckboxIdx];

    this.title.innerHTML = activeData.title;
    this.desc.textContent = activeData.desc;
    this.number.textContent = activeData.number;
    this.imgEl.src = activeData.imgPath;

    this.infoTitles.innerHTML = '';
    this.infoValues.innerHTML = '';
    activeData.info.forEach(function (info) {
      this.infoTitles.innerHTML += '<th>' + info.title + '</th>';
      this.infoValues.innerHTML += '<td>' + info.value + '</td>';
    }.bind(this));

    console.log(activeCheckboxIdx);
  }.bind(this);

  this.checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('click', activateSlide.bind(null, checkbox));
  })
}
var featuredItemsSliderManager = new FeaturedItemsSliderManager();
// Featured items slider functionality manager

// Accessibility for catalog tab menu
function CatalogMenuAccessibilityManager() {
  this.menu = document.querySelector('.js-catalog-menu');
  this.menuTab = document.querySelector('.catalog-tab-js');
  this.menuLinks = this.menu.querySelectorAll('.js-cart__cart-link');

  this.beforeMenuNavStartEl = document.querySelector('.js-catalog-menu-nav-start');
  this.afterMenuNavEndEl = document.querySelector('.js-catalog-menu-nav-end');

  var activateMenu = function () {
    this.menu.style.display = 'flex';
  }.bind(this);
  var deactivateMenu = function () {
    this.menu.style.removeProperty('display');
  }.bind(this);

  var handleOutsideMenuClick = function (evt) {
    var target = evt.target;

    if (this.menu.style.display === 'flex' && !this.menu.contains(target)) {
      deactivateMenu();
    }
  }.bind(this);

  this.menuTab.addEventListener('focus', activateMenu);
  this.beforeMenuNavStartEl.addEventListener('focus', deactivateMenu);
  this.afterMenuNavEndEl.addEventListener('focus', deactivateMenu);

  this.menuLinks.forEach(function (link) {
    link.addEventListener('focus', activateMenu);
  });

  document.body.addEventListener('click', handleOutsideMenuClick);
}
var catalogMenuAccessibilityManager = new CatalogMenuAccessibilityManager();
// / Accessibility for catalog tab menu

// Features slider functionality manager
function FeaturesSliderManager() {
  this.activeClass = 'features-list__item--active';

  this.container = document.querySelector('.features__container');
  this.slideTitle = document.querySelector('.features-list-active-item-desc__title');
  this.slideDesc = document.querySelector('.features-list-active-item-desc__desc');

  this.tabs = document.querySelectorAll('.features-list__item');

  this.tabsToData = {
    1: {
      title: 'Доставка',
      desc: 'Мы с удовольствием доставим ваш товар прямо к вашему подъезду совершенно бесплатно! Ведь мы неплохо' +
        ' заработаем, поднимая его на ваш этаж.',
      iconPath: "url('img/delivery.svg')"
    },
    2: {
      title: 'Гарантия',
      desc: 'Если из-за возгорания купленного у нас товара у вас сгорит дом — не переживайте, мы выдадим Вам новый' +
        ' товар, не дом, конечно.',
      iconPath: "url('img/warranty.svg')"
    },
    3: {
      title: 'Кредит',
      desc: 'Залезть в долговую яму стало проще! Кредитные консультанты подберут для Вас наиболее выгодные условия' +
        ' кредита. Выгодные для нашего банка, разумеется.',
      iconPath: "url('img/credit.svg')"
    }
  };

  var activateSlide = function (tab) {
    var prevActiveTab = document.querySelector('.' + this.activeClass);
    prevActiveTab.classList.remove(this.activeClass);

    tab.classList.add(this.activeClass);

    var tabIdx = tab.dataset.tabIdx;
    var activeData = this.tabsToData[tabIdx];
    
    this.slideTitle.textContent = activeData.title;
    this.slideDesc.textContent = activeData.desc;
    this.container.style.backgroundImage = activeData.iconPath;
  }.bind(this);

  this.tabs.forEach(function (tab) {
    tab.addEventListener('click', activateSlide.bind(null, tab));
  });
}
var featuresSliderManager = new FeaturesSliderManager();
// / Features slider functionality manager

// Utils
function toArray(item) {
  return Array.prototype.slice.call(item);
}