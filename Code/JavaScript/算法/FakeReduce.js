let arr = [1, 2, 3, 4]
console.log(arr.reduce((x, y) => {
    return x + y
}, 10));

Array.prototype.fakeReduce = function fakeReduce(fn, base) {
    let initialArr = this
    let arr = initialArr.concat() // 得到副本
    if (base) arr.unshift(base)  // 当存在归并基础值的参数时，将其从数组首部推入
    let index
    while (arr.length > 2) {
        index = initialArr.length - arr.length + 1
        let newValue = fn.call(null, arr[0], arr[1], index, initialArr);
        arr.splice(0, 2)
        arr.unshift(newValue)
    }
    index += 1
    return fn.call(null, arr[0], arr[1], index, initialArr)
}


console.log(arr.fakeReduce((x, y, z, a) => {
    return x + y
}, 10));

Array.prototype.Reduce = function Reduce(fn, base) {
    if (typeof fn !== 'function') {
        throw new TypeError(`${fn} is not a function`)
    }

    let initArr = this
    let arr = initArr.concat()
    if (base) {
        arr.unshift(base)
    }
    let index
    while (arr.length > 2) {
        index = initArr.length - arr.length + 1
        let res = fn.call(null, arr[0], arr[1], index, initArr)
        arr.splice(0, 2)
        arr.unshift(res)
    }
    index += 1
    return fn.call(null, arr[0], arr[1], index, initArr)
}
