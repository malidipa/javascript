console.log("===========================step-1=========================");

var isEvenOrOdd = function (num) {
         if (num % 2 == 0) {
         var returnValue = "EVEN";
          } else {
         var returnValue = "ODD";
        }
    
     console.log(`* given value ${num} is  ${returnValue}`)
  };
  
   isEvenOrOdd(45);
   isEvenOrOdd(70);
   isEvenOrOdd(67);
   isEvenOrOdd(98)
   
  

  console.log("===========================step-2=========================");
var voteEligible = function(age){
        if (age>=18) {
            var returnValue=`You Are Eligible For Vote`;
        } else {
            var returnValue=`You Are Not Eligible For Vote`;
        }
        
     console.log(`* age${age} => ${returnValue}`)   
}
voteEligible(18);
voteEligible(20);
voteEligible(17);
voteEligible(40);
console.log("============================step-3=========================");
var Character = function (word){
if (word.length>10) {
  var returnValue="Given Word Length Is More Than 10";
   // console.log(`given word length is more than 10`);
}
 else{
  var returnValue="given Word Length Is Less Than 10";
 // console.log(`given word length is Less than 10`);
 }
 console.log(`* ${word} => ${returnValue}`);
 
}
Character("JavaScript-ES6");
Character("JavaScript");

console.log("=============================step-4=========================");
var string=function(word){
  if (word.startsWith("Java")){
    var returnValue=`Given Word Is Start With "Java"`
    //console.log(`Given Word Is Start With "Java"`);
  }else{
    var returnValue=`Given Word Is Not Start With "Java"`
    //console.log(`Given Word Is Not Start With "Java"`);
  }
  console.log(`* ${word} => ${returnValue}`);
 
}
string("JavaScrpt Language");
string("javaScrptLanguage");