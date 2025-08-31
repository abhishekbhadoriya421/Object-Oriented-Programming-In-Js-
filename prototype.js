function BankAccount(name, contact) {
    let _balance = 0;
    this.name = name;
    this.contact = contact
}

BankAccount.prototype.deposit = function (amount) {
    this._balance = amount
}


rani = new BankAccount('rani', 1234567890);
console.log(rani.__proto__);
console.log(BankAccount);

/**
 * Proto points to the object of base class prototype
 */
console.log(rani.__proto__ === BankAccount.prototype.__proto__)

Object.prototype.withdrawal = function (amount) {
    console.log('hello From Object');
}
rani = new BankAccount('rani', 1234567890);
rani.withdrawal(1000)

console.log(rani);







