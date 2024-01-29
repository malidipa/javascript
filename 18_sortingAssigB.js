class Employee {
  constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;
  }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");
const arrayEmployees = [emp_anil,emp_radha, emp_rishi,emp_sonali, emp_monika ,emp_viny,emp_mahi,];
console.log("=============================================step:1===============================================================");
console.log("sort the array in descending order of employee ID");
console.log("-----------------------------------------------------------------------------------------");
arrayEmployees.sort((a, b) => {
  return a.id >= b.id ? 1 : -1;
});
arrayEmployees.forEach((array) => {
  console.log(
    `ID : ${array.emp_id}   Name : ${array.emp_name}   Department : ${array.emp_dept}`
  );
});
console.log("=============================================step:2===============================================================");
console.log("sort the array in ascending order of employee department");
console.log("-----------------------------------------------------------------------------------------");
const ascending = arrayEmployees.sort((a,b)=>{
    return a.emp_dept > b.emp_dept ? 1 : -1;
})

arrayEmployees.forEach((ascending)=>{
    
        console.log(`Employee_Id : ${ascending.emp_id},  Department : ${ascending.emp_dept},   Company : ${ascending.emp_company}`);
    }
);
console.log("=============================================step:3===============================================================");
console.log("sort the array in descending order of employee salary");
console.log("-----------------------------------------------------------------------------------------");
const descending = arrayEmployees.sort((a,b)=>{
    return a.emp_salary > b.emp_salary ? -1 : 1;
 })
 //.map((employee)=>{
//     return employee.emp_salary

// });
arrayEmployees.forEach((descending)=>{
        console.log(`Employee Name : ${descending.emp_name},   Salary : ${descending.emp_salary},   Company : ${descending.emp_company}`);
    }
);
 console.log("============================================================================================"); 