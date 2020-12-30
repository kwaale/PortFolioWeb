
//Cambiar texto portafolio
//Letra telefonos, mas grande -600 querys

//Flecha adelante y atras
let index = 0;
//Funcion de Inicio
const start = ()=>{
    proyectoSiguiente(nodosProyectos);
    document.getElementById('siguiente').addEventListener('click',()=>proyectoSiguiente(nodosProyectos));
    document.getElementById('atras').addEventListener('click',()=>proyectoAnterior(nodosProyectos));
    //setInterval(()=>proyectoSiguiente(nodosProyectos),2500)
}
//Proyectos para agregar
const proyectos = [
    {
        nombre:"Breaking Bad API",
        link:"https://kwaale.github.io/BreakingBadApi/",
        img:"img/LogoBrBa.svg",
        altern:"Breaking Bad",
    },{
        nombre:"Cifrado del Cesar",
        link:"https://kwaale.github.io/CifradoCesar/",
        img:"img/cifrado.jpg",
        altern:"Cifrado Cesar",
    },{
        nombre:"Tic Tac Toe",
        link:"https://kwaale.github.io/TicTacToe-LaVieja/",
        img:"img/LogoTicTacToe.jpg",
        altern:"Tic Tac Toe",
    },{
        nombre:"Dados",
        link:"https://kwaale.github.io/JuegoDados/",
        img:"img/Dados.jpg",
        altern:"Dados",
    }
]
//Creando nodo para proyecto
const createNode = ({nombre, link, img, altern})=>{
    const nodo =
    `<div id='nodo'>
    <a class="proyect-box" href=${link} target="_blank">
    <img class='img' src=${img} alt=${altern}/>
    </a>
    <h2 id='nombre-proyecto'>${nombre}</h2>
    </div>`
    return nodo;
}
//Creando array de nodos, cada nodo es un proyecto.
const nodosProyectos = proyectos.map(e=>createNode(e));

//Funcion que renderiza el siguiente proyecto en el array.
function proyectoSiguiente(array){
    if(document.getElementById('nodo'))document.getElementById('nodo').remove()
    if(index < array.length - 1) index++;
    else index = 0;
    let elemento = array[index];
    document.getElementById('atras').insertAdjacentHTML('afterend',elemento);
}
//Funcion que renderiza el anterior proyecto en el array.
const proyectoAnterior = (array)=>{
    if(document.getElementById('nodo'))document.getElementById('nodo').remove()
    if(index > 0) index--;
    else index = array.length - 1;
    let elemento = array[index];
    console.log(elemento);
    console.log("Estamos aqui")
    document.getElementById('atras').insertAdjacentHTML('afterend',elemento);
}
//Llamamos a la funcion de inicio despues de la carga.
window.onload = start();
