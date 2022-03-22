window.addEventListener("load", function(){
    const form = document.querySelector('.form-add');
    const nombre = document.querySelector('.nombre-product');
    const categoria = document.querySelector('.category');
    const precio = document.querySelector('.price');
    const img = document.querySelector('.img');
    const description = document.querySelector('.description');
    const desMax = document.querySelector('.descrip-max');
    const seccion = document.querySelector('.section');
    const color = document.querySelector('.color');
    const marca = document.querySelector('.marca');

//Stock
    const stock = document.querySelector('.stock');
    const stockMin = document.querySelector('.stock-min');
    const stockMax = document.querySelector('.stock-max');

//Expresión regular para input number de precio
    const regexNum = /^[0-9]$/;


    
    function showErrorMessage(elemento, mensaje){
        elemento.innerHTML = '<p>' + mensaje + '</p>';
        elemento.style.color ='red';
     };
//Validaciones

    //Validación para Nombre del Producto
    function nameProductValidator(){
        let nameContenedor = document.querySelector('.nameProduct-error');
        nameContenedor.innerHTML = "";

        if(nombre.value == '' || nombre.value == null){
            showErrorMessage(nameContenedor, 'El campo no puede quedar incompleto.');
            return true;
        }
        else if(nombre.value.length <5){
            showErrorMessage(nameContenedor, 'El nombre debe tener al menos 5 caracteres.');
            return true;

        }else{
            nameContenedor.innerHTML='';

            return false;
        }

    }

    //Validación para Categoría
    function categoryProductValidator(){
        let categoryContenedor = document.querySelector('.category-error');

        if(categoria.value == '' || categoria.value == 0){
            showErrorMessage(categoryContenedor, 'Seleccioná una categoría, por favor.');
            return true;
        }else{
            categoryContenedor.innerHTML = '';
            return false;
        }

    }

    //Validación para Precio
    function priceProductValidator(){
        let priceContenedor = document.querySelector('.priceProduct-error');
        priceContenedor.innerHTML = '';

        if(precio.value == '' || precio.value == null){
            showErrorMessage(priceContenedor, 'El precio no puede quedar incompleto o vacío.')
            return true;
        }
        else if(precio.value <=0){
            showErrorMessage(priceContenedor, 'El precio no puede ser 0')
            return true;

        }
        else if(!precio.value.match(regexNum)){
            showErrorMessage(priceContenedor, 'El precio solo admite números.')
            return true;

        }else{
            priceContenedor.innerHTML='';

            return false;
        }
    }
        
    //Validación para Sección del Producto
    function seccionProductValidator(){
        let seccionContenedor = document.querySelector('.section-error');

        if(seccion.value == '' || seccion.value == 0){
            showErrorMessage(seccionContenedor, 'Seleccioná una sección, por favor.');
            return true;
        }else{
            seccionContenedor.innerHTML = '';
            return false;
        }

    }

     //Validacion para descripciones
    function descriptionProductValidator(){
        let descriptionError = document.querySelector('.description-error');
        descriptionError.innerHTML='';
        if(description.value == '' || description.value == null){
            showErrorMessage(descriptionError, 'La descripción no puede quedar vacía.')
            return true;

        }else if(description.value.length<20){
            showErrorMessage(descriptionError, 'La descripción debe contener al menos 20 caracteres.')
             return true
        }else{
            descriptionError.innerHTML=''
                return false
        };
        
    }
    function descripMaxProductValidator(){
        let descripMax = document.querySelector('.descripMax-error')
            descripMax.innerHTML=''
        if(desMax.value == '' || desMax.value == null){
            showErrorMessage(descripMaxError, 'El campo no puede quedar incompleto o vacío.');
                return true;

        }else if(desMax.value.length<20){
            showErrorMessage(descripMax, 'La descripción debe contener al menos 20 caracteres.');
                return true
        }
        else{
            descripMax.innerHTML=''
                return false
        }
    }

    //Validacion para Stock's
    function stockProductValidator(){
        let stockMsg = document.querySelector('.stock-error');
            stockMsg.innerHTML = '';
        if(stock.value == '' || stock.value == null){
            showErrorMessage(stockMsg, 'El campo no puede quedar vacío.');   
            return true;

        }else if(stock.value <= 0){
            showErrorMessage(stockMsg, 'El stock no puede ser 0.');
            return true;
        }else if(!regexNum.test(stock.value)){
            showErrorMessage(stockMsg, 'El stock solo debe contener números.');
            return true;
        }else{
            stockMsg.innerHTML='';
            return false;
        }
    }
    function minStockValidator(){
        let minErrorMsg = document.querySelector('.stock-min-error');
            minErrorMsg.innerHTML = '';
        if(stockMin.value == '' || stockMin.value == null){
            showErrorMessage(minErrorMsg, 'El campo no puede quedar vacío.');
            return true;
        }else if(stockMin.value <=0){
            showErrorMessage(minErrorMsg, 'El stock no puede ser 0.');
            return true;

        }else if(!stockMin.value.match(regexNum)){   
            showErrorMessage(minErrorMsg, 'El campo solo debe contener números.')         
            return true;

        }else{
            minErrorMsg.innerHTML='';
            return false;
        }
    }
    function maxStockValidator(){
        let maxError = document.querySelector('.stock-max-error');
            maxError.innerHTML = '';
        if(stockMax.value == '' || stockMax.value == null){
            showErrorMessage(maxError, 'El stock no puede quedar vacío.')
            return true;
        }
        else if(stockMax.value <=0){
            showErrorMessage(maxError, 'El stock debe ser mayor 0.')
            return true;

        }
        else if(!stockMax.value.match(regexNum)){            
            showErrorMessage(maxError, 'El stock solo debe contener números.')
            return true;

        }else{
            maxError.innerHTML='';
            return false;
        }

    }
    //Validación para Color
    function colorProductValidator(){
        let colorContenedor = document.querySelector('.color-error');

        if(color.value == '' || color.value == 0){
            showErrorMessage(colorContenedor, 'Seleccioná un color, por favor.');
            return true;
        }else{
            colorContenedor.innerHTML = '';
            return false;
        }

    }

    //Validación para Marca
    function marcaProductValidator(){
        let marcaContenedor = document.querySelector('.brand-error');

        if(marca.value == '' || marca.value == 0){
            showErrorMessage(marcaContenedor, 'Seleccioná una marca, por favor.');
            return true;
        }else{
            marcaContenedor.innerHTML = '';
            return false;
        }

    }
    //Validación para Imagen
    function imgProductValidator(){
        const acceptedExtensions = ['JPG', 'jpg', 'png', 'gif', 'jpeg', 'JPEG', 'PNG', 'GIF'];
        let imgError = document.querySelector(".img-error");
        imgError.innerHTML = "";
            console.log(img);
            console.log("-----");
        if(img){
            let filename = img.value;
            let fileExtension = filename.split(".").pop();
            
        if (!acceptedExtensions.includes(fileExtension)){
            imgError.innerHTML = `Las extenciones de archivo permitidas son ${acceptedExtensions.join(', ')}`;  
            imgError.style.color='red';
        
            }

        }else{
            imgError.innerText = '';   
            return false;
        }

    }

    // Eventos
        
        form.addEventListener('submit', function (e) {
            let hasErrors = {
                name: nameProductValidator(),
                image: imgProductValidator(),
                category: categoryProductValidator(),
                price: priceProductValidator(),
                stock: stockProductValidator(),
                stock_min: stockMinValidator(),
                stock_max: stockMaxValidator(),
                description: descriptionProductValidator(),
                extended_description: descripMaxProductValidator(),
                section: seccionProductValidator(),
                colorId: colorProductValidator(),
                brandId: marcaProductValidator()
            };
            if(hasErrors.name || hasErrors.image || hasErrors.category || hasErrors.price || hasErrors.stock || hasErrors.stock_min || hasErrors.stock_max || hasErrors.description || hasErrors.extended_description || hasErrors.section || hasErrors.colorId || hasErrors.brandId){
                e.preventDefault();
            }else{
                form.submit();
            };

        });
        
    // Llamo a las funciones
     nombre.addEventListener('blur', nameProductValidator);
     img.addEventListener('change', imgProductValidator);
     precio.addEventListener('blur', priceProductValidator);
     categoria.addEventListener('blur', categoryProductValidator);
     stock.addEventListener('blur', stockProductValidator);
     stockMin.addEventListener('blur', minStockValidator);
     stockMax.addEventListener('blur', maxStockValidator);
     description.addEventListener('blur',descriptionProductValidator);
     desMax.addEventListener('blur',descripMaxProductValidator);
     seccion.addEventListener('blur',seccionProductValidator);
     color.addEventListener('blur',colorProductValidator);
     marca.addEventListener('blur',marcaProductValidator);
});