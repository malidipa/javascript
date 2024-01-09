console.log("========================================Array Assignments-1===============================================================");
const fruits_seasonal=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`* Given Array is: [${fruits_seasonal}]`);
console.log(`1 First element in the array is ${fruits_seasonal[0]} and Last element in the array is ${fruits_seasonal[fruits_seasonal.length-1]}`);
console.log("========================================step-2==========================================================================");
fruits_seasonal.unshift("Papaya")
console.log(`2 Add element "papaya" before Banana: [${fruits_seasonal}] `);//starting index to other index
console.log("=========================================step-3===========================================================================");
fruits_seasonal.splice(4,1)
console.log(`3 Removing element Mango: [${fruits_seasonal}] `);
console.log("========================================step-4============================================================================");
fruits_seasonal.push ("Pineapple");
console.log(`4 Add element "Pineapple" last position: [${fruits_seasonal}] `)
console.log("=========================================step-5===========================================================================");
fruits_seasonal.splice(4,0,"Dragon Fruit")
console.log(`5 Add element "Dragon Fruit" before "Water Mellon": [${fruits_seasonal}] `);
console.log("==========================================step-6===========================================================================");
fruits_seasonal.splice(2,1,"Kiwi")
console.log(`6 Replace an element "Orange" with "Kiwi: [${fruits_seasonal}] `);
console.log("==========================================step-7============================================================================");
 const a=fruits_seasonal.slice(1,4)
console.log(`7 Log The Element String From Index 1 to 4 : [${a}] `);
console.log("==========================================step-8=============================================================================");
const b=fruits_seasonal.slice(fruits_seasonal.length-3);
console.log(`7 Log The Element String From Index 1 to 4 : [${b}] `);
console.log("============================================================================================================================");



