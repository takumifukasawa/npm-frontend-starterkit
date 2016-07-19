(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Router = require('./../core/Router.js');

var _Router2 = _interopRequireDefault(_Router);

var _frontController = require('./page/frontController.js');

var _frontController2 = _interopRequireDefault(_frontController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AppController = function () {
  function AppController() {
    _classCallCheck(this, AppController);
  }

  _createClass(AppController, null, [{
    key: 'start',
    value: function start() {
      var routings = _Router2.default.Routings;
      var route = _Router2.default.getRouting();
      var controller = null;

      switch (route) {
        case routings.FRONT:
          controller = (0, _frontController2.default)();
          break;
        default:
          break;
      }

      if (controller) controller.run();
    }
  }]);

  return AppController;
}();

exports.default = AppController;

},{"./../core/Router.js":3,"./page/frontController.js":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _singleton = require('./../../util/singleton');

var _singleton2 = _interopRequireDefault(_singleton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FrontController = function () {
  function FrontController() {
    _classCallCheck(this, FrontController);
  }

  _createClass(FrontController, [{
    key: 'run',
    value: function run() {
      console.log('FrontController');
    }
  }]);

  return FrontController;
}();

exports.default = (0, _singleton2.default)(FrontController);

},{"./../../util/singleton":5}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Router = function () {
  function Router() {
    _classCallCheck(this, Router);
  }

  _createClass(Router, null, [{
    key: 'getRouting',
    value: function getRouting() {
      var type = null;
      for (var key in this.Routings) {
        var route = this.Routings[key];
        var page = document.querySelector(route);
        if (page) {
          type = route;
          break;
        }
      }
      return type;
    }
  }, {
    key: 'Routings',
    get: function get() {
      return {
        FRONT: '#front'
      };
    }
  }]);

  return Router;
}();

exports.default = Router;

},{}],4:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AppController = require('./../controller/AppController.js');

var _AppController2 = _interopRequireDefault(_AppController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Main = function () {
  function Main() {
    _classCallCheck(this, Main);
  }

  _createClass(Main, null, [{
    key: 'run',
    value: function run() {
      _AppController2.default.start();
    }
  }]);

  return Main;
}();

Main.run();

},{"./../controller/AppController.js":1}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = singleton;
// シングルトンパターン化する
// const getInstance = singleton(MyClass);
// const myClass = getInstance();

function singleton(Klass) {
  var instance = null;
  return function () {
    if (!instance) {
      instance = new Klass();
    }
    return instance;
  };
};

},{}]},{},[4])
//# sourceMappingURL=index.js.map
