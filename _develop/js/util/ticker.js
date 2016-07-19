import singleton from './../util/singleton.js';

class Ticker extends require('eventemitter2').EventEmitter2 {
  constructor() {
    super();
    const _update = () => {
      this.emit('tick', Date.now());
      requestAnimationFrame(_update);
    };
    _update(); 
  }
}

export default singleton(Ticker);
