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
var regexNum = /^[0-9]$/;



//                           ***** VALIDACIONES *****

// -Nombre del Producto-
    function nameProduct(){

        let nameError=document.querySelector('.nameProduct-error');
         nameError.innerHTML='';
         if(nombre.value==''|| nombre.value==null){

            nameError.innerHTML = '<p> El campo no puede quedar incompleto.</p>';
            nameError.style.color='red';

            return true;
         }
         else if(nombre.value.length < 5){

            nameError.innerHTML = '<p> El campo debe tener al menos 5 caracteres</p>';
            nameError.style.color='red';

            return true;

         }
         else{

            nameError.innerHTML='';
            return false;

         }

    } 

// -Validación del precio-
    function priceProduct(){
        let priceError=document.querySelector('.priceProduct-error');
        priceError.innerHTML='';

        if(price.value == ''|| price.value== null){

            priceError.innerHTML = '<p>El campo no puede quedar incompleto o vacío.</p>';
            priceError.style.color='red';
            return true;

        }
        else if(price.value <=0){
            priceError.innerHTML = '<p>El precio debe ser mayor a 0</p>';
            priceError.style.color='red';
            return true;

        }
        else if(!price.value.match(regexNum)){
            priceError.innerHTML = '<p>El precio solo debe contener números.</p>';
            priceError.style.color='red';
            return true;

        }else{
            priceError.innerHTML='';

            return false;
        }
    }
// -Validación del section-
    function sectionProduct(){
        let sectionError = document.querySelector('.section-error');
        sectionError.innerHTML = '';
        
        if(section.value == '' || section.value == 0){
            sectionError.innerHTML = '<p>Seleccioná una sección, por favor.</p>';
            sectionError.style.color = 'red';
            return true;
        }else{
            sectionError.innerHTML = '';
            return false;
        }
    }
// -Validación de la descripción-
    function descriptionProduct(){
        let descriptionError = document.querySelector('.description-error');
        descriptionError.innerHTML = '';

        if(description.value == '' || description.value == null){
            descriptionError.innerHTML = '<p>El campo no puede quedar incompleto o vacío.</p>';
            descriptionError.style.color='red';
            return true;

        }else if(description.value.length<20){
            
            descriptionError.innerHTML+='<p>El campo debe contener al menos 20 caracteres.</p>'
            descriptionError.style.color='red';
       return true
        }
        else{
            descriptionError.innerHTML=''
        return false
        };
    }
// -Validación de la descripción extendida-
    function descriptionMaxProduct(){
        let descripMaxError =document.querySelector('.descripMax-error');
        descripMaxError.innerHTML = '';

        if(descriptionMax.value == '' || descriptionMax.value == null){
            descripMaxError.innerHTML = '<p>El campo no puede quedar incompleto o vacío.</p>';
            descripMaxError.style.color='red';
            return true;

        }else if(descriptionMax.value.length<20){
            
            descripMaxError.innerHTML+='<p>El campo debe contener al menos 20 caracteres.</p>'
            descripMaxError.style.color='red';
       return true
        }
        else{
            descripMaxError.innerHTML=''
        return false
        }
    }      
// -Validación del color-
    function colorProduct(){

        let colorError = document.querySelector('.color-error');
        colorError.innerHTML = '';

        if(color.value == ''|| color.value == null){

            colorError.innerHTML = 'Debes seleccionar un color';
            colorError.style.color='red';
            return true

        }
        else{
            colorError.innerHTML = '';
            return false;
        }

    }   
    // -Validación de stock-
    function stockProduct(){
        let stockError = document.querySelector('.stoc-error');
        stockError.innerHTML = '';
        if(stockEdit.value == '' || stockEdit.value == null){
            stockError.innerHTML = '<p>El campo no puede quedar incompleto o vacío.</p>';
            stockError.style.color='red';
            return true;
        }else if(!stock.value.match(regexNum)){
            stockError.innerHTML = '<p>El stock solo debe contener números.</p>';
            stockError.style.color='red';
            return true;
    
        }else{
            stockError.innerHTML='';
    
            return false;
        }
    }        
    // -Validación de stock minimo-
        function minStock(){
        let minError = document.querySelector('.stock-min-error');
        minError.innerHTML = '';
        if(stockMin.value == '' || stockMin.value == null){
            minError.innerHTML = '<p>El campo no puede quedar incompleto o vacío.</p>';
            minError.style.color='red';
            return true;
        }
        else if(stockMin.value <=0){
            minError.innerHTML = '<p>El stock debe ser mayor a 0</p>';
            minError.style.color='red';
            return true;
    
        }
        else if(!stockMin.value.match(regexNum)){
            minError.innerHTML = '<p>El stock solo debe contener números.</p>';
            minError.style.color='red';
            return true;
    
        }else{
            minError.innerHTML='';
            return false;
        }
    }  
    // -Validación de stock maximo-
        function maxStock(){
            let maxError = document.querySelector('.stock-max-error');
            maxError.innerHTML = '';
            if(stockMax.value == '' || stockMax.value == null){
                maxError.innerHTML = '<p>El campo no puede quedar incompleto o vacío.</p>';
                maxError.style.color='red';
                return true;
            }
            else if(stockMax.value <=0){
                maxError.innerHTML = '<p>El stock debe ser mayor a 0</p>';
                maxError.style.color='red';
                return true;
    
            }
            else if(!stockMax.value.match(regexNum)){                maxError.innerHTML = '<p>El stock solo debe contener números.</p>';
                maxError.style.color='red';
                return true;
    
            }else{
                maxError.innerHTML='';
    
                return false;
            }
    
        }
// -Validación para Imagen-
    function imgProduct(){
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
            name: nameProduct(),
            price:priceProduct(),
            section:sectionProduct(),
            description:descriptionProduct(),
            extended_description:descriptionMaxProduct(),
            colorId:colorProduct(),
            image: imgProduct(),
            stock: stockProduct(),
            stock_min:minStock(),
            stock_max: stockMax()
        }
        
        if(hasErrors.name || hasErrors.price || hasErrors.section || hasErrors.description || hasErrors.extended_description ||hasErrors.colorId || hasErrors.image ||hasErrors.stock ||hasErrors.min_stock|| hasErrors.stock_max){

            event.preventDefault();
        
        }
        else{

            form.submit();

        }
    })
//                          ***** LLAMADO DE FUNCIONES *****

nombre.addEventListener('blur', nameProduct);
price.addEventListener('blur',priceProduct);
section.addEventListener('blur',sectionProduct);
description.addEventListener('blur',descriptionProduct);
descriptionMax.addEventListener('blur',descriptionMaxProduct);
stockEdit.addEventListener('blur',stockProduct);
stockMin.addEventListener('blur',minStock);
stockMax.addEventListener('blur',maxStock);
color.addEventListener('blur',colorProduct);
img.addEventListener('change', imgProduct);


})