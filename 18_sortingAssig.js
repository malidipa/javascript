const arrayRollNumbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45]
console.log(`given array is => [${arrayRollNumbers}]`);
console.log("---------------------------------------step:-1---------------------------------------------------");
const reverseArray = arrayRollNumbers.reverse()
console.log(`Reverse the given array => [${reverseArray}]`);
console.log("---------------------------------------step:-2---------------------------------------------------");
const sortMethod = arrayRollNumbers.sort();
console.log(`use sort method without passing any argument => [${sortMethod}]`);
console.log("---------------------------------------step:-3---------------------------------------------------");
const ascendingArray = sortMethod.sort((a,b)=>{
    //ascending order
    return a>b ? 1 : -1; //ternary operator (?:)
});
console.log(`sort array in ascending array => [${ascendingArray}]`);
console.log("---------------------------------------step:-4---------------------------------------------------");
console.log(`the greatest number in an array is => [${ascendingArray[ascendingArray.length-1]}]`);
console.log("---------------------------------------step:-5---------------------------------------------------");
console.log(`the smallest number in an array is => [${ascendingArray[0]}]`);
console.log("---------------------------------------step:-6---------------------------------------------------");
const newArray = [...new Set(arrayRollNumbers)];
console.log(`Remove duplicates from array => [${newArray}]`);




