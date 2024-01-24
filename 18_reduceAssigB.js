class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
      this.emp_id = emp_id;
      this.emp_name = emp_name;
      this.emp_dept = emp_dept;
      this.emp_salary = emp_salary;
      this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, 'Anil', 'IT', 50000, 'TCS');
const emp_radha = new Employee(33, 'Radha', 'HR', 74000, 'Wipro');
const emp_rishi = new Employee(55, 'Rishi', 'Finance', 47000, 'TCS');
const emp_sonali = new Employee(66, 'Sonali', 'Finance', 45000, 'Infy');
const emp_monika = new Employee(77, 'Monika', 'IT', 40000, 'Wipro');
const emp_viny = new Employee(88, 'Vinayak', 'IT', 75000, 'TCS');
const emp_mahi = new Employee(99, 'Mahesh', 'HR', 85000, 'Infy');
const arrayEmployees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];
console.log("* Step1 : (Find all Elployees From 'Wipr' Company)");
console.log("--------------------------------------------------------------------------------------");
const array = arrayEmployees.filter((employee)=>{
    return employee.emp_company == "Wipro" 
    
  }).forEach((employee) => {
   // employee.emp_name;
    console.log(`Company Name: ${employee.emp_company} And Employee name : ${employee.emp_name}`);
      
  })
  console.log("======================================================================================");
  console.log("* Step2 : (Find all Elployees From 'IT' or 'HR' Company)");
  console.log("------------------------------------------------------------------------------------");
  const array1 = arrayEmployees.filter((employee)=>{
    return employee.emp_dept == "HR" || employee.emp_dept == "IT"
    
  }).forEach((employee) => {
    employee.emp_name;
    console.log(`Employee Department : ${employee.emp_dept} And Employee name : ${employee.emp_name}`);
      
  })
  console.log("======================================================================================");
  console.log("* Step3 : (Find  Elployees Whose emp id's greater than 50)");
  console.log("------------------------------------------------------------------------------------");
  const array2 = arrayEmployees.filter((employee)=>{
    return employee.emp_id > 50 
    
  }).forEach((employee) => {
   // employee.emp_name;
    console.log(`Employee ID : ${employee.emp_id} And Employee name : ${employee.emp_name}`);
      
  })
  console.log("======================================================================================");
  console.log("* Step4 : (Find all Elployees Whose Nmae Start With 'A' or 'v' or 'M')");
  console.log("------------------------------------------------------------------------------------");
  const array3 = arrayEmployees.filter((employee)=>{
    return employee.emp_name.startsWith('A') ||employee.emp_name.startsWith('V') ||employee.emp_name.startsWith("M")
    
  }).forEach((employee) => {
    //employee.emp_name;
    console.log(` Employee name : ${employee.emp_name}`);
      
  })
  console.log("======================================================================================");
  console.log("* Step5 : (Find The  Average Salary For All Employees Department)");
  console.log("------------------------------------------------------------------------------------");
  const sum=arrayEmployees.reduce((runningValue,values)=>{
    return runningValue+values.emp_salary
  },0)
  console.log(`Total salary of employee for all department : ${sum}`);
  console.log(`Average salary of employee for all department : ${sum/arrayEmployees.length}`);
  console.log("======================================================================================");
  console.log("* Step6 : (Find The Average Salary For 'IT' Department )");
  console.log("------------------------------------------------------------------------------------");
  const array4 = arrayEmployees.filter((employee)=>{
    return  employee.emp_dept == "IT" 
    
  })
  
  const sum1=array4.reduce((runningValue,values)=>{
    return runningValue+values.emp_salary
  },0)
  console.log(`Total salary of employee for IT department : ${sum1}`);
  console.log(`Average salary of employee for IT department : ${sum1/array4.length}`);
  console.log("======================================================================================");
  
