/**
 * Constructor Function
 */
function IndoBank(accountHolderName, contact, bankBalance = 0) {
    this.accountHolderName = accountHolderName;
    this.accountNumber = Date.now();
    this.bankBalance = bankBalance;
    this.contact = contact;
}

const rani = new IndoBank("Rani Yadav", 9876543211, 1000);
const raja = new IndoBank("Raja Pal", 1234567899);

console.log(rani, raja);