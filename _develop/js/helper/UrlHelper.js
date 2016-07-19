export default class UrlHelper {
  
  static splitHash() {
    //if(!e.originalEvent.state) return;
    //if(this.isVisited) return;
    const search = location.search;
    const hash = search.slice(1).split('?');
    const max = hash.length;
    let vars = [];
    for(let i=0, len=max; i<len; i++) {
      let array = hash[i].split('=');
      vars.push({
        key: array[0], value: array[1]
      });
    }
    return vars;
  }
  
  static getCurrentPath() {
    const path = location.pathname;
    const search = location.search;
    return path + search;
  }

  static getPathName() {
    let path = location.pathname;
    let lastStr = path.substr(path.length-1) ;
    return (lastStr === '/') ? path : path + '/';
  }
}
