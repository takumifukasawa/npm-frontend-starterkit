import singleton from './../../util/singleton';

class FrontController {
  constructor() {}

  run() {
    console.log('FrontController');
  }
}

export default singleton(FrontController);
