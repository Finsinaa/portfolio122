var btn = document.getElementById("subBtn");

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    var name = document.getElementById("nameField").value;
    var mail = document.getElementById('email').value; 
    var mailError = document.getElementById('emailError');
    var message = document.getElementById('message').value;
    console.log(message);
    var messageError = document.getElementById("messageError"); 
    var nameError = document.getElementById("nameError");
    let patternEmail =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    pattern = /[0-9]/
    // Name
    if(name.length==null||name.length==0){
        console.log(true);
        nameError.innerHTML = "name field must be filled";
        return false;
            
    }
    else{
        nameError.innerHTML = "";
    }

    if(pattern.test(name)){
        nameError.innerHTML = "name field cannot contain numbers";
        return false;
    }
    else{
        nameError.innerHTML = "";
    }

    // email

    if(mail.length==0||mail==null){
        mailError.innerHTML ="Email be Filled";
        return false;
    }else{
        mailError.innerHTML = "";
    }

    if(patternEmail.test(mail)){
        mailError.innerHTML ="";
    }
    else{
        mailError.innerHTML = "Invalid Email";
        return false;
    }

    if(message.length==null||message.lenght==0){
        messageError.innerHTML="Message Must be filled"
        return false;    
    }
    else{
        messageError.innerHTML="";
    }

    return true;

});

