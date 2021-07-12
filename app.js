const RED_CLASS = 'has-red-piece'
const WHITE_CLASS = 'has-white-piece'
let redTurn = false
var stateGame = [//null mov invalido
    [null,2,null,2,null,2,null,2],
    [2,null,2,null,2,null,2,null],
    [null,2,null,2,null,2,null,2],
    [0,null,0,null,0,null,0,null],
    [null,0,null,0,null,0,null,0],
    [1,null,1,null,1,null,1,null],
    [null,1,null,1,null,1,null,1],
    [1,null,1,null,1,null,1,null],
];
var resetTable = [...stateGame];
var pieceSelected = false;
var z = null, f=null;
var yselected = null;
var xselected = null;
var xposPermitidai = null;
var xposPermitidad = null;
var yposPermitida = null;
var xposComeri = null;
var xposComerd = null;
var yposComer = null;

function muestraTurno(){
    var turno = document.getElementById("turnText")
    if(!redTurn){
        turno.innerHTML = "Turno de las rojas"
    }else if(redTurn){
        turno.innerHTML = "Turno de las blancas"
    }
}

function pintaTablero(ar){
    var board = document.getElementById("board")
    while (board.firstChild) {
        board.removeChild(board.lastChild);      
      }
    ar.forEach(function(row, j){                  
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

function listeners(){
    document.getElementById("board").addEventListener('click',posicion)
    document.getElementById("newGameButton").addEventListener('click',resetGame)
}

function selected(cell){
    cell.classList.add("selected")
    pieceSelected = true
}

function swapTurns(){
    redTurn = !redTurn
}

function posicion(e){
    const currentClass = redTurn ? WHITE_CLASS : RED_CLASS
             //uso un nuevo arreglo porque con el stateGame no se me guardaban los cambios
    var board = document.getElementById("board")
    var ar = [...stateGame]
    var x = event.x;
    var y = event.y;
    
    x = x - board.offsetLeft - 5;          //resto 5 porque no se como sacar el margen
    y = y - board.offsetTop - 5;

    var xtransf = (Math.floor(x/60))        //redondeo la division con el Math.floor para tener la posicion de las piezas
    var ytransf = (Math.floor(y/60))

    if(pieceSelected && (ar[ytransf][xtransf]==z)){ //condicion para deseleccionar la ficha al hacer click de nuevo
        pieceSelected = false
        pintaTablero(ar);
        return
    }
    if(!pieceSelected && (ar[ytransf][xtransf] ==1 && currentClass==RED_CLASS )){          
        selected(e.target)
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
    }else if(!pieceSelected && (ar[ytransf][xtransf] ==2 && currentClass==WHITE_CLASS )){
        selected(e.target)
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
    }
    if(pieceSelected && (ar[ytransf][xtransf] ==0  && ((ytransf==yposPermitida))&&
      (xtransf == xposPermitidad || xtransf == xposPermitidai))){
        ar[ytransf][xtransf]=z
        ar[yselected][xselected]=0
        pieceSelected = false
        pintaTablero(ar)
        swapTurns();
    }
    if((pieceSelected && (((xtransf == xposComerd)||(xtransf == xposComeri)) && ytransf == yposComer))&&
      ((ar[yposPermitida][xposPermitidad]==f)||(ar[yposPermitida][xposPermitidai]==f))&&
      ((ar[yposComer][xposComerd]==0 ||(ar[yposComer][xposComeri]==0)))){
        if(xtransf == xposComerd){
            ar[yposComer][xposComerd]=z
            ar[yposPermitida][xposPermitidad]=0
            ar[yselected][xselected]=0
        }else{
            ar[yposComer][xposComeri]=z
            ar[yposPermitida][xposPermitidai]=0
            ar[yselected][xselected]=0
        }
        pieceSelected = false
        pintaTablero(ar)
        swapTurns();
    }   
    muestraTurno();
}

function resetGame(){  
    var conf = confirm("¿Seguro desea reiniciar la partida?")
    if (conf == true){
        stateGame = null
        stateGame = [
            [null,2,null,2,null,2,null,2],
            [2,null,2,null,2,null,2,null],
            [null,2,null,2,null,2,null,2],
            [0,null,0,null,0,null,0,null],
            [null,0,null,0,null,0,null,0],
            [1,null,1,null,1,null,1,null],
            [null,1,null,1,null,1,null,1],
            [1,null,1,null,1,null,1,null],
        ];
        pintaTablero(stateGame);
        pieceSelected = false;
    }else{
        return
    }     
}

window.onload = function() {
    muestraTurno()
    pintaTablero(stateGame)
    listeners()
}

