Array.prototype.fakeFilter = function fakeFilter(fn, context) {
    if (typeof fn !== 'function') {
        throw new TypeError(`${fn} is not a function`)
    }

    let arr = this
    let temp = []
    for (let i = 0; i < arr.length; i++) {
        let res = fn.call(context, arr[i], i, arr)
        if (res) temp.push(arr[i])
    }
    return temp
}

let arr = [1, 2, 3, 4, 5]

console.log(arr.fakeFilter((s, x, y) => {
    return s  > 3
}));


Array.prototype.Filter = function Filter(fn, context) {
    if (typeof fn !== 'function') {
        throw new TypeError(`${fn} is not a function`)
    }

    let arr = this
    let temp = []
    for (let i = 0; i < arr.length; i++) {
        let res = fn.call(context, arr[i], i, arr)
        if (res) temp.push(arr[i])
    }
    return temp
}

console.log(arr.Filter(x => {
    return x > 2
}));
