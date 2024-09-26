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

        // show success content/message
        document.getElementById('content-design').style.display='none'
        document.getElementById('content-success').style.display='inline'
    }else{//not valid
        document.getElementById('email-input').style.borderColor='red'
        document.getElementById('email-input').style.backgroundColor='red'
        document.getElementById('error-message').style.display = 'inline'
    }
}

function dismiss(){
    document.getElementById('content-design').style.display='inline'
    document.getElementById('content-success').style.display='flex'
}