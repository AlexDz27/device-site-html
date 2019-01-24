var slideBindings = {
  slide1: {
    tab: document.querySelector('.features-list-item__btn-1'),
    description: document.querySelector('.desc-1'),
    html: {
      title: 'Доставка',
      content: 'Мы с удовольствием доставим ваш товар прямо...'
    }
  },
  slide2: {
    tab: document.querySelector('.features-list-item__btn-2'),
    description: document.querySelector('.desc-2'),
    html: {
      title: 'Доставка 2',
      content: 'Мы с удовольствием доставим ваш товар прямо... 2'
    }
  },
  slide3: {
    tab: document.querySelector('.features-list-item__btn-3'),
    description: document.querySelector('.desc-3'),
    html: {
      title: 'Доставка 3',
      content: 'Мы с удовольствием доставим ваш товар прямо... 3'
    }
  }
};

for (var slide in slideBindings) {
  slideBindings[slide].tab.addEventListener('click', function () {
    console.log('qwe');
  });
}