const f_msg = document.querySelector('#f_msg');
const f_txArea = document.querySelector('#f_descricao');
const fields = document.querySelectorAll('[required]');


for (let field of fields){
    field.addEventListener('invalid', customValidation);
    field.addEventListener('blur', customValidation);
}

function customValidation(event){
    event.preventDefault();
    let field = event.target;
    let error = verifyError(field);
    
    if(error){
         f_msg.innerHTML = field.validationMessage +' ('+ field.name +')';
         field.style.border = '2px solid red';
    }else{
        field.style.border = '2px solid #7c7c7c';
        f_msg.innerHTML = '';
    }
}

function verifyError(err){
    let foundError = false
    for(let error in err.validity){
       if(err.validity[error] && !err.validity.valid){
            foundError = error;
       }
    }
    return foundError;
}

getUrl();

function getUrl(){
    let url = window.location.href;
    let urlSucess = document.querySelector('#url');

    url = url.substring(0,42);

   urlSucess.value = url + urlSucess.value
}
