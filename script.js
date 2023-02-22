const f_msg = document.querySelector('#f_msg');
//const f_nome = document.querySelector('#f_nome');
//const f_nota = document.querySelector('#f_nota');
const fields = document.querySelectorAll('[required]');

for (let field of fields){
    field.addEventListener('invalid', customValidation);
    field.addEventListener('blur', customValidation);
}

function customValidation(event){
    event.preventDefault();
    let field = event.target;
    let error = verifyError(field);
    console.log(field.name);
    if(error){
         f_msg.innerHTML = field.validationMessage +' ('+ field.name +')';
         field.style.border = '2px solid red';
    }else{
        field.style.border = '2px solid #130f0d';
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

document.querySelector('form')
.addEventListener('sbmit', event =>{
    event.preventDefault();
})


/*
document.querySelector('#btn_validar').addEventListener('click',(event) =>{
    event.preventDefault();
    let msg = null;
    if(!f_nota.checkValidity()){
        msg = f_nota.validationMessage;
    }
    f_msg.innerHTML = msg;
});*/
