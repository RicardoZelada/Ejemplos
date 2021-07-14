/*const btnMod = document.querySelector(".btn-enviar");
btnMod.addEventListener('click',()=>{
    let divResult = document.querySelector(".div-resultado");

    let textDiv = document.querySelector(".form-control").value.trim();
    let ul = document.createElement("ul");

    arreglo = [];
    arreglo.push(textDiv);

    for(let i = 0; i < arreglo.length; i++){
        let element = arreglo[i];
        
        let li = document.createElement("li");
        
        let spanPalabra = document.createElement("span");
        spanPalabra.innerText = element;

        li.appendChild(spanPalabra);
        ul.appendChild(li);
    }
    divResult.appendChild(ul);

})

function Personaje (nombre, edad, genero, estado){ //contructor para crear personajes
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
    this.estado = estado;
};

let items = document.querySelector('.form-control').value.trim();
let personaje_1 = new Personaje (items);
console.log(personaje_1);

let personaje_2 = new Personaje("Pedro Morales" , "Masculino" , 29 , "Muerto");
console.log(personaje_2);

let lista = [];
lista.push(personaje_2);
console.log(lista);*/



//------------------------------------------------

//------ Slider  de headerResponsive ----------------
var secondarySlider = new Splide( '#secondary-slider', {
    rewind      : true,
    fixedWidth  : 100,
    fixedHeight : 64,
    isNavigation: true,
    gap         : 10,
    focus       : 'center',
    pagination  : false,
    cover       : true,
    breakpoints : {
      '600': {
        fixedWidth  : 70,
        fixedHeight : 44,
      }
    }
  } ).mount();

  // Create the main slider.
  var primarySlider = new Splide( '#primary-slider', {
    type       : 'fade',
    heightRatio: 0.5,
    pagination : false,
    arrows     : false,
    cover      : true,
  } );

  // Set the thumbnails slider as a sync target and then call mount.
  primarySlider.sync( secondarySlider ).mount();