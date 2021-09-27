/*
* 请实现一个简单的事件机制，能够实现对事件的触发和监听。
如：EventEmitter.on(); EventEmitter.trigger();
* */

const EventEmiter = {
    on :function (type, handle) {
        // 创建一个缓存
        this.cache = {}
        console.log(this)
        // 判断是否有这个类型的事件
        if (this.cache[type]) {
            // 没有就创建一个
            this.cache[type] = handle
        }
        else {
            // 已经存在就加入
            this.cache[type].push(handle)
        }
    },
    trigger: function (type) {
        // 判断是否传入了参数，如果传入了就把它加入到一个数组中
        var params = arguments.length > 1 ? Array.prototype.slice.call(arguments, 1): [];
        if(this.cache[type]) {
            this.cache[type].forEach(item => {
                // 执行函数，并将参数传入
                item(params)
            })
        }
    }
}

function EventEmit() {
    var obj = {}
    var eventNames = []
    var pid = 0
    function on(eventName, callback) {
        if (eventName in obj) {
            obj[eventName].callbacks.push(callback)
        } else {
            obj[eventName] = {
                pid: pid++,
                callbacks: []
            }
            obj[eventName].callbacks.push(callback)
            eventNames.push(eventName)
        }
    }

    function trigger(eventName) {
        for (var i in obj) {
            if (i === eventName) {
                obj[eventName].callbacks.map(function (callback) {
                    callback()
                })
            }
        }
    }

    return {
        on: on,
        trigger: trigger
    }
}

var sub = new EventEmit()
sub.on('test', () => {
    console.log('work')
})

sub.trigger('test')
