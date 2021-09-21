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

console.log('start')

setTimeout(() => {
    console.log('setTimeout')
}, 0)

Promise.resolve().then(() => {
    console.log('promise1')
}).then(() => {
    console.log('promise2')
})
console.log('end')
