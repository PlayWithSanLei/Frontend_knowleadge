// setTimeout(function () {
//     console.log("1");
// },0);
//
// async function async1() {
//     console.log("2");
//     const data = await async2();
//     console.log("3");
//     return data;
// }
//
// async function async2() {
//     return new Promise(resolve => {
//         console.log("4");
//         resolve("async的结果");
//     }).then(data => {
//         console.log("5");
//         return data;
//     });
// }
//
// async1().then(data => {
//     console.log("6");
//     console.log(data);
// });
//
// new Promise(function (resolve) {
//     console.log("7");
// }).then(function () {
//     console.log("8");
// })
//


// function a() {
//     b();
//     console.log('a')
// }
//
// function b() {
//     console.log('b')
// }
//
// a()

// function a() {
//     b();
//     console.log('a')
// }
//
// function b() {
//     console.log('b')
//     setTimeout(function () {
//         console.log('c')
//     },0)
// }
//
// a()

// console.log('start')
//
// setTimeout(() => {
//     console.log('setTimeout')
// }, 0)
//
// Promise.resolve().then(() => {
//     console.log('promise1')
// }).then(() => {
//     console.log('promise2')
// })
// console.log('end')

// async function async1() {
//     console.log('async1 start');
//     await async2();
//     console.log('async1 end');
// }
// async function async2() {
//     console.log('async2');
// }
// console.log('script start');
// setTimeout(function() {
//     console.log('setTimeout');
// }, 0)
// async1();
// new Promise(function(resolve) {
//     console.log('promise1');
//     resolve();
// }).then(function() {
//     console.log('promise2');
// });
// console.log('script end');

// console.log('start')
// setTimeout(() => {
//     console.log('children2');
//     Promise.resolve().then(() => {
//         console.log('children3')
//     })
// }, 0)
//
// new Promise((resolve, reject) => {
//     console.log('children4')
//     setTimeout(() => {
//         console.log('children5')
//         resolve('children6')
//     },0)
// }).then(res => {
//     console.log('children7')
//     setTimeout(() => {
//         console.log(res)
//     }, 0)
// })

// const p = function() {
//     return new Promise((resolve, reject) => {
//         const p1 = new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(1)
//             }, 0)
//             resolve(2)
//         })
//         p1.then((res) => {
//             console.log(res);
//         })
//         console.log(3);
//         resolve(4);
//     })
// }
//
//
// p().then((res) => {
//     console.log(res);
// })
// console.log('end');

const p = function() {
    return new Promise((resolve, reject) => {
        const p1 = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(1)
            }, 0)
        })
        p1.then((res) => {
            console.log(res);
        })
        console.log(3);
        resolve(4);
    })
}


p().then((res) => {
    console.log(res);
})
console.log('end');
