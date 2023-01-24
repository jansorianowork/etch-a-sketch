
const container = document.getElementById("container")

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

// document.getElementByClassName('container').on('mouseover', '.gridSquare', function(){
// 		this.css('background-color', 'white');
// 	});

    container.addEventListener('mouseover', (event)=>{
        event.target.style.backgroundColor="#000000"
    })
    makeRows(100,100)
