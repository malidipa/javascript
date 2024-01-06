
var  MarriageEligibility=function(gender,age) {
    if(gender=="Male" && age>=21){
        var returnValue=`${gender} age ${age} => is Eligible For Marriage`
    }
    else{
        if(gender=="Female" && age >=18){
         var returnValue=`${gender} age ${age} => is Eligible For Marriage`
        }
        else{
        var returnValue=`${gender} age ${age} => is Not Eligible For Marriage`
        }
        console.log(returnValue);
        console.log("");
    }
    
}  

MarriageEligibility("Male",17);
MarriageEligibility("Male",25);
MarriageEligibility("Female",28);
MarriageEligibility("female",16);
MarriageEligibility("Other",35);
MarriageEligibility("Other",41);
MarriageEligibility("male",null);
MarriageEligibility("female",undefined);
MarriageEligibility("female",NaN);