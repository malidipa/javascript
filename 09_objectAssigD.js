console.log(`=========================================Assignment on Object========================================================`);

let professor = {
    name: "Prof.Lee",
    education: "BE",
    domain: "Information Technology",
    designation:"HOD",
    age: 29,
   degrees:{
        engineering: "CSC",
        PHD: "Adv Computing",
        Msc:"Computer Science",
    },
    Certificates:["Hacker Rank Perticipation","Certificate in IFE course","Certificate in Adv Programming"]

}
console.log(`1. Add five properties =>`);
console.log(professor);
console.log(`==============================================step -2=================================================================`);
console.log(`2. Nested object degrees => `);
console.log (professor.degrees);
console.log(`==============================================step -3=================================================================`);
console.log(`3. Add one array certificates =>`);
console.log(professor.Certificates)
console.log(`==============================================step -4=================================================================`);
professor.totalExperience="14 years"
console.log(`4. Add new property Total Experience => ${professor.totalExperience}`);
console.log(`==============================================step -5==================================================================`);
professor.age=30;
console.log(`5. modify Existing property age => 30 `);
console.log(professor);
console.log(`==============================================step -6==================================================================`);
professor.Certificates.splice(2,0,"Oracle Certified")
console.log(`6. Add one new certificate-->Oracle Certified at the 2nd index:`)
console.log(professor.Certificates);
console.log(`==============================================step -7==================================================================`);
const lastElement=professor.Certificates[professor.Certificates.length-1]
console.log(`7. last element of the certificates => ${lastElement}`)
console.log(`==============================================step -8==================================================================`);
console.log(`8. complete object : `);
console.log(professor);
console.log(`==============================================step -8==================================================================`);
console.log(`9. Traversing array using for of loop =>`);
for (const iterator of professor.Certificates) {
    console.log(iterator);
    
}
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");