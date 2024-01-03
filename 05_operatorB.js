console.log("========================Assignment-2==============================");
function greaterNumber(num1,num2){

   var result=num1 > num2 ? num1:num2;
   console.log(`Given numbers are : ${num1} ${num2}`);
   console.log(`greater number between two numbers: ${result}`);
}
greaterNumber(10,-10);
console.log("----------------------------------------------------------------");
greaterNumber(800,899);
console.log("===============================-Q2-==============================");
function isEvenOrOddNum(num){
    var a = num;
    var result=a%2==0?`${a} is even`:`${a} is odd`;
    console.log(`the given no => ${result}`);
    return result;
}
isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(0);
isEvenOrOddNum(101);
console.log("========================-Q3-==============================");
function wordLength(value){
    var a = value.length;
    var result=a%2==0?`${a} = even`:`${a} = odd`;
    console.log(`the given Word Length is => ${result}` );
    return result;
}
wordLength("javaScript");
wordLength("developer");
wordLength("google");
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");