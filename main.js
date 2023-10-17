let rtdo = 0;
let memoria = 0;
let opcionMenu = 0;
let opcionSecundaria = 0;

function numeroEnteroValido(texto) {
    let numero = 0;
    do { 
        numero = parseInt(prompt(texto));
        if (isNaN(numero)) {
            alert("Digite un número válido");
        }
    } while (isNaN(numero));
    return numero;
}

function numeroDecimalValido(texto) {
    let numero = 0;
    do { 
        numero = parseFloat(prompt(texto));
        if (isNaN(numero)) {
            alert("Digite un número válido");
        }
    } while (isNaN(numero));
    return numero;
}

function menuPrincipal() {
    let opcionMenuValida = false;
    let opcion = 0;
    do {
        opcion = numeroEnteroValido("CALCULADORA BASICA \nSeleccione la operación a realizar: \
        \n1. Suma \n2. Resta \n3. Multiplicación \n4. División \n5. Elevar a una potencia \
        \n6. Sumar a la memoria \n7. Restar de la memoria \n8. Mostrar acumulado en memoria \n9. Terminar");
        if (opcion > 0 && opcion <= 9) {
            opcionMenuValida = true;
        }
    } while(opcionMenuValida = false)
    return opcion;
}

function menuLimpiar() {
    let opcionMenuValida = false;
    let opcion = 0;
    do {
        opcion = numeroEnteroValido("CALCULADORA BASICA \nSeleccione la operación a realizar: \
        \n1. Mantener el valor en memoria \n2. Limpiar la memoria");
        if (opcion > 0 && opcion <= 2) {
            opcionMenuValida = true;
        }
    } while(opcionMenuValida = false)
    return opcion;
}

alert("BIENVENIDO A NUESTRA CALCULADORA BASICA");
do {
    let nro1 = 0;
    let nro2 = 0;
    opcionMenu = menuPrincipal();
    switch (opcionMenu) {
        case 1: //SUMAR
            nro1 = numeroDecimalValido("Escriba el primer número a sumar");
            nro2 = numeroDecimalValido("Escriba el segundo número a sumar");
            rtdo = nro1 + nro2;
            alert("La suma de " + nro1 + " y " + nro2 + " es: " + rtdo);
            break;
        case 2: // RESTAR
            nro1 = numeroDecimalValido("Escriba el primer número");
            nro2 = numeroDecimalValido("Escriba el número que quiere restar");
            rtdo = nro1 - nro2;
            alert("La resta de " + nro1 + " y " + nro2 + " es: " + rtdo);
            break;
        case 3: // MULTIPLICAR
            nro1 = numeroDecimalValido("Escriba el primer número");
            nro2 = numeroDecimalValido("Escriba el segundo número a multiplicar");
            rtdo = nro1 * nro2;
            alert("La multiplicación de " + nro1 + " y " + nro2 + " es: " + rtdo);
            break;
        case 4: // DIVIDIR
            nro1 = numeroDecimalValido("Escriba el dividendo");
            nro2 = numeroDecimalValido("Escriba el divisor");
            rtdo = nro1 / nro2;
            alert("La división entre " + nro1 + " y " + nro2 + " es: " + rtdo);
            break;
        case 5: // POTENCIA
            nro1 = numeroDecimalValido("Escriba el número base");
            nro2 = numeroDecimalValido("Escriba la potencia");
            rtdo = nro1 ** nro2;
            alert(nro1 + " elevado a la potencia " + nro2 + " es: " + rtdo);
            break;
        case 6: // SUMAR A LA MEMORIA
            memoria += rtdo;
            alert("Hemos sumado " + rtdo + " a la memoria y su nuevo valor es: " + memoria);
            break;  
        case 7: // RESTAR A LA MEMORIA
            memoria -= rtdo;
            alert("Hemos restado " + rtdo + " a la memoria y su nuevo valor es: " + memoria);
            break;  
        case 8: // MOSTRAR MEMORIA ACUMULADA
            alert("El valor en memoria es: " + memoria);
            opcionSecundaria = menuLimpiar();
            if (opcionSecundaria = 2) {
                memoria = 0;
            }
            break;
        case 9:
            alert("Gracias por utilizar nuestra calculadora básica ;)");
            break;
    }
} while (opcionMenu != 9)