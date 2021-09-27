function deepCopy(newObj, oldObj) {
    for (let i in oldObj) {
        let item = oldObj[i]

        if (item instanceof Array) {
            newObj[i] = []
            deepCopy(newObj[i], item)
        } else if (item instanceof Object) {
            newObj[i] = {}
            deepCopy(newObj[i], item)
        } else {
            newObj[i] = item
        }
    }
}

