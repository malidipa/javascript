
var string=function(gradScore,hscScore,sscScore,candidateName){
    if (gradScore>=70 || hscScore>=80 || sscScore>=90 ){
       // var returnValue=`Congrates ${candidateName} you are eligible for interview`
        console.log(` * Congrates ${candidateName},you are eligible for TCS interview`);
      }else{
       // var returnValue=`Unfortunately you are not eligible for interview`
        console.log(` * Unfortunately you are not eligible for interview`);
      }
     // console.log(`${returnValue}`);
     
    }
  string(80,86,90,"dipa");
  string(70,65,55,"mayur");
  string(60,79,88,"ruchi");
