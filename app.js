const RED_CLASS = 'has-red-piece'
const WHITE_CLASS = 'has-white-piece'
let redTurn
var aux = '';


/*function handleClick(e){

    
    const cell = e.target
    if(e.target.classList.contains('has-red-piece')){
        selected(cell)
        console.log(e.target.index)
        currentClass = 'has-red-piece';
       // console.log(cell.parentNode.previousSibling.childNodes)
       
       // e.target.classList.remove('has-red-piece')

    }
    else if(e.target.classList.contains('has-white-piece')){
        selected(cell)
        console.log("blanca")
        currentClass = 'has-white-piece';
    }
    
    placeMark(cell, currentClass)
    //swapTurns()
    
    console.log('clicked')
    //placemark
    //check for win
    //check for draw
    //switch turns
}*/



/*
function swapTurns(){
    redTurn = !redTurn
}*/
//null mov invalido
var stateGame = [
    [null,2,null,2,null,2,null,2],
    [2,null,2,null,2,null,2,null],
    [null,2,null,2,null,2,null,2],
    [0,null,0,null,0,null,0,null],
    [null,0,null,0,null,0,null,0],
    [1,null,1,null,1,null,1,null],
    [null,1,null,1,null,1,null,1],
    [1,null,1,null,1,null,1,null],
];

var pieceSelected = false;
var z = 0, f=0;
var yselected = null;
var xselected = null;
var xposPermitidai = null;
var xposPermitidad = null;
var yposPermitida = null;
var xposComeri = null;
var xposComerd = null;
var yposComer = null;


function printBoard(){
    var board = document.getElementById("board")
    stateGame.forEach(function(row, j){
        var rowElement = document.createElement('div')
        rowElement.classList.add("board__row")
        rowElement.classList.add("row" + (j))
        row.forEach(function(cell, i){
            var cellElement = document.createElement('div')
            cellElement.classList.add("row__item")
            cellElement.classList.add("item" + (j) + "-" + (i))
            if(cell == 1){
                cellElement.classList.add("has-red-piece")
            }else if(cell == 2){
                cellElement.classList.add("has-white-piece")
            }


            rowElement.appendChild(cellElement) 
        })
        board.appendChild(rowElement)
    })
}

function test(){
    document.getElementById("board").addEventListener('click',posicion)

}

function selected(cell){
    cell.classList.add("selected")
    pieceSelected = true
}

function swapTurns(){
    redTurn = !redTurn
}


function posicion(e){

    


    ar = stateGame          //uso un nuevo arreglo porque con el stateGame no se me guardaban los cambios
    var board = document.getElementById("board")
    var x = event.x;
    var y = event.y;
    
    x = x - board.offsetLeft - 5;          //resto 5 porque no se como sacar el margen
    y = y - board.offsetTop - 5;

    var xtransf = (Math.floor(x/60))        //redondeo la division con el Math.floor para tener la posicion de las piezas
    var ytransf = (Math.floor(y/60))
    
    if(!pieceSelected && (ar[ytransf][xtransf] ==1 )){          //valido si la pieza esta deseleccionada y si esta es ficha roja o blanca
        selected(e.target)
        console.log("ficha:" +ar[ytransf][xtransf] +" x:"+ xtransf + "y:"+ ytransf + "|||" +xselected+":"+yselected);
        currentClass = "has-red-piece";
        z = 1 
        f = 2
        yselected = ytransf;
        xselected = xtransf;
        xposPermitidai = xselected -1;
        xposPermitidad = xselected +1;
        yposPermitida = yselected -1;
        xposComeri = xselected -2;
        xposComerd = xselected +2;
        yposComer = yselected -2;
        console.log("f:",f)
               
    }else if(!pieceSelected && (ar[ytransf][xtransf] ==2 )){
        selected(e.target)
        console.log("ficha:" +ar[ytransf][xtransf] +" x:"+ xtransf + "y:"+ ytransf + "|||" +xselected+":"+yselected);
        currentClass = "has-white-piece";
        f = 1

        z = 2
        yselected = ytransf;
        xselected = xtransf;
        xposPermitidai = xselected +1;
        xposPermitidad = xselected -1;
        yposPermitida = yselected +1;
        xposComeri = xselected +2;
        xposComerd = xselected -2;
        yposComer = yselected +2;
        console.log("f:",f)
    }

    if(pieceSelected && (ar[ytransf][xtransf] ==0  && ((ytransf==yposPermitida))&&(xtransf == xposPermitidad || xtransf == xposPermitidai))){
        if(currentClass== "has-red-piece"){
            ar[ytransf][xtransf]=1
            ar[yselected][xselected]=0
            pieceSelected = false
            console.log(ar[yselected][xselected], "has red piece")
            pintaTablero(ar)
        }else if(currentClass== "has-white-piece"){
            ar[ytransf][xtransf]=2
            ar[yselected][xselected]=0
            pieceSelected = false
            console.log(ar[yselected][xselected], "has white piece")
            pintaTablero(ar)
        }
    }
    if((pieceSelected && (((xtransf == xposComerd)||(xtransf == xposComeri)) && ytransf == yposComer))&&
      ((ar[yposPermitida][xposPermitidad]==f)||(ar[yposPermitida][xposPermitidai]==f))&&
      ((ar[yposComer][xposComerd]==0 ||(ar[yposComer][xposComeri]==0)))){
          console.log("click")
        if(xtransf == xposComerd){
            ar[yposComer][xposComerd]=z
            ar[yposPermitida][xposPermitidad]=0
            ar[yselected][xselected]=0
            console.log(f,z,ar[yposComer][xposComerd],
                ar[yposPermitida][xposPermitidad],
                ar[yselected][xselected])
        }else{
            ar[yposComer][xposComeri]=z
            ar[yposPermitida][xposPermitidai]=0
            ar[yselected][xselected]=0
            console.log(f,z,ar[yposComer][xposComerd],
                ar[yposPermitida][xposPermitidad],
                ar[yselected][xselected])
        }

        pieceSelected = false
        pintaTablero(ar)
    }
    if(pieceSelected && (ar[xtransf][ytransf]==z)){
        pieceSelected = false
        pintaTablero(ar)
        console.log("hola")
    }

    

    
    console.log()
    
}




function pintaTablero(ar){
    var board = document.getElementById("board")
    while (board.firstChild) {
        board.removeChild(board.lastChild);         //limpio el tablero
      }
    
    ar.forEach(function(row, j){                   // lo pinto con el arreglo modificado
        var rowElement = document.createElement('div')
        rowElement.classList.add("board__row")
        rowElement.classList.add("row" + (j))
        row.forEach(function(cell, i){
            var cellElement = document.createElement('div')
            cellElement.classList.add("row__item")
            cellElement.classList.add("item" + (j) + "-" + (i))
            if(cell == 1){
                cellElement.classList.add("has-red-piece")
            }else if(cell == 2){
                cellElement.classList.add("has-white-piece")
            }


            rowElement.appendChild(cellElement) 
        })
        board.appendChild(rowElement)
    })

    console.log(ar)
}

window.onload = function() {
    printBoard()
    test()
    
}

