import {iosVhFix} from './utils/ios-vh-fix';
// import {initModals} from './modules/modals/init-modals';
import {initCoachesSlider, initFeedbackSlider} from './vendor/init-slider';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();
  initCoachesSlider();
  initFeedbackSlider();

  // Tabs abonements no-js

  const initAbonements = () => {
    const controlTabs = document.querySelector('.abonement-tabs__controls');
    const panelTabs = document.querySelector('.abonement-tabs__content');

    controlTabs.removeAttribute('data-nojs');
    panelTabs.removeAttribute('data-nojs');
  };

  initAbonements();

  // Tabs panel height

  const initTabsPanel = () => {
    const tabsControl = document.querySelector('.abonement-tabs__controls');
    const tabsButton = document.querySelector('.abonement-tabs__button');
    const mediumheight = (tabsButton.offsetHeight * 2) - 20;

    if (tabsControl.offsetHeight > mediumheight) {
      tabsControl.setAttribute('data-height', 'is-high');
    }
  };
  initTabsPanel();

  // Events title font

  const fontTitle = document.querySelector('.events__info h2');
  const dataTitle = fontTitle.textContent;
  const arrayTitle = dataTitle.split(' ');

  arrayTitle.forEach((item) => {
    if (item.length > 6) {
      fontTitle.style.fontSize = 50 + 'px';
      fontTitle.style.lineHeight = 52 + 'px';
    }
  });

  // Local storage

  const submitForm = document.querySelector('.registration__form');
  const userName = submitForm .querySelector('#user-name');
  const inputPhone = submitForm .querySelector('#user-phone');

  submitForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    localStorage.setItem('userName', userName.value);
    localStorage.setItem('userPhone', inputPhone.value);

    userName.value = '';
    inputPhone.value = '';
  });

  // Smooth function

  const initSmoothNavigation = (elem) => {
    const blockId = elem.getAttribute('href');
    document.querySelector('' + blockId).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  // Smooth header button

  const headerButton = document.querySelector('.main-header__content a');
  const buttonAbonement = document.querySelectorAll('.abonement-tabs__button');

  headerButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    initSmoothNavigation(headerButton);
    setTimeout(() => {
      buttonAbonement[0].focus();
    }, 700);
  });

  // Smooth footer navigation

  const navigationItem = document.querySelectorAll('.main-footer__navigation a');

  navigationItem.forEach((item) => {
    item.addEventListener('click', (evt) => {
      evt.preventDefault();
      initSmoothNavigation(item);
    });
  });

  // Smooth footer logo

  const footerLogo = document.querySelector('.main-footer__logo a');

  footerLogo.addEventListener('click', (evt) => {
    evt.preventDefault(evt);
    initSmoothNavigation(footerLogo);
  });

  // Video iframe

  const setupVideo = (video) => {
    const link = video.querySelector('a');
    const media = video.querySelector('img');
    const button = video.querySelector('button');
    const wrapper = video.querySelector('.media__wrapper');

    video.addEventListener('click', () => {
      const iframe = createIframe();
      link.remove();
      button.remove();
      media.remove();
      wrapper.appendChild(iframe);
    });
    video.setAttribute('data-video', 'is-enabled');
    link.removeAttribute('href');
  };

  const createIframe = () => {
    const iframe = document.createElement('iframe');

    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('title', 'YouTube player');
    iframe.style.width = '364';
    iframe.style.height = '228';
    iframe.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?rel=0&showinfo=0&autoplay=1');

    return iframe;
  };

  const videoIntro = document.querySelector('.media__video');

  setupVideo(videoIntro);

  window.addEventListener('resize', () => {
    initTabsPanel();
  });


  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    // initModals();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
