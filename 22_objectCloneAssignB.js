const employee_info ={
    emp_id: 27,
    emp_name:"John Doe",
    salary:{
        july_month:"40,0000INR",
        aug_month:"50,0000INR",
        jun_month:"65,0000INR",

    },
    address:{
        locality:{
            colony:"OM Vrindavan Society",
            street:"Kanch Pokli, 431202"

        },
    city:"Mumbai",
    state: "Maharashtra",
    country:"India",
    },
    mobiles:["+91 8600 3456 88","1800-4567 32","+91-9096 5678 77"]
}
console.log(`-------------------------------------------------------------------------------------------`);
console.log(employee_info);
console.log("---------------------------------Question => 5(a)-----------------------------------------------");
console.log("Locality Is : ", employee_info.address.locality)
console.table(employee_info.address);
console.log("---------------------------------Question => 5(b)----------------------------------------------------");
console.log(employee_info. mobiles);
console.log("----------------------------------Question => 6(a)-----------------------------------------------------");

const update = JSON.parse(JSON.stringify(employee_info));
update.salary.july_month = "80,0000INR";
//console.log(update.salary.july_month); 
//console.log(employee_info.salary.july_month);
console.table(update.salary);

console.log("---------------------------------Question => 6(b)------------------------------------------------------");
 const array= JSON.parse(JSON.stringify(employee_info));
 array.address.country="United Kingdom"
 //console.log(array.address.country);
 //console.log(employee_info.address.country);
 console.table(array.address);
 console.log("-----------------------------------Question => 6(c)----------------------------------------------------");

 
//console.table(employee_info);
 console.table(update);
 console.table(array);
 