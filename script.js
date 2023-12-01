

function CreateGrid(numberOfDiv) {
    
    let allDiv = document.querySelector("#allDiv");

        for (let i = 0; i < numberOfDiv; i++) {
        
            let myRow= document.createElement("div");
            myRow.classList.add("row");
            allDiv.appendChild(myRow);

            for (let j = 0; j < numberOfDiv; j++){
            let myPixel = document.createElement("div");
            myPixel.classList.add("pixel");
            myRow.appendChild(myPixel);

            }
        }
        
        
        

}


let numberOfDiv = 16;

CreateGrid(numberOfDiv);

let colorChange = document.querySelectorAll(".pixel");

colorChange.forEach(function(colorChange) {
    colorChange.addEventListener("mouseover", () =>{
      colorChange.setAttribute('style', 'background: black;');
    });
  });

let button = document.querySelector("#theButton");
