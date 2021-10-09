function F() {
    F.a = function () {
        console.log(1)
    }
    this.a = function () {
        console.log(2)
    }
}

F.prototype.a = function () {
    console.log(3)
}

F.a = function () {
    console.log(4)
}

F.a()

const f = new F()

f.a()

F.a()
