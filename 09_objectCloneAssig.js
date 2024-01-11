console.log(
  "-----------------------------------step1( Created the object banksbi)----------------------------------------------------------------"
);

let bankSbi = {
  branchName: "Ravet SBI",
  branchManager: "Mr.vinayak",
  contactDetails: 8677958697,
  ISC_Code: "SBI00010113",
};
console.log(bankSbi);
console.log(
  "-----------------------------------step-2(Created the object bankLocation)-----------------------------------------------------------"
);
let bankLocation = {
  street: "Ravet",
  city: "pune",
  pin: 411033,
};
console.log(bankLocation);
console.log(
  "-----------------------------------step-3(Clone Object banksbi and bankLocation)-----------------------------------------------------"
);
const clone_object = Object.assign({}, bankSbi, bankLocation);
console.log(clone_object);
console.log(
  "-----------------------------------step-4(Create Object rateOfInterest )--------------------------------------------------------------"
);
let rateOfInterest = {
  homeLoanInterest: "10%",
  personalLoanInterest: "11%",
  dueiInterest: "15%",
};
console.log(rateOfInterest);
console.log(
  "-----------------------------------step-5(merge step 1,2 and 4 into new object sbiDetails) ------------------------------------------"
);

const sbiDetails = Object.assign({}, bankSbi, bankLocation, rateOfInterest);
console.table(sbiDetails);

console.log(
  "------------------------step-6(traverse object sbiDetails) ---------------------------"
);

for (const key in sbiDetails) {
  console.log(key, sbiDetails[key]);
}
