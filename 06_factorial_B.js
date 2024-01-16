var factorialofWordsCount=function(count) {
  if(count==0  && count==1  ){
    return 1;    
 } 
 if (count==null || count==undefined) {
    console.log(`Invalid Input  : ${count}`);
    return count;  
 }
 let a=count.split(" ");
 console.log( `Word Count is ${a.length}`);

 let result = 1;
    for(let index=a.length; index>=1; index--){
        result=result*index;
    }
  
   //  console.log(`Factorial of number is ${result}`);
    return result ;
       
}
var a=factorialofWordsCount(`Revision is the mother of Success`);
console.log(`Factorial of number is : ${a}`);
console.log("-----------------------------------------------------");
var b=factorialofWordsCount(`We never fail, we always learn, Mind it`);
console.log(`Factorial of number is : ${b}`);
console.log("-----------------------------------------------------");
var c=factorialofWordsCount("")
console.log(`Factorial of number is : ${c}`);
console.log("-----------------------------------------------------");
var d=factorialofWordsCount(`You Full name`)
console.log(`Factorial of number is : ${d}`);
console.log("-----------------------------------------------------");
var e=factorialofWordsCount(null)
console.log(e)
console.log("-----------------------------------------------------");