const gridSize =600;
const defaultGridNum=16;

const grid = document.querySelector(".grid");
const button = document.querySelector(".setSize")

grid.style.width = grid.style.height = `${gridSize}px`;

button.addEventListener('click',setSize);

function generateGrid(size) {
    let widthOrHeight = `${(gridSize / size) - 2}px`;
    if(grid.hasChildNodes()){
        grid.innerHTML = '';
    }
    for (let i = 0; i < (size * size); i++){
        let div = document.createElement("div");
        div.classList.add("cell");

        div.style.width = div.style.height = widthOrHeight;
        div.addEventListener('mouseover', changeBackgroundColor);
        grid.appendChild(div);
    }
}

function changeBackgroundColor() {
    // this.style.backgroundColor = 'red';
    this.classList.add("cell-hovered");

}

function setSize(){
    let gSize = prompt("Please Enter the Grid Size:");
    if(gSize>100 || gSize===""){
        alert("Gride size exceeds limit of 1-100!");
    }
    else if(isNaN(gSize)){
        alert("Please enter a valid number");
    }
    else{
        generateGrid(gSize);
    }
}

generateGrid(defaultGridNum);

