function probarValidarNombre() {
    console.assert(
        validarNombre('') === 'Este campo debe tener al menos 1 caracter',
        'Validar nombre no validó que el nombre no sea vacío');

    console.assert(
        validarNombre(
            '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
        'Este campo debe tener menos de 50 caracteres',
        'Validar nombre no validó que el nombre sea menor a 50 caracteres');

    console.assert(validarNombre('marcos') === '', 'El caso fallo con un nombre valido');

    console.assert(validarNombre('123456') === 'el campo nombre acepta solo letras',
        'validar nombre no valido que el campo tenga solo letras');
}

function probarValidarCiudad() {

    console.assert(validarCiudad('Buenos Aires') === '',
        'validar ciudad no funciono con un nombre de ciudad valido');

    console.assert(validarCiudad('') === 'este campo no puede quedar vacio',
        'validar ciudad no mostro un error cuando la ciudad esta vacia');


}

function probarValidarDescripcionRegalo() {
    console.assert(validarDescripcionRegalo('') === 'Este campo debe tener al menos 1 caracter',
        'Validar descripcionRegalo no validó que sea vacío');

}


/* probarValidarNombre();
probarValidarCiudad()
probarValidarDescripcionRegalo(); */