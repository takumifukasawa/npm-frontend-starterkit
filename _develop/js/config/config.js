import userAgent from './../util/userAgent.js';
import Router from './../core/Router.js';

const isPC = (!userAgent.isIOS && !userAgent.isAndroid && !userAgent.isTablet) ? true : false;

const config = {
  isPC: isPC
};

if(config.isPC) document.body.classList.add('is-pc');

export default config;
