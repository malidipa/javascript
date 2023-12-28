console.log("========================Assignment:-01========================");
console.log("---------Function with no argoments and no return  type--------");
function myName() {
  console.log("----I Am An Indian----");
}
myName();

function myAddress() {
  console.log("----I Live In Pune----");
}
myAddress();
console.log("========================Step:-02========================");
function personalDetails(firstName, lastName, collegeName) {
  console.log("First Name =>", firstName);
  console.log("Last Name =>", lastName);
  console.log("College Name =>", collegeName);
}
personalDetails("Dipali", "Mali", "Pratibha College");
console.log("========================Step:-03========================");
function swapValues(val1, val2) {
  console.log("Before Swap =>", val1, val2);
  var temp = val1;
  val1 = val2;
  val2 = temp;
  console.log("After Swap =>", val1, val2);
}
swapValues("Virat", "Anushka");
console.log("-------------------------------------------------------");
swapValues("1000", "2000");
console.log("========================Step:-04========================");
function addThreeValues(num1, num2, num3) {
  var add = num1 + num2 + num3;
  return add;
}
var addition = addThreeValues(10.23, 600, 40);
console.log("Given Numbers are =>10.23,600,40");
console.log("Addition Of Number =>", addition);
console.log("-------------------------------------------------------");
var greetings = addThreeValues("Hello", "Good", "Morning");
console.log("Given Values are =>", "Hello", " Good", "Morning");
console.log("Addition Of Values =>", greetings);
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");