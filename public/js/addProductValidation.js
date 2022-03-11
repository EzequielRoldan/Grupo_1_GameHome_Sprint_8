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
    
//Para evitar el envio del form
    //const button = document.querySelector('.button-form');

//Expresión regular para input number de precio
var regexNum = /^[0-9]$/;

//Validaciones

    //Validación para Nombre del Producto
    function nameProduct(){
        let nameError = document.querySelector('.nameProduct-error');
        nameError.innerHTML = "";

        if(nombre.value == '' || nombre.value == null){
            nameError.innerHTML = '<p>El campo no puede quedar incompleto.</p>';
            nameError.style.color='red';

            return true;
        }
        else if(nombre.value.length <5){
            nameError.innerHTML = '<p>El nombre debe tener al menos 5 caracteres.</p>';
            nameError.style.color='red';

            return true;

        }else{
            nameError.innerHTML='';

            return false;
        }

    }

    //Validación para Categoría
    function categoryProduct(){
        let categoryError = document.querySelector('.category-error');

        if(categoria.value == '' || categoria.value == 0){
            categoryError.innerHTML = 'Seleccioná una categoría, por favor.';
            categoryError.style.color = 'red';
            return true;
        }else{
            categoryError.innerHTML = '';
            return false;
        }

    }

    //Validación para Precio
    function priceProduct(){
        let priceError = document.querySelector('.priceProduct-error');
        priceError.innerHTML = '';

        if(precio.value == '' || precio.value == null){
            priceError.innerHTML = '<p>El campo no puede quedar incompleto o vacío.</p>';
            priceError.style.color='red';
            return true;
        }
        else if(precio.value <=0){
            priceError.innerHTML = '<p>El precio debe ser mayor a 0</p>';
            priceError.style.color='red';
            return true;

        }
        else if(!precio.value.match(regexNum)){
            priceError.innerHTML = '<p>El precio solo debe contener números.</p>';
            priceError.style.color='red';
            return true;

        }else{
            priceError.innerHTML='';

            return false;
        }
    }
        
    //Validación para Sección del Producto
    function seccionProduct(){
        let seccionError = document.querySelector('.section-error');

        if(seccion.value == '' || seccion.value == 0){
            seccionError.innerHTML = '<p>Seleccioná una sección, por favor.</p>';
            seccionError.style.color = 'red';
            return true;
        }else{
            seccionError.innerHTML = '';
            return false;
        }

    }

     //Validacion para descripciones
    function descriptionProduct(){
        let descriptionError = document.querySelector('.description-error')
        descriptionError.innerHTML=''
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
    function descripMaxProduct(){
        let descripMaxError = document.querySelector('.descripMax-error')
        descripMaxError.innerHTML=''
        if(desMax.value == '' || desMax.value == null){
            descripMaxError.innerHTML = '<p>El campo no puede quedar incompleto o vacío.</p>';
            descripMaxError.style.color='red';
            return true;

        }else if(desMax.value.length<20){
            
            descripMaxError.innerHTML+='<p>El campo debe contener al menos 20 caracteres.</p>'
            descripMaxError.style.color='red';
       return true
        }
        else{
            descripMaxError.innerHTML=''
        return false
        }
    }

    //Validacion para Stock's
    function stockProduct(){
        let stockError = document.querySelector('.stock-error');
        stockError.innerHTML = '';
        if(stock.value == '' || stock.value == null){
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
        else if(!stockMin.value.match(regexNum)){            minError.innerHTML = '<p>El stock solo debe contener números.</p>';
            minError.style.color='red';
            return true;

        }else{
            minError.innerHTML='';

            return false;
        }
    }
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
        else if(!stockMax.value.match(regexNum)){            maxError.innerHTML = '<p>El stock solo debe contener números.</p>';
            maxError.style.color='red';
            return true;

        }else{
            maxError.innerHTML='';

            return false;
        }

    }
    //Validación para Color
    function colorProduct(){
        let colorError = document.querySelector('.color-error');

        if(color.value == '' || color.value == 0){
            colorError.innerHTML = 'Seleccioná un color, por favor.';
            colorError.style.color = 'red';
            return true;
        }else{
            colorError.innerHTML = '';
            return false;
        }

    }

    //Validación para Marca
    function marcaProduct(){
        let marcaError = document.querySelector('.brand-error');

        if(marca.value == '' || marca.value == 0){
            marcaError.innerHTML = 'Seleccioná una marca, por favor.';
            marcaError.style.color = 'red';
            return true;
        }else{
            marcaError.innerHTML = '';
            return false;
        }

    }
    //Validación para Imagen
    function imgProduct(){
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
                name: nameProduct(),
                image: imgProduct(),
                category: categoryProduct(),
                price: priceProduct(),
                stock: stockProduct(),
                stock_min: stockMax(),
                stock_max: stockMax(),
                description: descriptionProduct(),
                extended_description: descripMaxProduct(),
                section: seccionProduct(),
                colorId: colorProduct(),
                brandId: marcaProduct()
            };
            if(hasErrors.name || hasErrors.image || hasErrors.category || hasErrors.price || hasErrors.stock || hasErrors.stock_min || hasErrors.stock_max || hasErrors.description || hasErrors.extended_description || hasErrors.section || hasErrors.colorId || hasErrors.brandId){
                e.preventDefault();
            }else{
                form.submit();
            };

        });
        
    // Llamo a las funciones
     nombre.addEventListener('blur', nameProduct);
     img.addEventListener('change', imgProduct);
     precio.addEventListener('blur', priceProduct);
     categoria.addEventListener('blur', categoryProduct);
     stock.addEventListener('blur', stockProduct);
     stockMin.addEventListener('blur', minStock);
     stockMax.addEventListener('blur', maxStock);
     description.addEventListener('blur',descriptionProduct);
     desMax.addEventListener('blur',descripMaxProduct);
     seccion.addEventListener('blur',seccionProduct);
     color.addEventListener('blur',colorProduct);
     marca.addEventListener('blur',marcaProduct);


});