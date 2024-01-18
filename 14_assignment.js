console.log("=================================Step:-1===========================================");
const arrayNum=[11,3,4,11,4,7,3];
Array.prototype.unique=function() {
 let unique=[];
   for (let index = 0; index <this.length; index++) {
    const element = this[index];
    if(unique.indexOf(element)<0)
        unique.push(element)
   }
   return unique;
  }


console.log(arrayNum.unique());

console.log("=================================Step:-2===============================================");

function Capitalize(str) {
  var spl = str.split(" "); 
  var words = [];
  for (let i = 0; i < spl.length; i++) {
    //For every word
    for (let j = 0; j < spl[i].length; j++) {
      //For every letter in each word
      var word = spl[i];
      var size = spl[i].length;
      var firstLetterCapital = word.replace(word[0], word[0].toUpperCase()); //Creates new array
      var LastLetterCapital = firstLetterCapital.replace(
        word[size - 1],
        word[size - 1].toUpperCase()
      );
    }
    words.push(LastLetterCapital);
  }
  console.log(words.join(" "));
}

Capitalize("how are you mate");
  
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
