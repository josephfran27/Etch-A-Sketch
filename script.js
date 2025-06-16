
//main container for the grid
const gridContainer = document.createElement('div');
gridContainer.id = 'grid-container';
document.body.appendChild(gridContainer);

//SIZE INPUT
//function for size input
function adjustSize() {
    const size = parseInt(inputBox.value);
    if(isNaN(size) || size < 1 || size > 100) {
        alert('Please enter a size between 1 and 100');
        return;
    }

    gridContainer.innerHTML = '';

    for(let i = 0; i < size * size; i++) {
        const gridCell = document.createElement('div');
        gridCell.classList.add('grid-cell');

         //event listener for the hover & color changing effect
        gridCell.addEventListener('mouseenter', () => {
            gridCell.style.backgroundColor = 'black';
        });

        gridContainer.appendChild(gridCell);
    }

    //update grid layout
    const allCells = document.querySelectorAll('.grid-cell');
    const flexBasis = `calc(100% / ${size})`;
    allCells.forEach(cell => {
        cell.style.flex = `0 0 ${flexBasis}`;
    })
}

//size input div
const inputDiv = document.createElement('div');
inputDiv.id = 'input-div';
//size input label
const inputLabel = document.createElement('p');
inputLabel.textContent = 'Enter the size of the grid: ';
//size input box
const inputBox = document.createElement('input');
inputBox.type = "number";
//size apply button
const inputButton = document.createElement('button');
inputButton.id = 'input-button';
inputButton.textContent = 'Apply';
inputButton.addEventListener('click', adjustSize);
inputBox.addEventListener('keydown', (event) => {
    if(event.key == 'Enter') {
      adjustSize();
    }
});

document.body.appendChild(inputDiv);
inputDiv.appendChild(inputLabel);
inputDiv.appendChild(inputBox);
inputDiv.appendChild(inputButton);
document.body.insertBefore(inputDiv, gridContainer);



