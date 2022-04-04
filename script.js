//Etch-A-Sketch

const wind = document.querySelector(`#window`);

let input = prompt(`Please type the amount of boxes you want to make up the height and width`);
let numberBox = parseInt(input);
let i;

let boxCalculator = function() {
        let totalBox = numberBox ** 2;
        const boxContainer = [];
        for (i = 0; i < totalBox; i++) {
            boxContainer[i] = document.createElement(`div`);
            boxContainer[i].classList.add(`box`);
            let boxSideLength =  ((700  / numberBox));
            boxContainer[i].setAttribute(`style`, `height: ${boxSideLength}px; width: ${boxSideLength}px `);
            wind.appendChild(boxContainer[i]);
        }
        return totalBox;
}

boxCalculator();


const boxes = document.querySelectorAll(`.box`); 


//Wrap the code below into one function that represents 'click' mode. 
//Make a new function called drag mode, that encompasses another forEach
//Make sure that a mode is clicked and that the button changes to represent the mode change
//Make sure turning on one mode turns off the other
//Add a clear button that removes everything
//Add a color picker on that right that has ROYGBluePBlackW
//Make the color pickers buttons that are highlighted when you pick one
//Make `click` mode and `black` color default



//Bottom Row Button Hovering CSS Change

let buttons = document.querySelectorAll(`.button`);

buttons.forEach(button => {
    button.addEventListener(`mouseover`, function buttonHoverOver() {
        button.classList.add(`buttonHovered`);
    });

    button.addEventListener(`mouseleave`, function buttonHoverLeave() {
        button.classList.remove(`buttonHovered`);
    })

});


//Click Mode

let clickMode = document.querySelector(`#clickMode`);
let activateClickMode = function(){

    

    boxes.forEach(box => {
        box.addEventListener(`click`, function clickOutcome() {
            box.classList.add(`filled`);
        });

        box.addEventListener(`mouseover`, function hoverOver() {
            box.classList.add(`hovered`);
        });

        box.addEventListener(`mouseleave`, function hoverLeave() {
            box.classList.remove(`hovered`);
        });

    });

    clickMode.classList.add(`buttonClicked`);
    dragMode.classList.remove(`buttonClicked`);  

    //window.document.removeEventListener(`mouseover`, hoverOverTwo());

};

clickMode.addEventListener(`click`, activateClickMode);



//Drag Mode

let dragMode = document.querySelector(`#dragMode`);
let activateDragMode = function() {
   

    boxes.forEach(box => {
        box.addEventListener(`mouseover`, function hoverOverTwo() {
            box.classList.add(`filled`);
        }); 

    });

    dragMode.classList.add(`buttonClicked`);
    clickMode.classList.remove(`buttonClicked`);
    
};

dragMode.addEventListener(`click`, activateDragMode);


//Make the drag function global and then remove it within the click button by doing removeEventListener





//let totalBox = numberBox ** 2;


/* Test to make sure box model works

let box = document.createElement(`div`);
box.classList.add(`box`);
box.textContent = `Yahoo`;
wind.appendChild(box);

box.setAttribute(`style`, `height: 350px; width: 350px;`);

*/


