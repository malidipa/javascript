arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11]
console.log(`* given array is [${arrayNumbers}]`);
console.log(`------------------------------Step1---------------------------------------------`);
console.log(`1 total length available is = ${arrayNumbers.length}`);
console.log(`------------------------------Step2---------------------------------------------`);
console.log(`2 First element in the array is = ${arrayNumbers[0]} Last element in the array is = ${arrayNumbers[arrayNumbers.length-1]}`);
console.log(`------------------------------Step3---------------------------------------------`);
console.log(`3 third last element is = ${arrayNumbers[arrayNumbers.length-3]}`);
console.log(`------------------------------Step4---------------------------------------------`);
const even=[];
for (const num of arrayNumbers) {
    if (num % 2 == 0) {
       even.push(num);
       
    }
}
console.log(`4 Even numbers = [${even}]`);
console.log(`------------------------------Step5---------------------------------------------`);
const odd=[];
for (const num of arrayNumbers) {
    if (num % 2 == 1) {
       odd.push(num);  
    }
}
console.log(`5 Odd numbers = [${odd}] `);
console.log(`------------------------------Step6---------------------------------------------`);
let even1=[]
let sum=0
for (const index in arrayNumbers) {
    if (index%2==0) {
      even1.push(arrayNumbers[index]);
        sum=sum+arrayNumbers[index];
    }
}
console.log(`6 Positioned element is = [${even1}]`)
console.log(`--> Sum of the  even positioned element is = ${sum} `)
console.log(`------------------------------Step7---------------------------------------------`);
let odd1=[]
let sum1=0
for (const index in arrayNumbers) {
    if (index%2==1) {
      odd1.push(arrayNumbers[index]);
        sum1=sum1+arrayNumbers[index];
    }
}
console.log(`7 Positioned element is = [${odd1}]`)
console.log(`--> Sum of the odd positioned element is = ${sum1} `)
console.log(`------------------------------Step8---------------------------------------------`);
let sum3=0
for(const index in arrayNumbers) {
   sum3=sum3+arrayNumbers[index];
}console.log(`8 given array is [${arrayNumbers}]`);
console.log(`--> sum of all arrayelement is = ${sum3}`);
console.log(`------------------------------Step9---------------------------------------------`);
let multipleOf = [];
for (const index of arrayNumbers) {
    if (index %5 == 0 ) {
        multipleOf.push(index);
        
      }
    }
    console.log(`9 The numbers which are multiple of 5 = [${multipleOf}]`)
console.log(`------------------------------Step10---------------------------------------------`);
let givenNo = arrayNumbers.includes(115)
console.log(`10 Is number 115 available in arrayNumbers? = ${givenNo}`);
console.log(`------------------------------Step11---------------------------------------------`);
let givenNo1 = arrayNumbers.includes(23)
console.log(`11 Is number 23 available in arrayNumbers? = ${givenNo1}`);
console.log(`------------------------------Step12---------------------------------------------`);
let insertion = arrayNumbers.splice(3,0,55,66);
console.log(`12 Insert Number 55,66 at index 3 = [${arrayNumbers}]`);
console.log(`------------------------------Step13---------------------------------------------`);
var removedElements = arrayNumbers.splice(4,3);
console.log(`13 delete 3 elements starting from index 4 = [${arrayNumbers}]`);
console.log(`xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`);
