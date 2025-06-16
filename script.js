

//main container for the grid
const gridContainer = document.createElement('div');
gridContainer.id = 'grid-container';
document.body.appendChild(gridContainer);

//grid cell
for (let i = 0; i < 16 * 16; i++) {
    const gridCell = document.createElement('div');
    gridCell.classList.add('grid-cell');
    gridContainer.appendChild(gridCell);
}


