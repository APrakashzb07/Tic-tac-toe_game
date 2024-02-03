let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turn0 = true; // playerX, player0

const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
];

const resetGame = () =>{
  turn0 = true;
  enableBoxes();
  msgContainer.classList.add("hide");//This is a property of the selected HTML element that provides access to the element's list of classes. The classList property is an object that has methods for adding, removing, and toggling classes on the element.
  //.add("hide"): The add method of classList is used to add a new class to the list of classes for the selected element. In this case, it adds the class "hide" to the element.
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
       // console.log("box was clicked");
        if(turn0){ //player0
          box.innerText = "o";
          turn0 = false;
        }else{ //playerx
          box.innerText = "x";
          turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disableBoxes = () =>{
  for(let box of boxes){
    box.disabled = true;
  }
}

const enableBoxes = () =>{
  for(let box of boxes){
    box.disabled = false;
    box.innerText = "";//for erasing the inner text
  }
}

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");// for visible since it is hide check html and css code
  disableBoxes();
}


const checkWinner = () => {
  for(let pattern of winPatterns){
    //console.log(pattern[0], pattern[1], pattern[2]);
    //console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);

    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
      if(pos1Val === pos2Val && pos2Val === pos3Val){
        console.log("Winner", pos1Val);

        showWinner(pos1Val);
      }
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);