window.onload = function() {

    /*var board = document.getElementById("board")
    
    var row = document.createElement('div')
    row.classname = "board__row row1"

    var cell1 = document.createElement('div')
    cell.classname = "row__item item1-1"

    var cell2 = document.createElement('div')
    cell2.classname = "row__item item-2 has-white-piece"
    
    row.appendChild(cell1)
    row.appendChild(cell2)

    board.appendChild(row)*/

    //1 = ficha roja
    //2 = ficha blanca
    //0 = vacio
    var stateGame = [
        [0,2,0,2,0,2,0,2],
        [2,0,2,0,2,0,2,0],
        [0,2,0,2,0,2,0,2],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [1,0,1,0,1,0,1,0],
        [0,1,0,1,0,1,0,1],
        [1,0,1,0,1,0,1,0],
    ]

    var board = document.getElementById("board")
    
    stateGame.forEach(function(row, j){
        var rowElement = document.createElement('div')
        rowElement.className = "board__row row" + (j + 1)
        

        row.forEach(function(cell, i){
            var cellElement = document.createElement('div')
            cellElement.className = "row__item item" + (j + 1) + "-" + (i + 1)

            if(cell == 1){
                cellElement.className += " has-red-piece"
            }else if(cell == 2){
                cellElement.className += " has-white-piece"
            }

            rowElement.appendChild(cellElement)
          
        })
        board.appendChild(rowElement)
    })
   
}
