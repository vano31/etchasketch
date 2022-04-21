//Etch-A-Sketch


const wind = document.querySelector(`#window`);

let input = prompt(`Please type the amount of boxes you want to make up the height and width`);
let numberBox = parseInt(input);
let i;
let totalBox;

let boxCalculator = function() {
        totalBox = numberBox ** 2;
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
let boxArray = Array.from(boxes);

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



let clickMode = document.querySelector(`#clickMode`);
let dragMode = document.querySelector(`#dragMode`);
let clearPixels = document.querySelector(`#clearPixels`);

clickMode.addEventListener(`click`, () => {
  clickMode.classList.add(`buttonClicked`);
  dragMode.classList.remove(`buttonClicked`);
  clearPixels.classList.remove(`buttonClicked`);
  switcher();
})

dragMode.addEventListener(`click`, () => {
  dragMode.classList.add(`buttonClicked`);
  clickMode.classList.remove(`buttonClicked`);
  clearPixels.classList.remove(`buttonClicked`);
  switcher();
})

clearPixels.addEventListener(`click`, () => {
  clearPixels.classList.add(`buttonClicked`);
  clickMode.classList.remove(`buttonClicked`);
  dragMode.classList.remove(`buttonClicked`);
  switcher();
  
})




let switcher = function(){
  if (clickMode.classList.contains(`buttonClicked`)) {
    
    wind.onclick = function(e) {
      let box = e.target.closest(`.box`);
      console.log(box);
      box.classList.add(`filled`);
    } 
    wind.onmouseover = function(e) {
      return;
    }
    
  } else if (dragMode.classList.contains(`buttonClicked`)) {
    
      wind.onmouseover = function(e) {
        let box = e.target.closest(`.box`);
        box.classList.add(`filled`);
        console.log(box);
    }
  } else if (clearPixels.classList.contains(`buttonClicked`)) {
      for (oneBox of boxArray) {
        oneBox.classList.remove(`filled`);
      }
      wind.onmouseover = function(e) {
        return;
      }
      wind.onclick = function(e) {
        return;
      }
  }
}







