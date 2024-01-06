
console.log("===========================Step-1=======================");
function maleMarriageEligibility(gender,age,boyName) {
  var result=gender=="Male" && age>=21 ? `Hey ${boyName} you are eligible for Marriage `:
     `You are not eligible for Marriage.`;
     console.log("*",result);
}
maleMarriageEligibility("Male",25,"Billgates");
maleMarriageEligibility("Male",17,"Stew Jobs");

console.log("===========================Step-2=======================");
function femaleMarriageEligibility(gender,age,girlName) {
    var result=gender=="FeMale" && age>=18 ? `Hey ${girlName} you are eligible for Marriage `:
       `You are not eligible for Marriage.`;
       console.log("*",result);
  }
  femaleMarriageEligibility("FeMale",16,"Jenifer");
  femaleMarriageEligibility("FeMale",27,"Malinda Gates");