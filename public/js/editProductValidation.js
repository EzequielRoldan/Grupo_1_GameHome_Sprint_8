window.addEventListener('load',function () {
// DECLARACIÓN DE VARIABLES 
    const form = document.querySelector('.form-edit');
    const nombre = document.querySelector('.nombre-product');
    const price= document.querySelector('.price');
    const section= document.querySelector('.section-edit');
    const description= document.querySelector('.description');
    const descriptionMax= document.querySelector('.descrip-max');
    const color = document.querySelector('.color');
    const img = document.querySelector('.img');

// -Stock-
    const stockEdit = document.querySelector('.stock');
    const stockMin = document.querySelector('.stock-min');
    const stockMax = document.querySelector('.stock-max');
    

 //Expresión regular para input number de precio
    const regexNum = /^[0-9]$/;



//                           ***** VALIDACIONES *****

// -Nombre del Producto-
    function nameProductValidator(){

        let nameError=document.querySelector('.nameProduct-error');
         nameError.innerHTML='';
         if(nombre.value==''|| nombre.value==null){
            showErrorMessage(nameError, 'El nombre no puede quedar vacío.')

            return true;
         }else if(nombre.value.length < 5){
            showErrorMessage(nameError, 'El nombre debe contener al menos 5 caracteres.')
            return true;

         }else{
            nameError.innerHTML='';
            return false;

        }
    } 

// -Validación del precio-
    function priceProductValidator(){
        let priceError=document.querySelector('.priceProduct-error');
        priceError.innerHTML='';

        if(price.value == ''|| price.value== null){
            showErrorMessage(priceError, 'El precio no puede quedar vacío.')
            return true;

        }
        else if(price.value <=0){
            showErrorMessage(priceError, 'El precio tiene que ser mayor a 0.');
            return true;

        }
        else if(!price.value.match(regexNum)){
            showErrorMessage(priceError,'Solo se admiten números.');
            return true;

        }else{
            priceError.innerHTML='';

            return false;
        }
    }
// -Validación del section-
    function sectionProductValidator(){
        let sectionError = document.querySelector('.section-error');
        sectionError.innerHTML = '';
        
        if(section.value == '' || section.value == 0){
            showErrorMessage(sectionError,'Seleccioná una sección para mostrar tu producto, por favor.');
            return true;
        }else{
            sectionError.innerHTML = '';
            return false;
        }
    }
// -Validación de la descripción-
    function descriptionProductValidator(){
        let descriptionError = document.querySelector('.description-error');
        descriptionError.innerHTML = '';

        if(description.value == '' || description.value == null){
            showErrorMessage(descriptionError, 'La descripción no puede quedar vacía.');
            return true;

        }else if(description.value.length<20){
            showErrorMessage(descriptionError, 'La descripción debe contener al menos 20 caracteres.'); 
             return true
        }else{
            descriptionError.innerHTML=''
            return false
        };
    }
// -Validación de la descripción extendida-
    function descriptionMaxProductValidator(){
        let descripMaxError =document.querySelector('.descripMax-error');
            descripMaxError.innerHTML = '';

        if(descriptionMax.value == '' || descriptionMax.value == null){
            showErrorMessage(descripMaxError, 'La descripción no puede quedar vacía.');
            return true;

        }else if(descriptionMax.value.length<20){
            showErrorMessage(descripMaxError, 'La descripción debe contener al menos 20 caracteres');
              return true;
        }else{
            descripMaxError.innerHTML='';
            return false;
        }
    }      
// -Validación del color-
    function colorProductValidator(){

        let colorError = document.querySelector('.color-error');
        colorError.innerHTML = '';

        if(color.value == ''|| color.value == null){
            showErrorMessage(colorError, 'Debes seleccionar un color');
            return true

        }else{
            colorError.innerHTML = '';
            return false;
        }

    }   
    // -Validación de stock-
    function stockProductValidator(){
        let stockError = document.querySelector('.stock-error');
        stockError.innerHTML = '';
        if(stockEdit.value == '' || stockEdit.value == null){
            showErrorMessage(stockError, 'El stock no puede quedar vacío.');
            return true;
        }else if(!stock.value.match(regexNum)){
            showErrorMessage(stockError, 'El stock solo admite números.');
            return true;
    
        }else{
            stockError.innerHTML='';
            return false;
        }
    }        
    // -Validación de stock minimo-
        function minStockValidator(){
        let minError = document.querySelector('.stock-min-error');
            minError.innerHTML = '';

        if(stockMin.value == '' || stockMin.value == null){
            showErrorMessage(minError, 'El stock no puede quedar vacío.');
            return true;
        }
        else if(stockMin.value <=0){
            showErrorMessage(minError, 'El stock debe ser mayor a 0.');
            return true;
    
        }
        else if(!stockMin.value.match(regexNum)){
            showErrorMessage(minError, 'El stock solo debe contener números.');
            return true;
    
        }else{
            minError.innerHTML='';
            return false;
        }
    }  
    // -Validación de stock maximo-
        function maxStockValidator(){
            let maxError = document.querySelector('.stock-max-error');
                maxError.innerHTML = '';
            if(stockMax.value == '' || stockMax.value == null){
                showErrorMessage(maxError, 'El stock máximo no puede quedar vacío.');
                return true;
            }else if(stockMax.value <=0){
                showErrorMessage(maxError, 'El stock máximo no puede quedar vacío.');
                maxError.innerHTML = '<p>El stock debe ser mayor a 0</p>';
                maxError.style.color='red';
                return true;
    
            }else if(!stockMax.value.match(regexNum)){
                showErrorMessage(maxError, 'El stock máximo solo admite números.');
                return true;
    
            }else{
                maxError.innerHTML='';
                return false;
            }
    
        }
// -Validación para Imagen-
    function imgProductValidator(){
        const extensions = ['JPG', 'jpg', 'png', 'gif', 'jpeg', 'JPEG', 'PNG', 'GIF'];
        let imgError = document.querySelector(".img-error");
        imgError.innerHTML = "";
            console.log(img);
            console.log("-----");
        if(img){
            let filename = img.value;
            let fileExtension = filename.split(".").pop();
            
        if (!extensions.includes(fileExtension)){
            imgError.innerHTML = `Las extenciones de archivo permitidas son ${extensions.join(', ')}`;  
            imgError.style.color='red';
        
            }

        }else{
            imgError.innerText = '';   
            return false;
        }

    }
//                                 ***** EVENTOS *****

    form.addEventListener('submit',function(event){

        let hasErrors={
            name: nameProductValidator(),
            price:priceProductValidator(),
            section:sectionProductValidator(),
            description:descriptionProductValidator(),
            extended_description:descriptionMaxProductValidator(),
            colorId:colorProductValidator(),
            image: imgProductValidator(),
            stock: stockProductValidator(),
            stock_min:minStockValidator(),
            stock_max: stockMaxValidator()
        }
        
        if(hasErrors.name || hasErrors.price || hasErrors.section || hasErrors.description || hasErrors.extended_description ||hasErrors.colorId || hasErrors.image ||hasErrors.stock ||hasErrors.min_stock|| hasErrors.stock_max){

            event.preventDefault();
        
        }
        else{

            form.submit();

        }
    })
//                          ***** LLAMADO DE FUNCIONES *****

nombre.addEventListener('blur', nameProductValidator);
price.addEventListener('blur',priceProductValidator);
section.addEventListener('blur',sectionProductValidator);
description.addEventListener('blur',descriptionProductValidator);
descriptionMax.addEventListener('blur',descriptionMaxProductValidator);
stockEdit.addEventListener('blur',stockProductValidator);
stockMin.addEventListener('blur',minStockValidator);
stockMax.addEventListener('blur',maxStockValidator);
color.addEventListener('blur',colorProductValidator);
img.addEventListener('change', imgProductValidator);


})