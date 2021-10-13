function fun(n, o) {
    console.log(o);
    return {
        fun: function (m) {
            return fun(m, n)
        }
    }
}

var a = fun(2)
a.fun(1)
a.fun(2)
