console.log("============================Assignment-1====================================");
console.log("--------------------------------Step 1------------------------------------");
function squareOfWordLength(word){
    console.log(`given string is => ${word}`);
   var len=word.length;
   console.log(`length of the given string is = ${len}`);
   var result=len*len;
   console.log(`square of the length is = ${result}`);
   console.log("-------------------------------------------------------------------------");
}
squareOfWordLength("JavaScript");
squareOfWordLength("google Chrome");
squareOfWordLength("developer smart");
console.log("--------------------------------Step 2------------------------------------");
function findTheString(){
    var string="I Am Angular Developer";
    console.log(`given string is => ${string}`);
    console.log("")
    var result=string.length;
    console.log(`Length Of The Given String Is ${result}`);
    console.log("")
    var words = string.split(" ");
    console.log(`words in the string = ${words.length}`);
    console.log("")
    var div= result/4;
    console.log(`Divided Total No Words Is = ${div}`);
    console.log("")
    var multiple=result*4;
    console.log(`multiple Total No Words Is = ${multiple}`);
  
}

findTheString()

