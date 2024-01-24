const listHeadingElement = document.querySelector('#listHeading');
console.log(listHeadingElement);
listHeadingElement.style.color = 'red';

const heading = document.querySelector('#color');
console.log(heading);
heading.style.color = 'green';


console.log(`========== Removing a node ==================`);
const listEle = document.querySelector('#list');
//console.log(listEle);
const angularElement = document.querySelector('#angular');
console.log(angularElement);
listEle.removeChild(angularElement);
