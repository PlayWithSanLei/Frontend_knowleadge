// 立即执行
function debounce(fn, delay) {
    let timer = null;
    return function (...args) {
        if (timer) clearTimeout(timer)

        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay)
    }
}

// 非立即执行
function lDebounce(fn, delay=50, immediate) {
    let timer = null;
    return function (...args) {
        if (timer) clearTimeout(timer)

        if (immediate && !timer) {
            fn.apply(this, args)
        }
        
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay)
    }
}
