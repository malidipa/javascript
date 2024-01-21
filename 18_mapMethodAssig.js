console.log("==================================Assignment :-1======================================");

const arrayNumbers=[20,11,40,25,23,11,9,31,60,2,19]
console.log(arrayNumbers);
const addOfEach=arrayNumbers.map((currenValue)=>{
 return currenValue+10;
})
console.log(`=> Step 1 : (Add 10 into each element ) `);
console.log(addOfEach);
console.log(`--------------------------------------------------------------------------------------`);
console.log(arrayNumbers);
const cubeOfEach=arrayNumbers.map((currenValue)=>{
    return currenValue*currenValue*currenValue;
})
console.log(`=> Step2 : (Cube the each array element )`)
console.log(cubeOfEach);
console.log(`--------------------------------------------------------------------------------------`);
console.log(arrayNumbers);
const indexOfEach=arrayNumbers.map((currenValue,index)=>{
    return currenValue+index;
})
console.log(`=> Step3 : (Add the index value into its corresponding each array element: )`)
console.log(indexOfEach);
console.log(`--------------------------------------------------------------------------------------`);