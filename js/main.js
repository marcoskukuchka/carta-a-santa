function validarNombre(nombre) {
    if (nombre.length === 0) {
        return 'Este campo debe tener al menos 1 caracter';
    }

    if (nombre.length > 50) {
        return 'Este campo debe tener menos de 50 caracteres';
    }

    if (!/^[a-z]+$/i.test(nombre)) { // i = incase sensitive (no importan mayusculas o minusculas)
        return 'el campo nombre solo acepta letras'
    }
    return '';
}


function validarCiudad(ciudad) {
    if (ciudad.length === 0) {
        return 'Este campo debe tener una ciudad seleccionada';

    }
    return '';
}


function validarDescripcionRegalo(descripcionRegalo) {
    if (descripcionRegalo.length === 0) {
        return 'Este campo debe tener al menos 1 caracter';
    }
    if (descripcionRegalo.length > 100) {
        return 'Este campo debe tener menos de 100 caracteres';
    }

    if (!/^[a-z0-9]+$/i.test(descripcionRegalo)) {
        return "este campo solo acepta numeros letras puntos comas y guiones bajos"
    }
    return '';
}

function validarFormulario(event) {

    const $form = document.querySelector("#carta-a-santa");

    const nombre = $form.nombre.value;
    const ciudad = $form.ciudad.value;
    const descripcionRegalo = $form["descripcion-regalo"].value;

    const errorNombre = validarNombre(nombre);
    const errorCiudad = validarCiudad(ciudad);
    const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

    const errores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        'descripcion-regalo': errorDescripcionRegalo
    };


    menejarErrores(errores);

    event.preventDefault();

}

function menejarErrores(errores) {

    const keys = Object.keys(errores);
    const $errores = document.querySelector('#errores');

    keys.forEach(function(key) {
        const error = errores[key];

        if (error) {
            $form[key].className = "error";

            //agregar errores a la pagina
            const $error = document.createElement('li'); //crea elemento
            $error.innerText = error; // asigna contenido 
            $errores.appendChild($error); // inserta el elemento (nodo) al final del cuerpo del documento

        } else {
            $form[key].className = "";
        }
    });




}



const $form = document.querySelector('#carta-a-santa');
$form.onsubmit = validarFormulario;