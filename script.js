
//main container for everything
const mainContainer = document.createElement('div');
mainContainer.id = 'main-container';
document.body.appendChild(mainContainer);


//HEADER
const header = document.createElement('p');
header.textContent = 'Etch-A-Sketch';
header.id = 'main-header';
mainContainer.appendChild(header);


//SIZE INPUT
const inputDiv = document.createElement('div');
inputDiv.id = 'input-div';
//size input label
const inputLabel = document.createElement('p');
inputLabel.textContent = 'Enter the size of the grid: ';
//size input box
const inputBox = document.createElement('input');
inputBox.type = "number";
//size apply button/enter listener
const inputButton = document.createElement('button');
inputButton.id = 'input-button';
inputButton.textContent = 'Apply';
inputButton.addEventListener('click', adjustSize);
inputBox.addEventListener('keydown', (event) => {
    if(event.key == 'Enter') {
      adjustSize();
    }
});
mainContainer.appendChild(inputDiv);
inputDiv.appendChild(inputLabel);
inputDiv.appendChild(inputBox);
inputDiv.appendChild(inputButton);


//COLOR INPUT
let colorChoice = 'black';

//color div
const colorDiv = document.createElement('div');
colorDiv.id = 'color-div';
document.body.append(colorDiv)

//color label
const colorLabel = document.createElement('p');
colorLabel.id = 'color-label';
colorLabel.textContent = 'Color: ';
colorDiv.appendChild(colorLabel);

//black
const blackBtn = document.createElement('button');
blackBtn.id = 'black-button';
blackBtn.textContent = 'Black';
blackBtn.addEventListener('click', () => {
    colorChoice = 'black';
});
colorDiv.appendChild(blackBtn);

//red
const redBtn = document.createElement('button');
redBtn.id = 'red-button';
redBtn.textContent = 'Red';
redBtn.addEventListener('click', () => {
    colorChoice = 'red';
});
colorDiv.appendChild(redBtn);

//yellow
const yellowBtn = document.createElement('button');
yellowBtn.id = 'yellow-button';
yellowBtn.textContent = 'Yellow';
yellowBtn.addEventListener('click', () => {
    colorChoice = 'yellow';
});
colorDiv.appendChild(yellowBtn);

//green
const greenBtn = document.createElement('button');
greenBtn.id = 'green-button';
greenBtn.textContent = 'Green';
greenBtn.addEventListener('click', () => {
    colorChoice = 'green';
});
colorDiv.appendChild(greenBtn);

//blue
const blueBtn = document.createElement('button');
blueBtn.id = 'blue-button';
blueBtn.textContent = 'Blue';
blueBtn.addEventListener('click', () => {
    colorChoice = 'blue';
});
colorDiv.appendChild(blueBtn);

//erase
const eraseBtn = document.createElement('button');
eraseBtn.id = 'erase-button';
eraseBtn.textContent = 'Erase';
eraseBtn.addEventListener('click', () => {
    colorChoice = 'erase';
});
colorDiv.appendChild(eraseBtn);

//GRID
const gridContainer = document.createElement('div');
gridContainer.id = 'grid-container';
document.body.appendChild(gridContainer);

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
            if(colorChoice == 'black') {
                gridCell.style.backgroundColor = 'black';
            }
            else if(colorChoice == 'red') {
                gridCell.style.backgroundColor = 'red';
            }
            else if(colorChoice == 'yellow') {
                gridCell.style.backgroundColor = 'yellow';
            }
            else if(colorChoice == 'green') {
                gridCell.style.backgroundColor = 'green';
            }
            else if(colorChoice == 'blue') {
                gridCell.style.backgroundColor = 'blue';
            }
            else if(colorChoice == 'erase') {
                gridCell.style.backgroundColor = 'azure';
            }
            else {
                gridCell.style.backgroundColor = 'black';
            }
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




