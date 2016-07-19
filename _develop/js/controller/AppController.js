import Router from './../core/Router.js';

import frontController from './page/frontController.js';

export default class AppController {
  static start() {
    const routings = Router.Routings;
    const route = Router.getRouting();
    let controller = null;

    switch(route) {
      case routings.FRONT:
        controller = frontController();
        break;
      default:
        break;
    }

    if(controller) controller.run();
  }
}
