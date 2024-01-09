
console.log("=====================================step1=======================");
 function reverseString(arg){
    let result=""
    for (let index=arg.length-1 ; index >0 ; index-- ){

        //result=result.concat(word.charAt(index));
        let char=arg.charAt(index);
        if (char!=" ") {
          result=result+arg.charAt(index);
          //console.log(arg.charAt(index));
          
        }
        }
        console.log(`* given string is :${arg}`);
        console.log(`> reverse string is: ${result}`);
       console.log("--------------------------------------------------------------");

}
reverseString("Hard work always pays back")
 reverseString("Soon I will be UI IT Champ");



