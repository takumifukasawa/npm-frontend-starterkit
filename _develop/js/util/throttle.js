export default function (fn, interval) {
  var isWaiting = false;

  var exec = function () {
    if (isWaiting) {
      return;
    }
    var args = arguments;

    isWaiting = true;
    setTimeout(function () {
      isWaiting = false;
      fn.apply(this, args);
    }, interval);
  };

  return exec;
};


