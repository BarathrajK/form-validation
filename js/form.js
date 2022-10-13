// form validation
let form = document.getElementById("form");
let username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const btn = document.getElementById("btn");


function setError(input,message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message; 
}
function setSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    // input.style.border="green 2px solid ";
}


function isEmail(email) {
    return /^([A-Za-z0-9 .])+\@([a-z])+\.([a-z])$/.test(email.value)
    
}

function checkInput(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    console.log(usernameValue);
    if (usernameValue === ''){
        setError(username, 'cannot be Blank');
        console.log("fyy");
    }
    else {
        setSuccess(username);
        console.log("fyffy");
    }

    if (emailValue == ''){
        setError(email, 'Email cannot be Blank');
    }
    else if (isEmail(email)) {
        setError(email,'Not a valid Email');
    }
    else {
        setSuccess(email);
    }
    
    if (passwordValue == '') {
        setError(password, 'passsword cannot be Blank');
    }
    else if(passwordValue !== password2Value){
        setError(password2,'Password Does not Match');
    }
    else {
        setSuccess(password2);
    }
}

// btn.addEventListener('cilck',function(){
//     checkInput();
//     console.log(username.value);
// });

btn.addEventListener('click',checkInput);




