window.addEventListener("load", function(){

    const regexName="^[a-zA-Z]{1,254}$";
    const regexEmail = /^([A-Za-z0-9_\-\+\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;


    // Capturar elementos
    let nombre = document.querySelector('.nombre');
    let button = document.querySelector('.btn-form');
    let form = document.querySelector('.formulario');
    let correo = document.querySelector('.correo');
    let image = document.querySelector('.imagen-perfil');
    let apellido = document.querySelector('.apellido');


     //Funciones

        function nameValidator () {

            let contenedorName = document.querySelector(".error-nombre")
            contenedorName.innerHTML=''
        if(!nombre.value){
            showErrorMessage(contenedorName, 'El nombre debe estar completo');
            return true

        }else if(!nombre.value.match(regexName)){
            showErrorMessage(contenedorName, 'El nombre debe contener solo letras');
            return true
        }
        else if(nombre.value.length<2){
            showErrorMessage(contenedorName, 'El nombre debe tener más de 1 letra');
            return true

            //que solo permita letras
        }else{
            contenedorName.innerHTML=''
            return false
        }
        }

        function lastNameValidator () {
            let contendorApellido = document.querySelector(".error-apellido");
            contendorApellido.innerHTML='';
        if(!apellido.value){
            showErrorMessage(contendorApellido, 'El apellido debe estar completo');
            return true
        }
        else if(!apellido.value.match(regexName)){
            showErrorMessage(contendorApellido, 'El apellido debe contener letras solamente.');
            return true
        }else if(apellido.value.length<2){
            showErrorMessage(contendorApellido,'El apellido debe contener al menos 2 letras.');
            return true
           
        } else{
            contendorApellido.innerHTML=''
            return false
        }
        }

        function correoValidator(){
            //Traigo la clase para los errores
        let correoContenedor = document.querySelector('.error-correo');
        correoContenedor.innerHTML='';
            
            //El campo email no puede ser nulo ni vacío
            if(correo.value =='' || correo.value == null){
                showErrorMessage(correoContenedor,'El E-mail no puede estar vacío.');
                return true

            //Tampoco puede ser un email inválido
            }else if(!regexEmail.test(correo.value)){
                showErrorMessage(correoContenedor,'El E-mail debe ser válido');
                return true;
            }else{
                correoContenedor.innerHTML='';
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
            avatar:imageValidator(),
        
        };
        
    
        if(hasErrors.firstName || hasErrors.lastName|| hasErrors.email||hasErrors.avatar) {

            e.preventDefault();
        }else{
            form.submit()
        }
        

    });


    nombre.addEventListener('blur', nameValidator);
    
    correo.addEventListener('blur',correoValidator);
    image.addEventListener('change',imageValidator);
    apellido.addEventListener('blur',lastNameValidator);
    })