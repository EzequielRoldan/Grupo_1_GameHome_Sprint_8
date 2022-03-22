window.addEventListener("load", function(){

    //Expresiones regulares
    const regexName="^[a-zA-Z]{1,254}$";
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
    const regexEmail = /^([A-Za-z0-9_\-\+\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;


    // Capturar elementos
    const form = document.querySelector('.formulario');
    const nombre = document.querySelector('.nombre');
    const apellido = document.querySelector('.apellido');
    const password = document.querySelector('.password');
    const correo = document.querySelector('.correo');
    /*const date = document.querySelector('.date');*/
    const image = document.querySelector('.image');
    const button = document.querySelector('.submit');

     //Funciones
     
     function showErrorMessage(elemento, mensaje){
        elemento.innerHTML = '<p>' + mensaje + '</p>';
        elemento.style.color ='red';
     };

        function nameValidator () {
            const contenedor = document.querySelector(".error-nombre");
            contenedor.innerHTML ='';

                if(!nombre.value){
                    showErrorMessage(contenedor, 'El nombre debe estar completo.');
                    return true
                }else if(!nombre.value.match(regexName)){

                    showErrorMessage(contenedor, 'El nombre debe contener solo letras.');
                    return true
                }
                else if(nombre.value.length<2){
                    showErrorMessage(contenedor, 'El nombre debe tener más de 1 letra.');
                    return true

                //que solo permita letras
                }else{
                    contenedor.innerHTML=''
                    return false
                }
        }

        function lastNameValidator () {
            let contenedorApellido = document.querySelector(".error-apellido")
            contenedorApellido.innerHTML=''
                if(!apellido.value){
                    showErrorMessage(contenedorApellido, 'El apellido no puede quedar vacío.');
                    return true;

                }else if(!apellido.value.match(regexName)){

                    showErrorMessage(contenedorApellido, 'El apellido solo admite letras.');
                    return true;

                }else if(apellido.value.length<2){

                    showErrorMessage(contenedorApellido, 'El apellido debe tener más de 1 letra.');
                    return true;

                }else{
                    contenedorApellido.innerHTML='';
                    return false;
                }
        }

        function correoValidator(){
            //Traigo la clase para los errores
            let contenedorEmail = document.querySelector('.error-correo');
                contenedorEmail.innerHTML='';
                
                //El campo email no puede ser nulo ni vacío
                if(correo.value == '' || correo.value == null){
                    showErrorMessage(contenedorEmail, 'El E-mail no puede quedar vacío.')
                    return true
                //Tampoco puede ser un email inválido
                }else if(!regexEmail.test(correo.value)){
                    showErrorMessage(contenedorEmail, 'El E-mail debe ser válido.')
                    return true;
                }else{
                    contenedorEmail.innerHTML='';
                    return false;
                }
            }

        function passwordValidator() {
            let contenedor = document.querySelector('.error-password');
            contenedor.innerHTML='';

                if(!password.value){
                    showErrorMessage(contenedor, 'La contraseña está vacía, escribí una.');
                    return true
                }
                else if(password.value.length<8){
                    showErrorMessage(contenedor, 'La contraseña debe ser mayor a 8 caracteres.');
                    return true

                }else if(!regexPassword.test(password.value)){
                    showErrorMessage(contenedor, 'La contraseña debe tener minimo 8 caracteres, una letra mayúscula, una letra minúscula, un número y un caracter especial.');
                    return true

                }else{
                    contenedor.innerHTML=''
                return false
                }
        }
        /*function dateValidator() {
            let contenedorFecha = document.querySelector('.error-date');
                contenedorFecha.innerHTML = '';
            if(date.value == ''){
                showErrorMessage(contenedorFecha, 'Seleccioná tu fecha de nacimiento.')
                return true
            }else{
                contenedorFecha.innerHTML = '';
                return false
            }
        }*/

        function imageValidator(){
            const acceptedExtensions = ['JPG', 'jpg', 'png', 'gif', 'jpeg', 'JPEG', 'PNG', 'GIF'];

            let contenedorImg = document.querySelector(".error-image");
                contenedorImg.innerHTML = "";
                console.log(image);
                console.log("-----");
                if(image){
                    let filename = image.value;
                    let fileExtension = filename.split(".").pop();
                    
                    if (!acceptedExtensions.includes(fileExtension)){

                        contenedorImg.innerHTML = `Las extenciones de archivo permitidas son ${acceptedExtensions.join(', ')}`;  
                        contenedorImg.style.color='red';
                        return true
                        }
                    }else{

                        contenedorImg.innerText = '';   
                        return false;
                    }
        }
     


        // Eventos
    button.addEventListener('click', function (e) {
        
        
        let hasErrors = { 
            firstName:nameValidator(),
            lastName:lastNameValidator(),
            email:correoValidator(),
            password:passwordValidator(),
            /*date: dateValidator(),*/
            avatar:imageValidator(),
        };
        
        
        if (hasErrors.firstName || hasErrors.password || hasErrors.email ||hasErrors.avatar || hasErrors.lastName /*|| hasErrors.date*/) {
            e.preventDefault()
            alert()
        }else{
            
            form.submit()
            
        }
    }
        
      
        

    
    );


    nombre.addEventListener('blur', nameValidator);
    apellido.addEventListener('blur',lastNameValidator);
    password.addEventListener('blur',passwordValidator);
    correo.addEventListener('blur',correoValidator);
    /*date.addEventListener('blur', dateValidator);*/
    image.addEventListener('change',imageValidator);
    
    
    });
