let color = "black";
let click = true;

document.addEventListener("DOMContentLoaded", function(){
    createBoard(16);

    document.querySelector("body").addEventListener("click", function(e){
        if(e.target.tagName != "BUTTON"){
            click = !click;
            let sketch = document.querySelector(".draw");                           
            if(click){
                sketch.innerHTML = "Now you can draw";                              // if clicked displays this message
            }
            else{
                sketch.innerHTML = "You're not allowed to draw"
            }
        }
    })

    let popupButton = document.querySelector(".size");
    popupButton.addEventListener("click", function(){
        let scale = getSize();
        createBoard(scale);
    })
})

function createBoard(scale){
    let board = document.querySelector(".board");

    board.style.gridTemplateColumns = `repeat(${scale}, 1fr)`;                    //creates the coluumns of the grid
    board.style.gridTemplateRows = `repeat(${scale}, 1fr)`;                       // creates the rows of the grid

    let numDivs = scale * scale;

    for(let i = 0; 1 < numDivs; i++){
        let div = document.createElement("div");                                  //created new div  
        div.addEventListener("mouseover", colorDiv)                               //added a hovering(mouseover) effect to the div
        board.insertAdjacentElement("beforeend", div);
    }

}

function getSize(){
    let input = prompt("what size should the board be?");
    let message = document.querySelector(".message");
    if(input == ""){
        message.innerHTML = "Please provide a number";
    }
    else if(input < 0 || input > 100){                                            // boolean to check that 0<input<100
        message.innerHTML = "Provide a number between 1 and 100";
    }
    else{
        message.innerHTML = "You're now playing!"
        return input;
    }
}

function colorDiv(){                                                                     // function to set click to color chosen
    if(click){
        if(color == "random"){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`       // hex code for random colors
        }
        else{
            this.style.backgroundColor = 'black'
        }
    }
}

function setColor(colorChoice){                                                         // function to set color
     color = colorChoice;
}

function resetButton(){
    let divs = document.querySelectorAll("div")
    divs.forEach((div) => div.style.backgroundColor = "white")
}