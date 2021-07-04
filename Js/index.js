const btnMod = document.querySelector(".btn-enviar");
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
console.log(lista);



//------------------------------------------------
