let color = "black";

document.addEventListener("DOMContentLoaded", function(){
    createBoard(32);
})

function createBoard(size){
    let board = document.querySelector(".board");

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for(let i = 0; 1 < numDivs; i++){
        let div = document.createElement("div");            //created new div  
        div.addEventListener("mouseover", colorDiv)       //added a hovering(mouseover) effect to the div
        board.insertAdjacentElement("beforeend", div);
    }

}

function getSize(){
    let input = prompt("what size will the board be?");
    let message = document.querySelector("#message");
    if(input == ""){
        message.innerHTML = "Please provide a number";
    }
    else if(input < 0 || input > 100){
        message.innerHTML = "Provide a number between 1 and 100";
    }
    else{
        message.innerHTML = "You're now playing!"
        return input;
    }
}

function colorDiv(){
    if(color == "random"){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    }
    else if(color == "eraser"){
        this.style.backgroundColor = 'white'
    }
    else{
        this.style.backgroundColor = 'black'
    }
}

function setColor(colorChoice){
     color = colorChoice;
}

function resetButton(){
    let divs = document.querySelectorAll("div")
    divs.forEach((div) => div.style.backgroundColor = "white")
}