import singleton from './../util/singleton.js';

const EVENT = {
  CLICK: 'click'
};

class GoogleAnalytics {
  constructor() {
    const $target = document.querySelector('[data-category]');

    if(!$target) return;

    for(let i=0, len=$target.length; i<len; i++) {
      const $el = $target[i];
      // イベント登録
      (() => $el.addEventListener(EVENT.CLICK, handleClick))();
    }

    function handleClick(e) {
      ga(
        "send",
        "event",
        e.target.getAttribute("data-category"),
        e.target.getAttribute("data-action") || EVENT.CLICK,
        e.target.getAttribute("data-label"),
        e.target.getAttribute("data-value") || null
      );
    }
  }
}

export default singleton(GoogleAnalytics);

