export default class Router {
  constructor() {}

  static get Routings() {
    return {
      FRONT: '#front'
    };
  }

  static getRouting() {
    let type = null;
    for(let key in this.Routings) {
      let route = this.Routings[key];
      let page = document.querySelector(route);
      if(page) {
        type = route;
        break;
      }
    }
    return type;
  }
}
