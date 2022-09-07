const initCoachesSlider = () => {
  const coachesContainer = document.querySelector('.coaches__slider');
  const coachesControl = document.querySelector('.coaches__control');

  coachesControl.removeAttribute('data-nojs');

  const coachesSlider = new Swiper(coachesContainer, {

    autoHeight: true,

    loop: true,
    simulateTouch: true,

    breakpoints: {

      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },

      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
    },

    navigation: {
      nextEl: '.coaches__button--prev',
      prevEl: '.coaches__button--next',
    },
  });

  return coachesSlider;
};

const initFeedbackSlider = () => {
  const feedbackContainer = document.querySelector('.feedback__slider');
  const feedbackControl = document.querySelector('.feedback__control');

  feedbackControl.removeAttribute('data-nojs');

  const feedbackSlider = new Swiper(feedbackContainer, {

    slidesPerView: 1,

    spaceBetween: 100,
    autoHeight: true,

    loop: false,
    simulateTouch: true,

    navigation: {
      nextEl: '.feedback__button--next',
      prevEl: '.feedback__button--prev',
    },
  });
  return feedbackSlider;
};

export {initCoachesSlider, initFeedbackSlider};
