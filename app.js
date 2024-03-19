const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const options = document.querySelectorAll('#formulario option');


const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,   //Letras y espacios, pueden llevar acentos.
    correo:  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono:/^\d{7,14}$/,   //7a14 numeros
    colegio: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,  //Letras y espacios, pueden llevar acentos.
    ocupacion: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,//Letras y espacios, pueden llevar acentos.
    pais: /^[a-zA-ZÀ-ÿ\s]{1,40}$/ //Letras y espacios, pueden llevar acentos.
}

const campos = {
    nombre: false,
    correo: false,
    telefono: false,
    colegio: false,
    ocupacion: false,
    pais: false
}


const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
        break;
        case "correo":
            validarCampo(expresiones.correo, e.target, 'correo');
        break;
        case "telefono":
            validarCampo(expresiones.telefono, e.target, 'telefono');
        break;
        case "colegio":
            validarCampo(expresiones.colegio, e.target, 'colegio');
        break;
        case "ocupacion":
            validarOcupacion();
        break;
        case "pais":
            validarPais();
        break;
    }
}

const validarCampo = (expresion,input,campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;
    }else{
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');  
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
    }
} 

const validarOcupacion = ()=>{
    const optionOcupacion = document.getElementById('ocupacion');
    //const optionPais  = document.getElementById("pais");
    if (optionOcupacion.value !== ""){
        document.getElementById(`grupo__ocupacion`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__ocupacion`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__ocupacion i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__ocupacion i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__ocupacion .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos['ocupacion'] = true;
    }else{
        document.getElementById(`grupo__ocupacion`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__ocupacion`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__ocupacion i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__ocupacion i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__ocupacion .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos['ocupacion'] = false;
    }
}


const validarPais= ()=>{
    const optionPais = document.getElementById('pais');
    //const optionPais  = document.getElementById("pais");
    if (optionPais.value !== ""){
        document.getElementById(`grupo__pais`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__pais`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__pais i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__pais i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__pais .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos['pais'] = true;
    }else{
        document.getElementById(`grupo__pais`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__pais`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__pais i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__pais i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__pais .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos['pais'] = false;
    }
}


inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});


const optionOcupacion = document.getElementById('ocupacion');

// Agregar event listeners para keyup y blur al campo de ocupación
optionOcupacion.addEventListener('keyup', validarOcupacion);
optionOcupacion.addEventListener('blur', validarOcupacion);   

const optionPais = document.getElementById('pais');

// Agregar event listeners para keyup y blur al campo de pais
optionPais.addEventListener('keyup', validarPais);
optionPais.addEventListener('blur', validarPais);   



formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  /* const terminos = document.getElementById('terminos'); */
  if(campos.nombre && campos.correo && campos.telefono && campos.colegio  && campos.ocupacion /* && terminos.checked */){
      formulario.reset();
    
      document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
      setTimeout(() => {
          document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo')
          document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo')
      }, 5000);
  
      document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
          icono.classList.remove('formulario__grupo-correcto');
      });
  } else {
    document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo')
  }
});

