//fucntion that create a new grid if div*div

function CreateGrid(numberOfDiv) {
  let allDiv = document.querySelector("#allDiv");

  for (let i = 0; i < numberOfDiv; i++) {
    let myRow = document.createElement("div");
    myRow.classList.add("row");
    allDiv.appendChild(myRow);

    for (let j = 0; j < numberOfDiv; j++) {
      let myPixel = document.createElement("div");
      myPixel.classList.add("pixel");
      myRow.appendChild(myPixel);
    }
  }
}

// function that when you click on a button it create and delete the last grid

function makeNewGrid() {
  let button = document.querySelector("#theButton");

  button.addEventListener("click", () => {
    numberOfDiv = prompt("New Grid Size");
    deleteDiv();
    CreateGrid(numberOfDiv);
    makeColorDiv();
  });
}

// function that when you mouse pass a div it change color to black

function makeColorDiv() {
  let colorChange = document.querySelectorAll(".pixel");

  colorChange.forEach(function (colorChange) {
    colorChange.addEventListener("mouseover", () => {
      colorChange.setAttribute("style", "background: black;");
    });
  });
}

//function that delete all the div with the row class

function deleteDiv() {
  let allRow = document.querySelectorAll(".row");
  allRow.forEach((element) => {
    element.remove();
  });
}

//initial grid
let numberOfDiv = 16;

CreateGrid(numberOfDiv);
makeColorDiv();

//new grid buttonk
makeNewGrid();
