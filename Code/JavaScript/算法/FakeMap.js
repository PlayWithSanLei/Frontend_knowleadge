// map方法：arr.map((item, index, arr) => {}, this)

Array.prototype.fakeMap = function fakeMap(fn, context) {
    if(typeof fn !== 'function') {
        throw new TypeError(`${fn} is not a function`)
    }

    let arr = this
    let temp = []
    for (let i = 0; i < arr.length; i++) {
        // 迭代执行
        let res = fn.call(context, arr[i], i, arr)
        temp.push(res)
    }
    return temp
}

let arr = [1,2,3]

arr.fakeMap((item, index, arr) => {
    console.log(item + index)
})

console.log(arr.map((x, y) => {
    return x + y
}));


Array.prototype.Map = function Map(fn, context) {
    if (typeof fn !== 'function') {
        throw new TypeError(`${fn} is not a function`)
    }
    let arr = this
    let temp = []
    for (let i = 0; i < arr.length; i++) {
        let res = fn.call(context, arr[i], i, arr)
        temp.push(res)
    }
    return temp
}


console.log(arr.Map((x, y, z) => {
    console.log(z)
    console.log(y)
    return x + y
}));
