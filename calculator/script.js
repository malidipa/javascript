console.log("==============================");
const submitButton = document.querySelector("#addition")
const submitButton1 = document.querySelector("#sub")
const submitButton2 = document.querySelector("#multi")
const submitButton3 = document.querySelector("#divi")
const fieldOne = document.querySelector("#field-one")
const fieldTwo = document.querySelector("#field-two")
const resultValue = document.querySelector("#resultValue")

submitButton.addEventListener('click',()=>{
    const value1 = +fieldOne.value;
    const value2 = +fieldTwo.value
    const result=value1+value2
      console.log(value1+value2);
      //alert(`Addition is : ${value1+value2}`)
      resultValue.innerHTML=result

  })
  submitButton1.addEventListener('click',()=>{
    const value1 = -fieldOne.value;
    const value2 = -fieldTwo.value
    const result1=value1-value2
      console.log(value1-value2);
      //alert(`Addition is : ${value1+value2}`)
      resultValue.innerHTML=result1
    })
    submitButton2.addEventListener('click',()=>{
      const value1 = fieldOne.value;
      const value2 = fieldTwo.value
      const result2=value1*value2
        console.log(value1*value2);
        //alert(`Addition is : ${value1+value2}`)
        resultValue.innerHTML=result2
      })
      submitButton3.addEventListener('click',()=>{
        const value1 = fieldOne.value;
        const value2 = fieldTwo.value
        const result3=value1/value2
          console.log(value1/value2);
          //alert(`Addition is : ${value1+value2}`)
          resultValue.innerHTML=result3
        })