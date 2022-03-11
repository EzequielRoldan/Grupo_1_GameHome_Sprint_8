window.addEventListener("load", function(){

    //Obtengo los datos necesarios del ejs en mi js:
    const formLogin = document.querySelector('#formLogin');
    const email = document.querySelector('.email');
    const password = document.querySelector('.password');


    //Declaro y desarrollo las Funciones para validar:
    function emailValidation(){

    //Traigo la clase para los errores
        let emailError = document.querySelector('.email-error');

    //Expresión para validar formato email
        var regexEmail = /^([A-Za-z0-9_\-\+\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        emailError.innerHTML='';
        
        //El campo email no puede ser nulo ni vacío
        if(email.value == '' || email.value == null){
            emailError.innerHTML += '<p>El campo E-mail no debe estar vacío</p>';
            emailError.style.color='red';
            return true
        //Tampoco puede ser un email inválido
        }else if(!email.value.match(regexEmail)){
            emailError.innerHTML+= '<p>El E-mail debe ser válido</p>'
            emailError.style.color='red';
            return true;
        }else{
            emailError.innerHTML='';
            return false;
        }
    }
    function passwordValidation () {
        let passwordError=document.querySelector('.password-error')
        passwordError.innerHTML='';
        if(!password.value){
            passwordError.innerHTML+='<p>El campo contraseña debe estar completo</p>'
            passwordError.style.color='red';
       return true
    }
       else{
        passwordError.innerHTML=''
    return false
    } 

    }
    // Eventos
formLogin.addEventListener('submit', function(e){

    let hasErrors = {
        email: emailValidation(),
        password:passwordValidation()
        
    }
    if(hasErrors.email || hasErrors.password){
        e.preventDefault();
    }
    else{
        formLogin.submit();
    };
});

     // Llamo a las funciones
     email.addEventListener('blur', emailValidation);
     password.addEventListener('blur',passwordValidation);

});


