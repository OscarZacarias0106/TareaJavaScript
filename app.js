document.write("<h1>Hello World</h1>");
//tipos de datos
"Hello World" //string
'Hello World' //string

console.log("this is a string");

var nombredelusuario = "john";
let lastname= "Carter";
nameuser = "pepe";
const Pi = 3.1415;
const id = "user1";
let id = "user1";

//camelcase
let nombreDePersona = "gordon";
console.log(nombredelusuario)

//procesar datos numericos y comparacion
let numberOne = 60;
let numberTwo = 100;
let result = numberOne > numberTwo;

console.log(result);


//comparar contraseñas
let passwordDB = "pepe123"

let input = "123456"

let result = input == passwordDB;

if (result === true) {
    console.log("Login Correcto");
}
if (result === false) {
    console.log("Login Incorrecto");
}

// puntuacion
let score = 70;

if (score > 30) {
    console.log("you need to practice more");
}

else if(score >15){
    console.log("Estas Mejorando");
}

else{
    console.log("you need to follow this tutorial");
}


//tarjeta
let typeCard = "debit card";

switch(typecard){
    case "Debit Card":
        console.log("This is a debit card");
        break;

    case "Credit Card":
        console.log("This is a credit Card");
        break;
        default:
            console.log("No Card");
}

//bucle resta
let count = 50;
while(count > 0) {
    console.log("Hello World");
    count = count -1;
}

//bucle suma
let count = 1;
while(count < 50) {
    console.log(count);
    count++;
}

//ciclo for
let names = ["ryan", "joe", "john"];

for(let i = names.length -1; i >= 0; i--) { 
    console.log(names[i]);
}

//funciones
function greeting(name) {
    console.log(name)
    console.log("Hello");
}

greeting("Markus");

100000 // number
-2.3

//boolean
true
false

//array
['joe' ,'ryan' , 'martha']
[1, 2, 3]
[true, false, true, false]

//Object
'ryan'
70.4
14
true

{  
    "username": 'ryan',
    "score": 70.4,
    "hours": 14,
    "proffesional": true

}

{  
    "username": 'joe',
    "score": 0.4,
    "hours": 1,
    "proffesional": false
    
}