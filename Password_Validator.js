// Password Validator

function ValidatePassword(password, confirmePassword){
    if(password===confirmePassword){
        console.log("Confirmed Password Matched. Password validation Successful." );
    }
else{
    console.log("Password didn't match. Password validation unsuccessful");
}
}

ValidatePassword("Anand@8726", "Anand@8726");
ValidatePassword("Anand@8726", "Anand@1315");