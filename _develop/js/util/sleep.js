export default function(msec) {
  var promise = new Promise(function(resolve, reject) {
    if(msec < 0) {
      return reject(new Errr('msec must be greater than 0'));
    }
    setTimeout(function() {
      resolve(`you sleep ${msec}`);
    }, msec);
  });
  return promise;
}

