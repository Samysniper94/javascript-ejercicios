let correo = prompt("Ingrese correo");
let pais = prompt("Ingrese pais");
let edad = prompt("Ingrese edad");
let mayorDeEdad = false;
let uruguayo = false;

if((pais !="") && ((pais == "uruguay") || (pais == "URUGUAY") || (pais == "Uruguay"))){
    uruguayo = true;
}else{
    alert("Error: Pagina valida solo en el territorio uruguayo");
}

if(edad >= 18) {
    mayorDeEdad = true;
}else{
    alert("Este sitio web es para mayores de 18 años de edad, no puede acceder al mismo");
}

if(uruguayo && mayorDeEdad) {
    alert("Bienvenido al sitio");
}else{
    close();
}