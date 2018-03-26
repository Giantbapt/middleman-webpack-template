import Typed from 'typed.js';

function loadDynamicBannerText() {
  new Typed('#banner-typed-text', {
    strings: ["Hello ", "Nice to meet you !"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
