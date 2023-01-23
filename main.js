
const container = document.getElementById("container")

const makeRows = (rows,cols)=>{
    // add class grid-row and grid-col to container div
    container.style.setProperty('--grid-rows',rows)
    container.style.setProperty('--grid-cols',cols)
    // repeat adding the div with class grid item under container
    for (counter=0;counter < (rows * cols);counter++ ){

        // add div tag grid-item based on grid set
        let cell = document.createElement("div")
        // add classname grid-item based on grid set

        container.appendChild(cell).className="grid-item";

    }

}
makeRows(16,16)