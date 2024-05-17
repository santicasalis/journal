const formulario = document.getElementById('formulario')
const inputs = document.querySelectorAll('#formulario input')
const expresiones = {
	
	nombre: /^[a-zA-ZÀ-ÿ\s]{4,40}$/,
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}
const campos ={
    nombre: false,
    email: false
}

const validarFormulario = (e) =>{
    switch (e.target.name){
        case "nombre":
               validarCampo(expresiones.nombre, e.target, 'nombre');
        break;

        case "email":
              validarCampo(expresiones.email, e.target, 'email');
        break;
    }
}

const validarCampo = (expresiones, inputs, campo) =>{
    if (expresiones.test(inputs.value)) {
        document.getElementById(`grupo_${campo}`).classList.remove('formulari_grupo_incorrect');
        document.getElementById(`grupo_${campo}`).classList.add('formulari_grupo-correcto');
        document.querySelector(`#grupo_${campo} i`).classList.add('fa-circle-check');
        document.querySelector(`#grupo_${campo} i`).classList.remove('fa-circle-xmark');
        document.querySelector(`#grupo_${campo} .error_input`).classList.remove('formulario_exito-activo');
        campos[campo]= true;
    }
    else
    {
        document.getElementById(`grupo_${campo}`).classList.add('formulari_grupo_incorrect');
        document.getElementById(`grupo_${campo}`).classList.remove('formulari_grupo-correcto');
        document.querySelector(`#grupo_${campo} i`).classList.add('fa-circle-xmark');
        document.querySelector(`#grupo_${campo} i`).classList.remove('fa-circle-check');
        document.querySelector(`#grupo_${campo} .error_input`).classList.add('formulario_exito-activo');
        campos[campo]= false;
    }
}
inputs.forEach((input) =>{
    input.addEventListener('keyup',validarFormulario);
    input.addEventListener('blur',validarFormulario);
});

formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
        
        const terminos = document.getElementById('terminos');
        const fechaNacimiento = document.getElementById('fn').value;
        
        
        if (campos.nombre&&campos.email && terminos.checked && fechaNacimiento){ 
            formulario.reset();
            document.getElementById('formulario_exito').classList.add('formulario_exito-activo');
            setTimeout(()=>{
                document.getElementById('formulario_exito').classList.remove('formulario_exito-activo');
            }, 4000);
            document.querySelectorAll('.formulari_grupo-correcto').forEach((icono) =>{
                icono.classList.remove('formulari_grupo-correcto')
            });
            document.getElementById('formulario_msj').classList.remove('formulario_msj-activo');
        }
        else{
            document.getElementById('formulario_msj').classList.add('formulario_msj-activo');
            console.log(campos);
            console.log(SelecSexo);
        }
});