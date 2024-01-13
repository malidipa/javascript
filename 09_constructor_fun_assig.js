console.log(
  "=========================================================================================================="
);


function Bank(BankName, location, ifscCode, branchCode) {
  this.BankName = BankName;
  this.location = location;
  this.ifscCode = ifscCode;
  this.branchCode = branchCode;
  this.show = function () {
    console.log(
      `bank detais is : bank Name: ${this.BankName},Location: ${this.location},IFSC_Code: ${this.ifscCode}, Branch_Code: ${this.branchCode}`
    );
  };
}
const yesBank = new Bank("Kotak", "pune", "yes10113", 112233);
yesBank.show();
//console.log(yesBank);

console.log("");
const sbiBank = new Bank("SBI", "Mumbai", "sbi10176", 445566);
sbiBank.show();     

console.log("");
const mahBank = new Bank("Maha", "latur", "maha77958", 411077);
mahBank.show()

console.log("");
const axisBank = new Bank("Axis", "Mumbai", "axis66552", 445001);
axisBank.show()

console.log(
  "========================================================================================================"
);
const pro=Bank.prototype.openTime = "9 AM IST";
Bank.prototype.closeTime = "6 PM IST";

console.log(
  `bank Name: ${sbiBank.BankName},  Bank Open Time : ${sbiBank.openTime}, and Close Time : ${sbiBank.closeTime}`
);
console.log("-------------------------------------------------------------------------------------------------");
console.log(
  `bank Name: ${axisBank.BankName}, Bank Open Time : ${axisBank.openTime}, and Close Time : ${axisBank.closeTime}`
);
console.log("-------------------------------------------------------------------------------------------------");
console.log(
  `bank Name: ${yesBank.BankName}, Branch_Code  : ${yesBank.branchCode}, Bank Open Time : ${yesBank.openTime}`
);
console.log("-------------------------------------------------------------------------------------------------");