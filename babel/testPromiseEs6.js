function getNumber() {
    var p = new Promise((resolve, reject) => {
        //做一些异步操作
        setTimeout(() => {
            let num = Math.ceil(Math.random() * 10); //生成1-10的随机数
            if (num <= 5) {
                resolve(num);
            }
            else {
                reject('数字太大了' + num);
            }
        }, 2000);
    });
    return p;
}

// function接收reject（）
getNumber()
    .then(
        (resolve) => {
            console.log('resolved');
            console.log(resolve);
        },
        (reject) => {
            console.log('rejected');
            console.log(reject);
        }
    );

//catch接收reject（）
getNumber()
    .then((data) => {
        console.log('resolved');
        console.log(data);
    })
    .catch((reason) => {
        console.log('rejected');
        console.log(reason);
    });

function addEs6(a, b, c) {
    var addAB = (a, b) => a + b;
    return addAB + c;ß
}

const testArray = [1, 2, 3];
console.log(addEs6(...testArray));

[1, 2, 3].map((n) => n + 1);