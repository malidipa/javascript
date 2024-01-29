console.log(
  "Step:-1 (Shallow Clone Using  Spread Operator)"
);
console.log("---------------------------------------------------------------");
const arrayNums = [20, 3, 4, 56, 90, 400, 49];
const array = [...arrayNums];
arrayNums.push(55,60);
console.log(`Given Array is: [${array}]`);
console.log(`cloning the arraay is :[${arrayNums}]`);
console.log("-----------------------------------------------------------------");
console.log(
  "Step:-2 (Deep Clone Using  Spread Operator)"
);
console.log("----------------------------------------------------------------");
const array2 = [...arrayNums];
arrayNums.splice(4,0,10)
arrayNums.splice(5,0,25)
console.log(`Given Array is: [${array2}]`);
console.log("clone array is : ",arrayNums);
console.log(
  "------------------------------------------------------------------------"
);
console.log(
  "Step:-3 (Merge And Concat array Using Spread Operator)"
);
console.log("----------------------------------------------------------------");
const arrayEven = [2, 30, 14, 8, ];
const mergeArray=[...arrayEven,...arrayNums]
// let result=[arrayEven,...arrayNums]
console.log(`Merge array is : [${mergeArray}]`);
 