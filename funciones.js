const INMUEBLES = [
  {
    ciudad: "Madrid",
    modalidad: "venta",
    tipo: "Casa",
    precio: 400000,
    precioTexto: "400.000€",
    foto: "imagenes/cards/card1.jpg"
  },
  {
    ciudad: "Barcelona",
    modalidad: "alquiler",
    tipo: "Piso",
    precio: 2000,
    precioTexto: "2.000€ /mes",
    foto: "imagenes/cards/card2.jpg"
  },
  {
    ciudad: "Valencia",
    modalidad: "venta",
    tipo: "Ático",
    precio: 300000,
    precioTexto: "300.000€",
    foto: "imagenes/cards/card3.jpg"
  },
  {
    ciudad: "Tenerife",
    modalidad: "venta",
    tipo: "Casa",
    precio: 500000,
    precioTexto: "500.000€",
    foto: "imagenes/cards/card4.jpg"
  },
  {
    ciudad: "León",
    modalidad: "venta",
    tipo: "Casa Rural",
    precio: 700000,
    precioTexto: "700.000€",
    foto: "imagenes/cards/card5.jpg"
  },
  {
    ciudad: "Sevilla",
    modalidad: "venta",
    tipo: "Casa Rural",
    precio: 1200000,
    precioTexto: "1.200.000€",
    foto: "imagenes/cards/card6.jpg"
  },
  {
    ciudad: "Granada",
    modalidad: "venta",
    tipo: "Casa",
    precio: 2000000,
    precioTexto: "2.000.000€",
    foto: "imagenes/cards/card7.jpg"
  },
  {
    ciudad: "Córdoba",
    modalidad: "alquiler",
    tipo: "Casa",
    precio: 1200,
    precioTexto: "1.200€ /mes",
    foto: "imagenes/cards/card8.jpg"
  },
  {
    ciudad: "Palma",
    modalidad: "venta",
    tipo: "Casa",
    precio: 150000,
    precioTexto: "150.000€",
    foto: "imagenes/cards/card9.jpg"
  },
  {
    ciudad: "Bilbao",
    modalidad: "alquiler",
    tipo: "Piso",
    precio: 800,
    precioTexto: "800€ /mes",
    foto: "imagenes/cards/card10.jpg"
  },
  {
    ciudad: "Burgos",
    modalidad: "venta",
    tipo: "Ático",
    precio: 500000,
    precioTexto: "500.000€",
    foto: "imagenes/cards/card11.jpg"
  },
  {
    ciudad: "Madrid",
    modalidad: "alquiler",
    tipo: "Casa",
    precio: 1200,
    precioTexto: "1.200€ /mes",
    foto: "imagenes/cards/card12.jpg"
  },
  {
    ciudad: "Barcelona",
    modalidad: "venta",
    tipo: "Casa Rural",
    precio: 400000,
    precioTexto: "400.000€",
    foto: "imagenes/cards/card13.jpg"
  },
  {
    ciudad: "Madrid",
    modalidad: "venta",
    tipo: "Casa",
    precio: 600000,
    precioTexto: "600.000€",
    foto: "imagenes/cards/card14.jpg"
  },
  {
    ciudad: "Barcelona",
    modalidad: "venta",
    tipo: "Piso",
    precio: 700000,
    precioTexto: "700.000€",
    foto: "imagenes/cards/card15.jpg"
  },
  {
    ciudad: "Madrid",
    modalidad: "venta",
    tipo: "Casa",
    precio: 900000,
    precioTexto: "900.000€",
    foto: "imagenes/cards/card16.jpg"
  },
  {
    ciudad: "Barcelona",
    modalidad: "venta",
    tipo: "Casa",
    precio: 500000,
    precioTexto: "500.000€",
    foto: "imagenes/cards/card17.jpg"
  },
  {
    ciudad: "Valencia",
    modalidad: "alquiler",
    tipo: "Casa Rural",
    precio: 1800,
    precioTexto: "1.800€ /mes",
    foto: "imagenes/cards/card18.jpg"
  },
  {
    ciudad: "Tenerife",
    modalidad: "venta",
    tipo: "Casa",
    precio: 400000,
    precioTexto: "400.000€",
    foto: "imagenes/cards/card19.jpg"
  },
  {
    ciudad: "Sevilla",
    modalidad: "venta",
    tipo: "Casa",
    precio: 500000,
    precioTexto: "500.000€",
    foto: "imagenes/cards/card20.jpg"
  }
];

const POLITICA_DE_PRIVACIDAD = ["E-Home te informa sobre su Política de Privacidad respecto del tratamiento y protección de los datos de carácter personal de los usuarios y clientes que puedan ser recabados por la navegación o contratación de servicios a través del sitio Web albergado en forma local",
"En este sentido, el Titular garantiza el cumplimiento de la normativa vigente en materia de protección de datos personales, reflejada en la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y de Garantía de Derechos Digitales (LOPD GDD).",
"Cumple también con el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016 relativo a la protección de las personas físicas (RGPD). El uso de sitio Web implica la aceptación de esta Política de Privacidad así como las condiciones incluidas en el Aviso Legal."];

const BTN_ENV_CORREO = document.querySelector("#enviarCorreo");
const DIV_LISTADOINMUEBLES = document.querySelector("#listadoInmuebles");
const CHECK_TERMINOS = document.querySelector("#terminos");
const BTN_BUSCAR = document.querySelector("#buscar");
const SEL_CIUDAD = document.querySelector("#ciudad");
const SEL_MODALIDAD = document.querySelector("#modalidad");
const SEL_TIPO = document.querySelector("#tipo");
const SEL_PRECIO = document.querySelector("#precio");
const PROGRESS_BARRA = document.querySelector("#barra");
const BTN_INFO = document.querySelector("#info");
const PAG_HOME = document.querySelector("#pagHome");
const PAG_INFO = document.querySelector("#pagInfo");
const TBODY = document.querySelector("tbody");
const CHECK_TABLA = document.querySelector("#tabla");
const DIV_LISTADOINMUEBLES_TABLA = document.querySelector('#listadoInmueblesTabla');
const DIV_MODAL_FOTO_TABLA = document.querySelector("#divModal");
const FOTO_MODAL = document.querySelector("#fotoModal");
const P_POLITICA_PRIVACIDAD = document.querySelector("#politicaPrivacidad");
const BOTONES_PAGINATION_POLITICA_PRIVACIDAD = document.querySelectorAll("#botonesPoliticaPrivacidad li");
const BOTON_POLITICA_PRIVACIDAD = document.querySelector("#botonPoliticaPrivacidad");
const BOTON_CONDICIONES_DE_USO = document.querySelector("#botonCondicionesDeUso");
const BOTON_COOKIES = document.querySelector("#botonCookies");
const SPAN_NUM_VIVIENDAS = document.querySelector("#numViviendas");
const BOTON_RESET = document.querySelector("#botonReset");
const FORMULARIO = document.querySelector("#formulario");
const LINK_ALERTA_PRIVACIDAD = document.querySelector("#alertaPrivacidad");
const LINK_TERMINOS = document.querySelector("#linkTerminos");
const LINK_COOKIES = document.querySelector("#alertaCookies");

var paginaAnterior = BOTONES_PAGINATION_POLITICA_PRIVACIDAD[0];
var width = 0;
var contadorFila = 1;

BTN_ENV_CORREO.addEventListener("click", enviarCorreo);
BTN_BUSCAR.addEventListener("click", cargando);
BOTONES_PAGINATION_POLITICA_PRIVACIDAD.forEach(e => e.addEventListener('click', botonesPoliticaDePrivacidad))
BOTON_POLITICA_PRIVACIDAD.addEventListener('click', ventanaPoliticaPrivacidad);
BOTON_CONDICIONES_DE_USO.addEventListener('click', ventanaCondicionesDeUso);
BOTON_COOKIES.addEventListener('click', ventanaCookies);
BOTON_RESET.addEventListener('click', resetearFormulario);
LINK_ALERTA_PRIVACIDAD.addEventListener('click', ventanaPoliticaPrivacidad);
LINK_TERMINOS.addEventListener('click', ventanaCondicionesDeUso);
LINK_COOKIES.addEventListener('click', ventanaCookies);

$("#buscar").popover("enable");
$("#botonAyuda").popover("enable");

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

function enviarCorreo() {
    $(".toast").toast("show");
}

$('[data-spy="scroll"]').each(function () {
    var $spy = $(this).scrollspy('refresh')
});

function ventanaPoliticaPrivacidad() {
    $('#modalPoliticaPrivacidad').modal('show');
}

function ventanaCondicionesDeUso() {
    $('#modalCondicionesDeUso').modal('show');
}

function ventanaCookies() {
    $('#modalCookies').modal('show');
}

function cargando() {
  if (CHECK_TERMINOS.checked) {
      $("#buscar").popover("disable");
    PROGRESS_BARRA.parentNode.classList.remove("oculto");
    let i = 0;
    if (i == 0) {
      i = 1;
      var id = setInterval(frame, 250);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          i = 0;
          width = 0;
          PROGRESS_BARRA.style.width = width + "%";

          buscarResultados();
          PROGRESS_BARRA.parentNode.classList.add("oculto");
        } else {
          width += 30;
          PROGRESS_BARRA.style.width = width + "%";
        }
      }
    }
  } else {
      $("#buscar").popover("enable");
  }
}

function buscarResultados() {
  DIV_LISTADOINMUEBLES.innerHTML = "";
    let filtrado = INMUEBLES.filter(
        e =>
            (e.ciudad == SEL_CIUDAD.value || SEL_CIUDAD.value == "todos") &&
            (e.modalidad == SEL_MODALIDAD.value || SEL_MODALIDAD.value == "todos") &&
            (e.tipo == SEL_TIPO.value || SEL_TIPO.value == "todos") &&
            (e.precio >= SEL_PRECIO.value || SEL_PRECIO.value == "todos")
  );
    if (filtrado.length) {
        
    if (CHECK_TABLA.checked) {
      TBODY.innerHTML = "";
      DIV_LISTADOINMUEBLES_TABLA.classList.remove('oculto');
      filtrado.forEach(e => mostrarInmubleEnTabla(e));
    } else {
      if(!DIV_LISTADOINMUEBLES_TABLA.classList.contains('oculto')){
        DIV_LISTADOINMUEBLES_TABLA.classList.add('oculto');
      }
      DIV_LISTADOINMUEBLES.innerHTML = "";
        filtrado.forEach(e => mostrarInmuble(e));
        SPAN_NUM_VIVIENDAS.textContent = DIV_LISTADOINMUEBLES.childElementCount;
    }
  } else {
    DIV_LISTADOINMUEBLES.innerHTML =
      '<div class="alert alert-info alert-dismissible fade show mb-0 tamanoLetraFormulario mb-4" role="alert">Lo sentimos, no hay ningún inmueble con los datos indicados' +
      '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
      '<span aria-hidden="true">&times;</span>' +
      "</button>" +
      "</div >";
  }
  contadorFila = 1;
}

function resetearFormulario() {
    DIV_LISTADOINMUEBLES.innerHTML = "";
    TBODY.innerHTML = "";
    FORMULARIO.reset();
    if (!DIV_LISTADOINMUEBLES_TABLA.classList.contains('oculto')) {
        DIV_LISTADOINMUEBLES_TABLA.classList.add('oculto');
    }
    SPAN_NUM_VIVIENDAS.textContent = 20;
}

function mostrarInmuble(inmueble) {
  let div = document.createElement("div");
  let imagen = document.createElement("img");
  let divBody = document.createElement("div");
  let ciudad = document.createElement("h3");
  let tipo = document.createElement("h4");
  let precio = document.createElement("h2");
  div.style.display = "inline-block";
  div.classList.add("card", "m-3", "naranja", "text-light", "text-center");
  imagen.addEventListener("click",function(){FOTO_MODAL.src = inmueble.foto; $('#exampleModalCenter').modal('show');});
  imagen.src = inmueble.foto;
  imagen.style.height = "200px";
  imagen.style.width = "250px";
  imagen.style.objectFit = "cover";
  imagen.classList.add("card-img-top","zoom");
  divBody.classList.add("card-body");
  ciudad.classList.add("card-title");
  ciudad.textContent = inmueble.ciudad;
  tipo.textContent = inmueble.tipo;
  precio.classList.add("card-text");
  precio.textContent = inmueble.precioTexto;
  divBody.appendChild(ciudad);
  divBody.appendChild(tipo);
  divBody.appendChild(precio);
  div.appendChild(imagen);
  div.appendChild(divBody);
  DIV_LISTADOINMUEBLES.appendChild(div);
}

function mostrarInmubleEnTabla(inmueble) {
  let tr = document.createElement("tr");
  let th = document.createElement("th");
  let fotoTD = document.createElement("td");
  let imagen = document.createElement("img");
  imagen.addEventListener("click",function(){FOTO_MODAL.src = inmueble.foto; $('#exampleModalCenter').modal('show');});
  imagen.classList.add('zoom');
  imagen.style.height = "40px";
  imagen.style.width = "60px";
  imagen.style.objectFit = "cover";
  let ciudad = document.createElement("td");
  let tipo = document.createElement("td");
  let precio = document.createElement("td");
  th.scope = "row";
  th.textContent = contadorFila;
  imagen.src = inmueble.foto;
  ciudad.textContent = inmueble.ciudad;
  tipo.textContent = inmueble.tipo;
  precio.textContent = inmueble.precioTexto;
  fotoTD.appendChild(imagen);
  tr.appendChild(th);
  tr.appendChild(fotoTD);
  tr.appendChild(ciudad);
  tr.appendChild(tipo);
  tr.appendChild(precio);
  TBODY.appendChild(tr);
  contadorFila++;
}

function botonesPoliticaDePrivacidad(){
  if(paginaAnterior.classList.contains('active')){
      paginaAnterior.classList.remove('active');
  }
  paginaAnterior.classList.remove('active');
  P_POLITICA_PRIVACIDAD.textContent = POLITICA_DE_PRIVACIDAD[this.firstChild.textContent - 1];
  BOTONES_PAGINATION_POLITICA_PRIVACIDAD[this.firstChild.textContent - 1].classList.add('active');
    paginaAnterior = this;
}