console.log("------------------------------- Assig:-A ------------------------------------------------");
 const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601]
console.log("* Step:1 : (Array Element With Index)");
arrayNumbers.forEach((element,index)=>{
//console.log([element,index]);
//console.log(element,index)
console.log(`Element is : ${element} Its Index : ${index} `);
});


console.log("----------------------------------------------------------------------------------------------------");
console.log("* Step:2 : (Find The Positive Number)");
console.log("");
let positive=[]
arrayNumbers.forEach( (element) => {
    if (element>0) {
        positive.push(element)
    }
} );
console.log(positive);
console.log("----------------------------------------------------------------------------------------------------");
console.log("* Step:3 : (Find The Negative Number)");
console.log("");
const aaray=[]
arrayNumbers.forEach( (element) => {
    if (element<0) {
        aaray.push(element)

    }
} );
    console.log(aaray);
    console.log("----------------------------------------------------------------------------------------------------");
    console.log("* Step:4 : (Find The Even Number)");
    console.log("");

let even=[]
arrayNumbers.forEach( ( element) => {
    if (element%2==0) {
        even.push(element)
    }
})
console.log(even);
console.log("-----------------------------------------------------------------------------------------");
console.log("* Step:5 : (find Sum Of All Elements)");
console.log("");

let totalSlary=0
arrayNumbers.forEach( ( element) => {
  totalSlary=totalSlary+ element;
});
console.log(`Total Sum Of Salary ${totalSlary}`);
console.log("-----------------------------------------------------------------------------------------");
console.log("* Step:6 : (Find The Only Even Index Values )");
console.log("");

let ans=[]
arrayNumbers.forEach((element,index)=>{
    if (index%2==0) {
        ans.push(element);
    }
})
console.log(ans);
