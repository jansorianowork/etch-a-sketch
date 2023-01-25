
const container = document.getElementById("container")

// set colorvalue to variable
let colorPicked = document.getElementById("colorpicker").value

//get the color selected in the color picker
let userColor= document.getElementById("colorpicker");
   
    userColor.addEventListener("change",(e) => {
        colorPicked = e.target.value
    })


const makeRows = (rows,cols)=>{
    // add class grid-row and grid-col to container div

    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;


    // repeat adding the div with class grid item under container
    for (counter=0;counter < rows * cols;counter++ ){

        // add div tag grid-item based on grid set
        let cell = document.createElement("div")
        // add classname grid-item to add border

        container.appendChild(cell).className="grid-item";
    }

}

    // mouse over the canvas
    container.addEventListener('mouseover', (event)=>{
        event.target.style.backgroundColor=colorPicked
    })
    makeRows(64,64)