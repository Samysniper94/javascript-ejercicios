let cotizacionDolar = 42.5;
let valorEnDolares;
let nombre;
let documento;
let correo;
let usuario;

class Usuario {
  constructor(nombre, documento, correo) {
    this.nombre = nombre;
    this.documento = documento;
    this.correo = correo;
    this.conversiones = [];
  }

  agregarConversion(conversion) {
    this.conversiones.push(conversion);
  }
}

// tomo los datos y llamo a la funcion de covertir
function cambioDolaresPesos() {
  nombre = document.getElementById('nombre').value;
  documento = document.getElementById('documento').value;
  correo = document.getElementById('correo').value;
  valorEnDolares = document.getElementById('monto_usd').value;
  usuario = new Usuario(nombre, documento, correo);
  convertir(valorEnDolares, cotizacionDolar);
}

// realizo la conversion, la agrego a la propiedad 'conversiones' del objeto usuario y agrego al historial en el DOM
function convertir(valorEnDolares, cotizacionDolar) {
  let resultado = valorEnDolares * cotizacionDolar;
  usuario.agregarConversion(resultado);
  var li_conversion = document.createElement("li");
  li_conversion.innerText = 'USD ' + valorEnDolares + ' son $UY ' + resultado;
  document.getElementById('historial_conversiones').appendChild(li_conversion);
  document.getElementById('monto_usd').value = "";
}

// para chequear si el DOM ya esta cargado
function documentoListo(fn) {
  if (document.readyState === "complete" || document.readyState === "interactive") {
      setTimeout(fn, 1);
  } else {
      document.addEventListener("DOMContentLoaded", fn);
  }
}    

documentoListo(function() {
  // si el DOM esta cargado, escuchamos el evento click al boton con el ID 'convertir'
  document.getElementById('convertir').addEventListener('click', function(){
    cambioDolaresPesos();
  });
});
