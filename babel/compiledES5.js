"use strict";

function getNumber() {
  var p = new Promise(function (resolve, reject) {
    //做一些异步操作
    setTimeout(function () {
      var num = Math.ceil(Math.random() * 10); //生成1-10的随机数

      if (num <= 5) {
        resolve(num);
      } else {
        reject('数字太大了' + num);
      }
    }, 2000);
  });
  return p;
} // function接收reject（）


getNumber().then(function (resolve) {
  console.log('resolved');
  console.log(resolve);
}, function (reject) {
  console.log('rejected');
  console.log(reject);
}); //catch接收reject（）

getNumber().then(function (data) {
  console.log('resolved');
  console.log(data);
})["catch"](function (reason) {
  console.log('rejected');
  console.log(reason);
});

function addEs6(a, b, c) {
  var addAB = function addAB(a, b) {
    return a + b;
  };

  return addAB + c;
  ß;
}

var testArray = [1, 2, 3];
console.log(addEs6.apply(void 0, testArray));
[1, 2, 3].map(function (n) {
  return n + 1;
});
