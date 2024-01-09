
 
 function vowels() {    
 let s1="I am very good IT Developer";
 let vowelsCount=0;
 for (let index=0;index <s1.length;index++ ){
     let char=s1.charAt(index).toLowerCase();
 if (char =='a'|| char =='e' ||char =='i'|| char =='o'||  char =='u' ) {
     vowelsCount=vowelsCount+1;
     
 }
 
 }
 console.log(`* Vowels Count Is =>  ${vowelsCount}`);
 
}
vowels()
console.log(`--------------------------------------------------------------------`);

function value() {
   let sum = 0;
//  1*1*1+2*2*2*+3*3*3+4*4*4+5*5*5
   for (let index = 1; index <=5; index++) {
       sum = sum+index*index*index ; 
   }

   console.log(`* The Sum Of Cube Of Number Is => ${sum}`); 
   
}
value()
console.log(`--------------------------------------------------------------------`);

function oddPositionChar(arg) {
    console.log(`* given string is: ${arg}`);
    console.log(`> Odd Position Character Of The Given String=> `);
    for (let index=0;index <arg.length;index++ ){
    let char=arg.charAt(index);
    if (index%2==1 && char!=" ") {
        console.log(arg.charAt(index));
    }
    } 
   
    console.log(`--------------------------------------------------------------------`);
}
oddPositionChar("Hard work always pays back")
oddPositionChar("Soon I will be UI IT Champ");



