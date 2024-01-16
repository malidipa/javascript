let factorialOfNum=function(num) {
    if(num==0  && num==1){
       return 1;  
       
    } 

   if ( num<0  || num==null || num==undefined) {
       console.log(`The Factorial of number ${num} : Invalid Input`);
       return num ;
       
    }
          

    let result = 1;
    for(let index=1; index<=num; index++){
        result=result*index;
    }
    console.log(`Factorial of number : ${num} is ${result}`);
    return result ;
    
   
}

factorialOfNum(5);
factorialOfNum(3);
factorialOfNum(8);
factorialOfNum(9);
factorialOfNum(0);
factorialOfNum(null);
factorialOfNum(undefined);
