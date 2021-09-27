console.log(['1', '2', '3'].map(parseInt));
// [1, NaN, NaN]

function Foo() {
    getName = function () {
        console.log(1)
    }
    return this
}

Foo.getName = function () {
    console.log(2)
}

Foo.prototype.getName = function () {
    console.log(3)
}

var getName = function () {
    console.log(4)
}

function getName() {
    console.log(5)
}

Foo.getName()
getName()
new Foo().getName()


console.log(1)
setTimeout(function () {
    console.log(2)
},0)

new Promise(resolve => {
    console.log(3)
    resolve()
}).then(() => {
    console.log(4)
})

console.log(5)
