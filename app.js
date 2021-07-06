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

function selected(cell){
    cell.classList.add("selected")
    pieceSelected = true
}

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
]

var pieceSelected = false

var yselected = null
var xselected = null


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




function posicion(e){

    ar = stateGame
    var board = document.getElementById("board")
    var x = event.x;
    var y = event.y;
    //resto 5 porque no se como sacar el margen
    x = x - board.offsetLeft - 5;
    y = y - board.offsetTop - 5;

    var xtransf = (Math.floor(x/60))
    var ytransf = (Math.floor(y/60))
    //redondeo la division con el Math.floor
    if(!pieceSelected && (ar[ytransf][xtransf] ==1 )){
        selected(e.target)
        console.log("ficha:" +ar[ytransf][xtransf] +" x:"+ xtransf + "y:"+ ytransf + "|||" +xselected+":"+yselected);
        currentClass = "has-red-piece";
        yselected = ytransf;
        xselected = xtransf;
        
               
    }else if(!pieceSelected && (ar[ytransf][xtransf] ==2 )){
        selected(e.target)
        console.log("ficha:" +ar[ytransf][xtransf] +" x:"+ xtransf + "y:"+ ytransf + "|||" +xselected+":"+yselected);
        currentClass = "has-white-piece";
        yselected = ytransf;
        xselected = xtransf;
        
    }

    

    if(pieceSelected && (ar[ytransf][xtransf] ==0 )){
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

    
    console.log()
    
}




function pintaTablero(ar){
    var board = document.getElementById("board")
    while (board.firstChild) {
        board.removeChild(board.lastChild);
      }
    //limpia tablero para crearlo con la modificacion 
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

    console.log(ar)
}

window.onload = function() {
    printBoard()
    test()
    
}

