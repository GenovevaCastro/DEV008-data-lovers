//funcion que obtiene la lista de personajes desde la url de la api
function obtenerListaPersonajes() {
  fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    //promete que devuelve algo del json
    .then(data => {
      crearListaPersonajes(data.results)
    });
}
//esta funcion recorre results elemento por elemento y manda a llamar a la funcion crear contenedor personaje html
//enviandole el elemento que se esta recorriendo en ese momento
function crearListaPersonajes(results) {
  results.forEach(element => {
    crearContenedorPersonajeHtml(element);
  });
}
//esta funcion crea el contenedor de un personaje que recibe en la variable element
function crearContenedorPersonajeHtml(element) {
  console.log(element);
//se crean las etiquetas de html "div" en js con createElement
  const divPersonajeJs = document.createElement("div");
  //al divPersonajeJs se le agrega un className para poder dar estilo en css
  divPersonajeJs.className = "divPersonajeJs";
  //al divPersonajesJs se le agrega un evento onclick 
  divPersonajeJs.onclick = function () {
    //una vez que la funcion onclick se ejecuta manda a llamar a la funcion identificacionFlotante enviandole el elemento
    identificacionFlotante(element);
  };
  const imagenPersonajeJs = document.createElement("img");
  imagenPersonajeJs.className = "imagenPersonajeJs";
  imagenPersonajeJs.src = element.image;
  //indico que divPersonajeJs es el padre de imagenPersonajeJs
  divPersonajeJs.appendChild(imagenPersonajeJs);
  const nombrePersonajeJs = document.createElement("h2");
  nombrePersonajeJs.className = "nombrePersonajeJs";
  //nombrePersonajeJs agrega un texto en html que es igual a lo que viene en element.name
  nombrePersonajeJs.innerText = element.name;
  divPersonajeJs.appendChild(nombrePersonajeJs);
  //indico que divPersonajeHtml que existe en el HTML es el padre de divPersonajeJs
  document.getElementById("divPersonajeHtml").appendChild(divPersonajeJs);
}
//crea un div flotante que muestra la informacion del personaje
function identificacionFlotante(element) {
  const infoFlotante = document.createElement("div");
  infoFlotante.id = "infoFlotante";

  const tablaInfoPersonajes = document.createElement("table");
  infoFlotante.appendChild(tablaInfoPersonajes);
  tablaInfoPersonajes.id = "tablaInfopersonajes";

  const trClose = document.createElement("tr");
  tablaInfoPersonajes.appendChild(trClose);
  const tdClose = document.createElement("td");
  trClose.appendChild(tdClose);
  const imagenCerrar = document.createElement("img");
  imagenCerrar.id = "imagenCerrar";
  imagenCerrar.src = "imagenes/cerrar.png";
  imagenCerrar.onclick = function () {
    cerrarInfoFlotante();
  };
  tdClose.appendChild(imagenCerrar);

  const trNombre = document.createElement("tr");
  tablaInfoPersonajes.appendChild(trNombre);
  const tdName = document.createElement("td");
  trNombre.appendChild(tdName);
  tdName.className = "tdPropiedad";
  tdName.innerText = "Nombre:";
  const tdDatoName = document.createElement("td");
  trNombre.appendChild(tdDatoName);
  tdDatoName.className = "tdValor";
  tdDatoName.innerText = element.name;

  const trStatus = document.createElement("tr");
  tablaInfoPersonajes.appendChild(trStatus);
  const tdStatus = document.createElement("td");
  trStatus.appendChild(tdStatus);
  tdStatus.className = "tdPropiedad";
  tdStatus.innerText = "Estatus:";
  const tdDatoStatus = document.createElement("td");
  trStatus.appendChild(tdDatoStatus);
  tdDatoStatus.className = "tdValor";
  tdDatoStatus.innerText = element.status;

  const trSpecies = document.createElement("tr");
  tablaInfoPersonajes.appendChild(trSpecies);
  const tdSpecies = document.createElement("td");
  trSpecies.appendChild(tdSpecies);
  tdSpecies.className = "tdPropiedad";
  tdSpecies.innerText = "Especie:";
  const tdDatoSpecies = document.createElement("td");
  trSpecies.appendChild(tdDatoSpecies);
  tdDatoSpecies.className = "tdValor";
  tdDatoSpecies.innerText = element.species;

  const trType = document.createElement("tr");
  tablaInfoPersonajes.appendChild(trType);
  const tdType = document.createElement("td");
  trType.appendChild(tdType);
  tdType.className = "tdPropiedad";
  tdType.innerText = "Tipo:";
  const tdDatoType = document.createElement("td");
  trType.appendChild(tdDatoType);
  tdDatoType.className = "tdValor";
  tdDatoType.innerText = element.type;

  const trGender = document.createElement("tr");
  tablaInfoPersonajes.appendChild(trGender);
  const tdGender = document.createElement("td");
  trGender.appendChild(tdGender);
  tdGender.className = "tdPropiedad";
  tdGender.innerText = "Genero:";
  const tdDatoGender = document.createElement("td");
  trGender.appendChild(tdDatoGender);
  tdDatoGender.className = "tdValor";
  tdDatoGender.innerText = element.gender;

  //------------
  document.getElementById("bodyPersonajes").appendChild(infoFlotante);
  //en esta linea se encarga de mostrar la pantalla flotante ya que en css esta oculto para que aparezca solo al dar click
  document.getElementById("infoFlotante").style.display = "block";
}
//esta se encarga de ocultarla al dar click en la X
function cerrarInfoFlotante() {
  document.getElementById("infoFlotante").style.display = "none";
}
//esta funcion se ejecuta desde que entramos a la pagina de personajes y es la que manda a llamar a la funcion obtenerListaPersonajes
obtenerListaPersonajes();

