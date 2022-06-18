let xCount = 16
let yCount = 16
let parent = document.getElementById('grid-container')

function createSquares(){
    for (j = 1; j <= yCount; j++) {

        for (i = 1; i <= xCount; i++){

            let squares = document.createElement('div')
            
            squares.className = 'square'
            parent.appendChild(squares)
            
            console.log(j)
        }
    }    
    return
}

createSquares()

const squareClick = document.querySelectorAll(".square")
squareClick.forEach(function(item) {
    item.addEventListener('click', function() {
        item.classList.toggle('active')
    })
})

console.log('done')