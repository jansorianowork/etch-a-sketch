
const container = document.getElementById("container")

const defaultGridValue = 16;
let newGrid = defaultGridValue

const newCanvas = ()=>{
     newGrid = prompt("New Grid size:",`${defaultGridValue}`);
     if (newGrid > 100){
        alert("100 is the maximum pixels allowed.")
        newGrid = defaultGridValue
     }
     makeRows(newGrid)

}

// set colorvalue to variable
let colorPicked = document.getElementById("colorpicker").value


//get the color selected in the color picker
let userColor= document.getElementById("colorpicker");
   
    userColor.addEventListener("change",(e) => {
        colorPicked = e.target.value
    })

const clearRows = () =>{
    container.innerHTML = ''

}

const clearCanvas = ()=>{
    let divs = document.getElementsByTagName("div");
    for (var i = 0; i < divs.length; i++) {
       if (divs[i].className === "grid-item"){
             divs[i].style.backgroundColor = "transparent";
       }
    }
}
const eraserTool = ()=>{
    colorPicked = "transparent"
}



const makeRows = (newGrid)=>{
    // add class grid-row and grid-col to container div
    clearRows()
    container.style.gridTemplateRows = `repeat(${newGrid}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${newGrid}, 1fr)`;


    // repeat adding the div with class grid item under container
    for (counter=0;counter < newGrid * newGrid;counter++ ){

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

    makeRows(newGrid)
    