function Parent() {
    this.prop1 = 'prop1'
}

function Child() {
    this.prop2 = 'prop2'
}

Child.prototype.prop3 = 'prop3'
Child.prototype = new Parent()
Child.prototype.prop4 = 'prop4'

var child1 = new Child();
for (var key in child1) {
    console.log(key)
}
