class FunClass {
    count = 0
    fun1 = () => {
        return () => {
            this.count += 1;
            var tempCount = this.count;
            setTimeout(() => {
                if (tempCount === this.count) {
                    console.log('good')
                }
                else {
                    console.log('bad', this.count)
                }
            }, 2000)
        }
    }
}

const obj = new FunClass()
const fun1 = obj.fun1()

setTimeout(() => {
    fun1();
}, 1000)

new Promise((resolve) => {
    fun1();
    resolve()
})

fun1()

fun1()

const fo = '123'
console.log(fo.__pr)
