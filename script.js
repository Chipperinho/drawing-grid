//getting parent div and creating counter

let parent = document.getElementById('grid-container')
let yCount = 16

//creating first grid

function createSquares(yCount, yCount){
    for (j = 1; j <= yCount; j++) {

        for (i = 1; i <= yCount; i++){

            let squares = document.createElement('div')
            
            squares.className = 'square'
            parent.appendChild(squares)

        }
    }
    document.getElementById("grid-container").style.gridTemplateColumns=`repeat(${yCount},1fr)`
    document.getElementById("grid-container").style.gridTemplateRows=`repeat(${yCount},1fr)`
}

createSquares(yCount, yCount)

//making all squares active on mouse over

function colorSelector(colors){
    let squareClick = document.querySelectorAll(".square")
    if (colors == 'black') {
        squareClick.forEach(function(item) {
        item.addEventListener('mouseover', function() {
            item.className = 'square'
            item.classList.toggle('black')
            })
        })
        console.log('black selected')
    }else if (colors == 'red') {
        squareClick.forEach(function(item) {
        item.addEventListener('mouseover', function() {
            item.className = 'square'
            item.classList.toggle('red')
            })
        })
        console.log('red selected')
    }else if (colors == 'blue') {
        squareClick.forEach(function(item) {
        item.addEventListener('mouseover', function() {
            item.className = 'square'
            item.classList.toggle('blue')
            })
        })
        console.log('blue selected')
    }else if (colors == 'green') {
        squareClick.forEach(function(item) {
        item.addEventListener('mouseover', function() {
            item.className = 'square'
            item.classList.toggle('green')
            })
        })
        console.log('green selected')
    }else if (colors == 'yellow') {
        squareClick.forEach(function(item) {
        item.addEventListener('mouseover', function() {
            item.className = 'square'
            item.classList.toggle('yellow')
            })
        })
        console.log('yellow selected')
    }
}

//function for new grid

function createGrid(gridSize){

    //getting current children amount
    let parentNew = document.getElementById('grid-container')

    //deleting all children at above length
    /* for (x = 1; x <= parentLength.childElementCount; x++) {
        parent.removeChild(parent.lastChild)
    } */

    parentNew.innerHTML = "";   

    //setting css grid rows and columns to the new gridsize
    document.getElementById("grid-container").style.gridTemplateColumns=`repeat(${gridSize},1fr)`
    document.getElementById("grid-container").style.gridTemplateRows=`repeat(${gridSize},1fr)`

    //creating and appending the new children
    for (y = 1; y <= gridSize; y++) {
        for (k = 1; k <= gridSize; k++) {
            let squares = document.createElement('div')
            
            squares.className = 'square'
            parent.appendChild(squares)
        }
    }   
}

//function for button

function gridCreate(){
    let gridSize = prompt("Enter desired grid size (max is 100)", "")
    createGrid(gridSize)
}



