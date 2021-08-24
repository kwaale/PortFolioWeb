let index = 0;
//Funcion de Inicio
const start = ()=>{
    //proyectoSiguiente(nodosProyectos);
    // document.getElementById('siguiente').addEventListener('click',()=>proyectoSiguiente(nodosProyectos));
    // document.getElementById('atras').addEventListener('click',()=>proyectoAnterior(nodosProyectos));
    //setInterval(()=>proyectoSiguiente(nodosProyectos),2500)
    showNodes(proyectos);
    console.log("Pasa por aqui")
}
//Proyectos para agregar
const proyectos = [
    {
        nombre:"Breaking Bad API",
        link:"https://kwaale.github.io/BreakingBadApi/",
        img:"img/BreakBaAPI.png",
        altern:"Breaking Bad",
    },{
        nombre:"Cifrado del Cesar",
        link:"https://kwaale.github.io/CifradoCesar/",
        img:"img/CifradoCesar.png",
        altern:"Cifrado Cesar",
    },{
        nombre:"Tic Tac Toe",
        link:"https://kwaale.github.io/TaTeTi/",
        img:"img/LogoTicTacToe.jpg",
        altern:"Tic Tac Toe",
    },{
        nombre:"Dados",
        link:"https://kwaale.github.io/JuegoDados/",
        img:"img/Dados.jpg",
        altern:"Dados",
    },{
        nombre:"Movies",
        link:"https://movies-sand.vercel.app/",
        img:"img/MovieSearchLogo.png",
        altern:"Movies",
    }
]
//Creando nodo para proyecto
const createNode = ({nombre, link, img, altern})=>{
    const nodo =
    `<div id='nodo'>
        <a class="proyect-box" href=${link}>
        <img class='img' src=${img} alt=${altern}/>
        </a>
        <h2 id='nombre-proyecto'>${nombre}</h2>
        </div>`
        return nodo;
    }
    //target="_blank"
// *****************************************************************
// *    Creando array de nodos, cada nodo es un proyecto.          *
// *****************************************************************
// *****************************************************************
// *    Mostrar nodos.                                             *
// *****************************************************************
const showNodes = (ps) =>{
    ps.map(e=>{
        let newNode = createNode(e);
        let elementoPadre = document.getElementById("cont-proyectos")
        elementoPadre.insertAdjacentHTML('afterbegin',newNode)
    })
}

window.onload = start();
