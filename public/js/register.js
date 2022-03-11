window.addEventListener("load", function(){

    let pattern="[a-zA-Z ]{2,254}"


    // Capturar elementos
    let nombre = document.querySelector('.nombre')
    let password = document.querySelector('.password')
    let form = document.querySelector('.formulario')
    let correo = document.querySelector('.correo')
    let image = document.querySelector('.image')
    let apellido = document.querySelector('.apellido')
    let button = document.querySelector('.submit')

     //Funciones

        function nameValidator () {

            let error = document.querySelector(".error-nombre")
            error.innerHTML=''
        if(!nombre.value){
           
           error.innerHTML+='<p>El campo nombre debe estar completo</p>'
           error.style.color='red';
            return true
        }else if(!nombre.value.match(pattern)){
            error.innerHTML+='<p>El campo nombre contener solo letras</p>'
            error.style.color='red';
            return true
        }
        else if(nombre.value.length<2){
            document.querySelector(".error-nombre").innerHTML+='<p>El campo nombre debe ser mayor a 2</p>'
            error.style.color='red';
            return true

            //que solo permita letras
        }else{
            error.innerHTML=''
            return false
        }
        }

        function passwordValidator() {
            var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
            let passwordError = document.querySelector('.error-password')
            passwordError.innerHTML=''
            if(!password.value){
                passwordError.innerHTML+='<p>El campo contraseña debe estar completo</p>'
                passwordError.style.color='red';
           return true
            }
            else if(password.value.length<8){
                passwordError.innerHTML+='<p>El campo contraseña debe ser mayor a 8</p>'
                passwordError.style.color='red';
           return true
            }else if(!regex.test(password.value)){
                passwordError.innerHTML+='<p>La contraseña debe tener minimo 8 caracteres, una letra mayúscula, una letra minuscula,un dígito, 1 caracter especial</p>'
                passwordError.style.color='red';
            }
            else{
                passwordError.innerHTML=''
            return false
            }
        }


        function lastNameValidator () {
            let pattern="[a-zA-Z ]{2,254}"
            let errorApellido = document.querySelector(".error-apellido")
            errorApellido.innerHTML=''
        if(!apellido.value){
           
            errorApellido.innerHTML+='<p>El campo apellido debe estar completo</p>'
            errorApellido.style.color='red';
            return true
        }
        else if(!apellido.value.match(pattern)){
            errorApellido.innerHTML+='<p>El campo apellido contener solo letras</p>'
            errorApellido.style.color='red';
            return true
        }else if(apellido.value.length<2){
            document.querySelector(".error-apellido").innerHTML+='<p>El campo apellido debe ser mayor a 2</p>'
            error.style.color='red';
            return true
           
          
        } else{
            error.innerHTML=''
            return false
        }
        }

        function correoValidator(){
            //Traigo la clase para los errores
        let correoError = document.querySelector('.error-correo');

        //Expresión para validar formato email
            var regexEmail = /^([A-Za-z0-9_\-\+\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    
            correoError.innerHTML='';
            
            //El campo email no puede ser nulo ni vacío
            if(correo.value ==" " || correo.value == null){
                correoError.innerHTML += '<p>El campo E-mail no debe estar vacío</p>';
                correoError.style.color='red';
                return true
            //Tampoco puede ser un email inválido
            }else if(/*!correo.value.match(regexEmail)*/!regexEmail.test(correo.value)){
                correoError.innerHTML+= '<p>El E-mail debe ser válido</p>'
                correoError.style.color='red';
                return true;
            }else{
                correoError.innerHTML='';
                return false;
            }
        }

        function imageValidator(){
        const acceptedExtensions = ['JPG', 'jpg', 'png', 'gif', 'jpeg', 'JPEG', 'PNG', 'GIF'];
        let imageError = document.querySelector(".error-image");
        imageError.innerHTML = "";
            console.log(image);
            console.log("-----");
        if(image){
            let filename = image.value;
            let fileExtension = filename.split(".").pop();
            
        if (!acceptedExtensions.includes(fileExtension)){
            imageError.innerHTML = `Las extenciones de archivo permitidas son ${acceptedExtensions.join(', ')}`;  
            imageError.style.color='red';
            return true
            }

        }else{
            imageError.innerText = '';   
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
            avatar:imageValidator(),
        };
        
        
        if (hasErrors.firstName || hasErrors.password || hasErrors.email ||hasErrors.avatar || hasErrors.lastName) {
            e.preventDefault()
        }else{
            
            form.submit()
            
        }
    }
        
      
        

    
    );


    nombre.addEventListener('blur', nameValidator);
    password.addEventListener('blur',passwordValidator);
    correo.addEventListener('blur',correoValidator);
    image.addEventListener('change',imageValidator);
    apellido.addEventListener('blur',lastNameValidator);
    
    })
