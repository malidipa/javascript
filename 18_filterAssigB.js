console.log("==================================Assignment :-2======================================");
class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
      this.emp_id = emp_id;
      this.emp_name = emp_name;
      this.emp_dept = emp_dept;
      this.emp_salary = emp_salary;
      this.emp_company = emp_company;
    }
    // getDetails() {
    //     console.log(
    //       `  Salary : ${this.emp_salary}, Company: ${this.emp_company}`
    //     );
    //   }
}
const emp_anil = new Employee(22, 'Anil', 'IT', 50000, 'TCS');
const emp_radha = new Employee(33, 'Radha', 'HR', 74000, 'Wipro');
const emp_rishi = new Employee(55, 'Rishi', 'Finance', 47000, 'TCS');
const emp_sonali = new Employee(66, 'Sonali', 'Finance', 45000, 'Infy');
const emp_monika = new Employee(77, 'Monika', 'IT', 40000, 'Wipro');
const emp_viny = new Employee(88, 'Vinayak', 'IT', 75000, 'TCS');
const emp_mahi = new Employee(99, 'Mahesh', 'HR', 85000, 'Infy');
const arrayEmployees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];



const arrayNamesTcs = arrayEmployees.filter((employee)=>{
  return employee.emp_company == "TCS" 
  
}).map((employee) => {
  employee.emp_name;
  console.log(`Company Name: ${employee.emp_company} And Employee name : ${employee.emp_name}`);
    
})
console.log("======================================================================================");
const a=arrayEmployees.filter((employee)=>{
  return employee.emp_company=="Wipro";
})
const sum=a.reduce((runningValue,values)=>{
  return runningValue+values.emp_salary
},0)
console.log(`Total salary of employee from company wipro : ${sum}`);
console.log(`Average salary of employee from company wipro ${sum/a.length}`);
console.log("===========================================================================================");
const b=arrayEmployees.filter((employee)=>{
  return employee.emp_company=="Wipro" || employee.emp_company=="Infy";
})
const sum2=b.reduce((runningValue,value)=>{
  return runningValue+value.emp_salary
},0)
console.log(`Total salary of employee from company wipro or Infy : ${sum2}`);
console.log(`Average salary of employee from company wipro or Infy ${sum2/b.length}`);
console.log("===========================================================================================");