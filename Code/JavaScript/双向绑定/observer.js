function defineReactive(data, key, val) {
    observe(val)
    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        get: function () {
            return val;
        },
        set: function (newVal) {
            val = newVal;
            console.log('属性' + key + '已经被监听了，现在值为：' + newVal.toString())
        }
    })
}

function observe(data) {
    if (!data || typeof data !== 'object') {
        return;
    }

    Object.keys(data).forEach(key => {
        defineReactive(data, key, data[key])
    })
}
