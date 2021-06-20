let cotizacionDolar = 42.5;
let valorEnDolares;
let usuario;

class Usuario {
  constructor(nombre, cedula, correo) {
    this.nombre = nombre;
    this.cedula = cedula;
    this.correo = correo;
    this.conversiones = [];
  }

  agregarConversion(conversion) {
    this.conversiones.push(conversion);
  }
}

function inicializar() {
  crearUsuario();
  cambioDolaresPesos();
}

function crearUsuario() {
  nombre = prompt("Ingrese su nombre");
  cedula = prompt("Ingrese su cedula");
  correo = prompt("Ingrese su correo");
  usuario = new Usuario(nombre, cedula, correo);
}

function cambioDolaresPesos() {
  valorEnDolares = prompt(
    "Ingrese el valor que quiere convertir de Dólares a Pesos Uruguayos"
  );
  convertir(valorEnDolares, cotizacionDolar);
}

function convertir(valorEnDolares, cotizacionDolar) {
  if (isNaN(valorEnDolares)) {
    alert("Debe ingresar un número");
    cambioDolaresPesos();
  } else {
    let resultado = valorEnDolares * cotizacionDolar;
    usuario.agregarConversion(resultado);
    alert(valorEnDolares + " dólares son: $" + resultado + " (pesos Uruguayos)\n");
    if (confirm('Quiere realizar otra conversión?')) {
      cambioDolaresPesos();
    } else {
      alert("Hola, " + usuario.nombre + "!\n"
        + "Su cédula es: " + usuario.cedula + "\n"
        + "Su correo es: " + usuario.correo + "\n\n"
        + "Historial de Conversiones:\n" + usuario.conversiones.map(x => "$" + x).join("\n"))
    }
  }
}

inicializar();

