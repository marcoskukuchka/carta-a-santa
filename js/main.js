


const $form = document.querySelector('#carta-a-santa');
const nombre = $form.nombre.value;
const ciudad = $form.ciudad.value;
const comportamiento = $form.comportamiento.value;
const descripcionRegalo = $form['descripcion-regalo'].value;

/* const nombre = document.querySelector('#nombre').value; //DOM por id
const ciudad = document.querySelector('select').value;  //DOM por etiqueta
const comportamiento = document.querySelector('#carta-a-santa').comportamiento.value //DOM selecciono el formulario por id y luego busca el atributo name=comportamiento
otra forma es const nombre = document.querySelector('[name=nombre]') */



console.log(nombre);
console.log(ciudad);
console.log(comportamiento);
console.log(descripcionRegalo);




function validarNombre(nombre) {
    if (nombre.length === 0) {
        return 'Este campo debe tener al menos 1 caracter';
    }

    if (nombre.length > 50) {
        return 'Este campo debe tener menos de 50 caracteres';
    }
    return '';
}
validarNombre(nombre);

function validarDescripcionRegalo(descripcionRegalo){
    if (descripcionRegalo.length === 0) {
        return 'Este campo debe tener al menos 1 caracter';
    }
    if (descripcionRegalo.length > 250) {
        return 'Este campo debe tener menos de 250 caracteres';
    }
    return '';
}
validarDescripcionRegalo(descripcionRegalo);