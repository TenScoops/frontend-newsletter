function isEmailValid(email){
    // check if email valid
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

function handleSubmit(event){
    event.preventDefault();
    const value = document.getElementById('email-input').value

    if(isEmailValid(value)){//if valid
        document.getElementById('email-input').style.backgroundColor='green'
       
    }else{//not valid
         document.getElementById('email-input').style.borderColor='red'
        document.getElementById('email-input').style.backgroundColor='red'
        document.getElementById('error-message').style.display = 'inline'
    }
}

