/*
function* genFunc(){
  try {
    var x = yield sleep(-1);    
    console.log(x);
  } catch (e) {
    console.log(e.message);
  }

  x = yield sleep(2000);
  console.log(x);
  
  return 'done genFunc';
}
*/

export default function(genFunc) {
  var gen = genFunc();

  return new Promise(function(resolve, reject){
    onFulfilled();
    
    function onFulfilled(val) {
      try {
        var result = gen.next(val); 
      } catch (e) {
        return reject(e);
      }
      return chain(result);
    }
    
    function onRejected(e) {
      try {
        var result = gen.throw(e);        
      } catch (e) {
        return reject(e);
      }
      return chain(result);
    }
    
    function chain(result) {
      if (result.done) {
        return resolve(result.value);
      }
      
      var promise = result.value;
      if (promise instanceof Promise) {
        return promise.then(onFulfilled).catch(onRejected);        
      } else {
        reject(new Error('should be promise'));
      }

    }
  });
};

/*
// sample1
async(genFunc).then(function(val){
  console.log(val);
}).catch(function(e){
  console.log('done: ' + e.message);
});

// sample2
async(function *() {
  console.log('start');
  var result = yield sleep(1000);
  console.log(result);
  var result2 = yield sleep(2000);
  console.log(result2);
  console.log('done');
});
*/
