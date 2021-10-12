function throttle(fn, delay = 50) {
    let previous = 0;
    return function (...args) {
        let now = +new Date()
        if (now - previous > delay) {
            previous = now
            fn.apply(this, args)
        }
    }
}


function Throttle(fn, delay = 50) {
    let timeout;
    return function (...args) {
        if (!timeout) {
            timeout = setTimeout(() => {
                fn.apply(this, args)
            }, delay)
        }
    }
}
