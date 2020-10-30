document.querySelector(".bttn").addEventListener('click', function(){
    let result = document.querySelector("#result").value
    let display = document.querySelector(".display-grade")
    let grade;

    if(result >=80 && result <=100){
       grade = "A"
    }else if(result >=70 && result <=79){
        grade = "B"
    }else if(result >=60 && result <=69){
        grade = "C"
    }else if(result >=50 && result <=59){
    grade = "D"
    }else if(result >=49 && result <=0){
    grade = "F"
    }else {
        grade= "invalid input"
    }
    console.log(grade)
    display.innerHTML = grade
})
    