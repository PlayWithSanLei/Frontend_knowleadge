function showMoney() {
    return this.money
}

var personA = new Object;
var personB = new Object;

personA.money = '100'
personB.money = '150'

personA.showMoney = showMoney;
personB.showMoney = showMoney;

console.log(personA.showMoney())
console.log(personB.showMoney())
