//Exercises

/* 1) Triangulo de #. Para este ejercicio, construir un programa que una vez concluido nos permita ver en consola un triangulo
formado con #, de la siguiente manera:
#
##
###
####
#####
*/

//let hash = "";

//for (let i = 0; i <= 4; i++) {
//  console.log(`${(hash = hash + "#")}`);
//}

/*2) Numeros pares e impares. Hacer un programa que itere por los numeros del 0 al 10 y, por cada uno de ellos, imprima el numero y
nos diga si es par o impar. 
Ejemplo:
0 es par
1 es impar
2 es par
...
*/

//for (let i = 0; i <= 10; i++) {
//  if (i % 2 === 0) console.log(i + " es par");
//  else console.log(i + " es impar");
//}

/*3) FizzBuzz. Generar un programa que itere del 1 al 15. Por cada iteracion, mostrar por consola lo siguiente:
1- Si el numero es multimo de 3, mostrar la palabra "Fizz"
2- Si el numero es multiplo de 5, mostrar la palabra "Buzz"
3- Si el numero es multiplo de 3 y 5, mostrar la palabra "FizzBuzz"
4- En los demas casos, mostrar el numero
*/

//for (let i = 1; i <= 15; i++) {
//  if (i % 15 === 0) {
//    console.log("FizzBuzz");
//  } else if (i % 3 === 0) {
//    console.log("Fizz");
//  } else if (i % 5 === 0) {
//    console.log("Buzz");
//  } else console.log(i);
//}

//CODING CHALLENGE

/*1) REGISTRO.
  Vamos a construir un programa que permita al usuario registrarse en nuestra aplicacion. Para ello, en primer lugar vamos a
  mostrar un mensaje que le de la bienvenida al usuario y le pregunte si desea registrarse (PISTA: recuerden que habia un metodo del 
  navegador que permitia hacer este tipo de consultas al usuario, devolviendo true o false segun el caso).
  En caso de que el usuario acepte registrarse, le vamos a pedir que ingrese su nombre de usuario en primer lugar. El nombre de usuario
  tiene que tener por lo menos 3 caracteres y no va a ser case sensitive, por lo que lo vamos a almacenar en minusculas, independientemente
  de como lo ingrese el usuario. Agregar la validacion necesaria para que en caso de que el usuario no cumpla con las concidiones, 
  se muestre un mensaje de error.
  Si el nombre de usuario es ingresado correctamente, le vamos a pedir al usuario que ingrese una contrasena, la que tiene que tener
  por lo menos 6 caracteres. La contrasena tiene que ser case sensitive, por lo que se respetan las mayusculas y minusculas segun lo ingrese
  el usuario.
  En caso de que la contrasena no cumpla con el requisito anterior, se debe mostrar un mensaje de error. De lo contrario, se debe mostrar un
  mensaje de exito informando al usuario que se completo el registro. (OTRA PISTA: Para ver como validar la longitud de un string, pueden ver el siguiente
    enlace: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length )
*/

const registration = confirm(
  "Bienvenido al sitio. Si desea registrarse haga click en OK"
);

if (registration) {
  let nameUser = prompt("Ingrese un nombre");

  if (nameUser.length >= 3) {
    nameUser = nameUser.toLocaleLowerCase();
    let passUser = prompt("Ingrese una contraseña");
    if (passUser.length >= 6) {
      alert("Se registro de manera exitosa");
    } else {
      alert("La contraseña debe tener 6 caracteres o mas");
    }
  } else {
    alert("El nombre de usuario debe tener 3 caracteres o mas");
  }
} else {
  alert("Lo esperamos cuando guste");
}
