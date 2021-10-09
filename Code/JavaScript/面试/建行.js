function get(m, k, arr) {
    for (let i = arr.length-1; i >= 0; i--) {
        var s = 0;
        for (let j = 0; j <= i; j++) {
            s += arr[j]
        }
        if (s % m === k) {
            return i
        }
    }
    return -1
}

console.log(get(6,0,[3,1,3,2,2,2]));
