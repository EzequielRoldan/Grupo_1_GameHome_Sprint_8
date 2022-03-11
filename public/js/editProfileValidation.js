window.addEventListener("load", function(){

    let pattern="[a-zA-Z ]{2,254}"

    // Capturar elementos
    let nombre = document.querySelector('.nombre')
    let button = document.querySelector('.btn-form')
    let form = document.querySelector('.formulario')
    let correo = document.querySelector('.correo')
    let image = document.querySelector('.imagen-perfil')
    let apellido = document.querySelector('.apellido')
    let fecha = document.querySelector('.date')
     //Funciones

     

        function nameValidator () {

            let error = document.querySelector(".error-nombre")
            error.innerHTML=''
        if(!nombre.value){
           
           error.innerHTML+='<p>El campo nombre debe estar completo</p>'
           error.style.color='red';
            return true
        }else if(!nombre.value.match(pattern)){
            error.innerHTML+='<p>El campo nombre debe contener solo letras</p>'
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
            errorApellido.innerHTML+='<p>El campo apellido debe contener solo letras</p>'
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

        /*function edadValidator(){
            
            var  datRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9])$/;
            
            let edadError = document.querySelector('.error-edad')
            
            edadError.innerHTML='';

            if(){
                edadError.innerHTML += '<p>La edad debe ser mayor o igual a 18</p>';
                edadError.style.color='red';
                return true
            
            }else if (){
                edadError.innerHTML += '<p></p>';
                edadError.style.color='red';
                return true
            }else{
                edadError.innerHTML=''
                return false;
            }*/

        


        // Eventos
        button.addEventListener('click', function (e) {
        
        let hasErrors = { 
            firstName:nameValidator(),
            lastName:lastNameValidator(),
            email:correoValidator(),
            avatar:imageValidator(),
            /*
            fecha:edadValidator(),
            */
        };
        
    
        if(hasErrors.firstName || hasErrors.lastName|| hasErrors.email||hasErrors.avatar/*||hasErrors.fecha*/) {

            e.preventDefault();
        }else{
            form.submit()
        }
        
        
      
        

    
    });


    nombre.addEventListener('blur', nameValidator);
    
    correo.addEventListener('blur',correoValidator);
    image.addEventListener('change',imageValidator);
    apellido.addEventListener('blur',lastNameValidator);
    /*Validacion Edad*/
    /*fecha.addEventListener('change',edadValidator);*/
    })