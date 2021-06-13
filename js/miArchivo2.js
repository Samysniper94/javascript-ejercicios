let cotizacionDolar = 42.5;
let valorEnDolares;

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
    alert(
      valorEnDolares + " dólares son: $" + resultado + " (pesos Uruguayos)"
    );
  }
}

cambioDolaresPesos();