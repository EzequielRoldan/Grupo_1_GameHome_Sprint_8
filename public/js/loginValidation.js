window.addEventListener("load", function(){

    const regexEmail = /^([A-Za-z0-9_\-\+\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    //Obtengo los datos necesarios del ejs en mi js:
    const formLogin = document.querySelector('#formLogin');
    const email = document.querySelector('.email');
    const password = document.querySelector('.password');

    function showErrorMessage(elemento, mensaje){
        elemento.innerHTML = '<p>' + mensaje + '</p>';
        elemento.style.color ='red';
     };
    //Declaro y desarrollo las Funciones para validar:
    function emailValidation(){
    //Traigo la clase para los errores
        let contenedorEmail = document.querySelector('.email-error');       
        contenedorEmail.innerHTML='';
        
        //El campo email no puede ser nulo ni vacío
        if(email.value == '' || email.value == null){

            showErrorMessage(contenedorEmail, 'El E-mail no puede quedar vacío.');
            return true
        //Tampoco puede ser un email inválido
        }else if(!email.value.match(regexEmail)){

            showErrorMessage(contenedorEmail, 'El E-mail tiene que ser válido.');
            return true;

        }else{
            contenedorEmail.innerHTML = '';
            return false;
        }
    }
    function passwordValidation () {
        let contenedorPassword = document.querySelector('.password-error')
            contenedorPassword.innerHTML = '';
            if(!password.value){
                showErrorMessage(contenedorPassword, 'Completá con tu contraseña, por favor.')
                return true
            }else{
            contenedorPassword.innerHTML=''
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


