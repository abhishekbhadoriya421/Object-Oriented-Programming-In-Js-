/**
 * Constructor Function
 */
function IndoBank(accountHolderName, contact) {
    let _balance = 0; // Creating Private Veriable using Closures
    this.accountHolderName = accountHolderName;
    this.accountNumber = Date.now();
    this.contact = contact;

    this.deposit = (ammont) => {
        _balance += ammont;
    }

    this.checkBalance = () => {
        return _balance;
    }

    this.withdrawal = (amount) => {
        if (amount > _balance) {
            throw new Error("Your Account Balance Is Lower Than Withdrawal Ammount");
        } else {
            _balance -= amount
        }
        console.log(`You Have Successfully Withdrawal ${amount} Rupees. Please Collect Of Money`);
    }
}

const rani = new IndoBank("Rani Yadav", 9876543211);
const raja = new IndoBank("Raja Pal", 1234567899);
rani.deposit(500);
// console.log(rani.checkBalance(), raja.checkBalance());

raja._balance = 100;
// console.log(raja.checkBalance())
raja.deposit(10000);

console.log("Rani: " + rani.checkBalance(), ", Raja: " + raja.checkBalance());

raja.withdrawal(1000);
console.log("Rani: " + rani.checkBalance(), ", Raja: " + raja.checkBalance());

// rani.withdrawal(1000);

console.log("Rani: " + rani.checkBalance(), ", Raja: " + raja.checkBalance());
