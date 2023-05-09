/*----- menu mobile-----*/
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const divContainer = document.querySelector('.section-1');
const closeButton = document.querySelector('#span-icon-close');
const propaganda = document.querySelector('#propaganda')

function mostrarMobileMenu(){
    mobileMenu.classList.toggle('none');
}
menuHamIcon.addEventListener('click', mostrarMobileMenu);



/*----- Section-----*/

const inicio = "/html/index.html";// creamos la constante inicio asignandole la direccion para utilizarla en el siguiente if
function cerrarPropaganda(){
  propaganda.classList.toggle('none');
}
closeButton.addEventListener('click', cerrarPropaganda);


const namestList = [];
    namestList.push({
    nombre: 'Samco',
    url:'../html/samco.html'
    });
    namestList.push({
    nombre: 'Bomberos',
    url:'../html/bomberos.html'
    });
    namestList.push({
    nombre: 'Policia',
    url:'../html/policia.html'
    });
    namestList.push({
    nombre: 'Colectivo',
    url:'../html/colectivo.html'
    });
    namestList.push({
    nombre: 'Remises',
    url:'../html/remises.html'
    });
    namestList.push({
    nombre: 'Farmacias',
    url:'../html/farmacias.html'
    });
    namestList.push({
    nombre: 'Comuna',
    url:'../html/comuna.html'
    });
    namestList.push({
    nombre: 'Guc',
    url:'../html/guc.html'
    });
    namestList.push({
    nombre: 'Juzgado de falta',
    url:'../html/juzgado.html'
    });
    namestList.push({
    nombre: 'Religion',
    url:'../html/religion.html'
    });

if(inicio === location.pathname){// creamos el 'if' para que compare inicio (ver constante creada) con la locacion actual de la ventana 'locatio.pathname', si devuelve true ejecute el siguiente codigo
    for(names of namestList){
        const div = document.createElement('a'); //Creamos el elemento "a" con el nombre "div".
        div.setAttribute('href',names.url); // Agregamos el "href".
        div.classList.add('name-card'); // Agregamos la clase previamente creada en CSS
        
        const parrafo = document.createElement('p'); //creamos el elemento "p".
        parrafo.classList.add('parrafo-p'); // Agregamos la clase CSS.
        parrafo.innerText = names.nombre;//
        
       
        div.appendChild(parrafo);// div es el primer elemento creado ('a') que con appendChild le introducimos el elemento ('p') creado con el nombre de parrafo
           
        console.log(div);
       
           divContainer.appendChild(div)
            
        }
        closeButton.addEventListener('click',cerrarPropaganda);    
}

/*---- Remises----*/

let ventanaRemises = "/html/remises.html";
let ventanaDirecciones = "/html/direcciones.html"
if(ventanaRemises === location.pathname){
  console.log(location.pathname);
  fetch('/main/remises.json')
  .then(response => response.json())
  .then(data => {
    // Acceder al arreglo de objetos dentro de la propiedad "remises"
    const remises = data.remises;
    // Acceder al contenedor donde se colocarán los datos
    const containerInfoRemis = document.getElementById('divContainer-infoRemis');
    // Iterar sobre el arreglo de objetos
    remises.forEach(item => {

      const divCardRemises = document.createElement('div');
      divCardRemises.classList.add('div-card-remis');


      // Crear elementos HTML y colocar los valores obtenidos en ellos
      let nombresInfoRemis = document.createElement('p');
      nombresInfoRemis.classList.add('nombresInfoRemis-p');
      nombresInfoRemis.innerText = item.nombre;

      let imgInfoRemis = document.createElement('img');
      imgInfoRemis.classList.add('imgInfo');
      imgInfoRemis.src = item.img;

      let telInfoRemis = document.createElement('input');
      telInfoRemis.setAttribute('type', 'tel');
      telInfoRemis.classList.add('telInfoRemis');
      telInfoRemis.value = item.telefono;

      // colocar los elementos HTML en el contenedor
      divCardRemises.appendChild(nombresInfoRemis);
      divCardRemises.appendChild(imgInfoRemis);
      divCardRemises.appendChild(telInfoRemis);
      containerInfoRemis.appendChild(divCardRemises)
      console.log(containerInfoRemis);


    });

    containerInfoRemis.addEventListener('click', (event) => {
      if (event.target.classList.contains('telInfoRemis')) {
        const telefono = event.target.value;
        window.location.href = `tel:${telefono}`;
      }
    });
  })
}else if(ventanaDirecciones === location.pathname){
  console.log(location.pathname);
  fetch('/main/farmacias.json')
  .then(response => response.json())
  .then(data => {
    // Acceder al arreglo de objetos dentro de la propiedad "remises"
    const remises = data.farmacias;
    // Acceder al contenedor donde se colocarán los datos
    const containerInfo = document.getElementById('section-direccionesFarmacia');
    
    // Iterar sobre el arreglo de objetos
    remises.forEach(item => {
      // Crear elementos HTML y colocar los valores obtenidos en ellos
      const divDireccionesInfo = document.createElement('div');
      divDireccionesInfo.classList.add('divDireccionesInfo')

      let nombresInfo = document.createElement('p');
      nombresInfo.classList.add('nombresInfo-p');
      nombresInfo.innerText = item.nombre;

      let imgInfo = document.createElement('img');
      imgInfo.classList.add('imgInfo');
      imgInfo.src = item.img;

      let direccionInfo = document.createElement('p');
      direccionInfo.classList.add('direccionInfo-p');
      direccionInfo.innerText = item.direccion;

      let telInfo = document.createElement('input');
      telInfo.setAttribute('type','tel');
      telInfo.classList.add('telInfo');
      telInfo.value = item.telefono;

      // colocar los elementos HTML en el contenedor
      divDireccionesInfo.appendChild(nombresInfo);
      divDireccionesInfo.appendChild(imgInfo);
      divDireccionesInfo.appendChild(telInfo);
      divDireccionesInfo.appendChild(direccionInfo);
      containerInfo.appendChild(divDireccionesInfo);
      console.log(containerInfo);
    });
  })
  .catch(error => {
    console.error(error);
  });
}



