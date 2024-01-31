function validate()
{
    let alertMsg = validatefname()[0] + validatedob()[0] + validateemail()[0] + validatephno()[0] + validatepwd()[0];
    if (alertMsg != ""){
        alert(alertMsg);
    }
    else{
        alert("Valid Form. Thank You!");
    }
    return (validatefname()[1] && validatedob()[1] && validateemail()[1] && validatephno()[1] && validatepwd()[1]);
}

function validatefname(){
    let fname = document.getElementById("fname").value;
    if (fname == "" )
    {
        return ["Please fill your first name.\n",false];
    }
    else if ((/^[a-zA-Z]+(?:\s[a-zA-Z]+)?$/.test(fname))==false){
        return ["Please fill valid first name.\n",false];
    }
    else
    {
        return ["",true];
    }
}

function validatedob(){
    let dob = document.getElementById("dob").value;
    if (dob == "" )
    {
        return ["Please fill your date of birth.\n",false];
    }
    else if ((/^(0[1-9]|[1-2][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/.test(dob))==false){
        return ["Please fill valid date of birth.\n",false];
    }
    else
    {
        return ["",true];
    }
}

function validategender(){
    let gender = document.querySelector('input[name="gender"]:checked');
    if (!(gender))
    {
        return ["Please choose your gender.\n",false];
    }
    else
    {
        return ["",true];
    }
}

function validateemail(){
    let email = document.getElementById("email").value;
    if (email == "")
    {
        return ["Please fill your email address.\n",false];
    }
    else if ((/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))==false || email.length>50){
        return ["Please fill valid email address.\n",false];
    }
    else
    {
        return ["",true];
    }
}

function validatephno(){
    let phno = document.getElementById("phno").value;
    if (phno == "")
    {
        return ["Please fill your phone number.\n",false];
    }
    else if ((/^[6-9]\d{9}$/.test(phno))==false){
        return ["Please fill valid phone number.\n",false];
    }
    else
    {
        return ["",true];
    }
}

function validatepwd(){
    let pwd = document.getElementById("pwd").value;
    let cpwd = document.getElementById("cpwd").value;
    if (pwd == "" || cpwd=="")
    {
        return ["Please fill your password.\n",false];
    }
    else if ((/^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()_+,-./:;<=>?@[\\\]^_`{|}~])(?=.*[!@#$%^&*()_+,-./:;<=>?@[\\\]^_`{|}~]).{10,}$/.test(pwd))==false){
        return ["Please fill valid password.\n",false];
    }
    else if(pwd!=cpwd){
        return ["Please refill your password\n", false];
    }
    else
    {
        return ["",true];
    }
}