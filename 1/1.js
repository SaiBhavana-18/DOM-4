let btn=document.querySelector('button')

    btn.addEventListener("click",myFun)
    function myFun (){
        let first=document.getElementById("one").value
        let second=document.getElementById("two").value
        let result=(first)/((second*second))
        let n=result.toFixed(1)
        console.log(result)
        if(result<=18.4)
            document.getElementById('bmi').innerText=`Your BMI is ${n} which means you are under weight`
        
        else if (result>=18.5&&result<=24.9)
            document.getElementById('bmi').innerText=`Your BMI is ${n} which means you are normal weight`
        
        else if (result>=25&&result<=24.9)
           document.getElementById('bmi').innerText=`Your BMI is ${n} which means you are over weight`
        
        else if(result>=30)
           document.getElementById('bmi').innerText=`Your BMI is ${n} which means you are obese`
    
    }