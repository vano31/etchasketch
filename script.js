//Etch-A-Sketch

const wind = document.querySelector(`#window`);

let input = prompt(`Please type the amount of boxes you want to make up the height and width`);
let numberBox = parseInt(input);

let boxCalculator = function() {

        let totalBox = numberBox ** 2;
        const boxContainer = [];
        for (let i = 0; i < totalBox; i++) {
            boxContainer[i] = document.createElement(`div`);
            boxContainer[i].classList.add(`box`);
            let boxSideLength =  ((700  / numberBox));
            boxContainer[i].setAttribute(`style`, `height: ${boxSideLength}px; width: ${boxSideLength}px `);
            wind.appendChild(boxContainer[i]);
        }
        return totalBox;
    
}


boxCalculator();
//let totalBox = numberBox ** 2;


/* Test to make sure box model works

let box = document.createElement(`div`);
box.classList.add(`box`);
box.textContent = `Yahoo`;
wind.appendChild(box);

box.setAttribute(`style`, `height: 350px; width: 350px;`);

*/


