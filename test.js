let newGameBtn = document.querySelector("#new-btn")
let msgCointainer = document.querySelector(".msg-cointainer")
let reset = document.getElementById("reset-btn")
let msg = document.querySelector("#msg")

document.addEventListener('DOMContentLoaded', () => {
  const boxes = document.querySelectorAll('.box');
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  let turn0 = true;

  boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
      console.log(`Box ${index} was clicked`);
      if (turn0) {
        box.innerText = 'O';
        turn0 = false;
      } else {
        box.innerText = 'X';
        turn0 = true;
      }
      box.disabled = true;
      checkWinner();
    });
  });

   const disableboxes = () => {
    for(let box of boxes){
      box.disabled = true;
    }
   }


  const showWinner = (winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`
    msgCointainer.classList.remove("hide");
    disableboxes();
    call();
  }
  function call(){
    msgCointainer.classList.remove("hide");
    reset.classList.add("hide");
  }
  function checkWinner() {
    for (let pattern of winPatterns) {
      let pos1 = boxes[pattern[0]].innerText;
      let pos2 = boxes[pattern[1]].innerText;
      let pos3 = boxes[pattern[2]].innerText;

      // console.log(`Checking pattern: ${pattern}`);
      // console.log(`Box values: ${pos1 ? pos1.innerText : 'undefined'}, ${pos2 ? pos2.innerText : 'undefined'}, ${pos3 ? pos3.innerText : 'undefined'}`);

      // if (pos1 && pos2 && pos3) {
      //   let pos1Val = pos1.innerText;
      //   let pos2Val = pos2.innerText;
      //   let pos3Val = pos3.innerText;

{
  
        if (pos1 !== '' && pos2 !== '' && pos3!== '') {
          if (pos1 === pos2 && pos2 === pos3) {
            console.log('Winner:', pos1);
            showWinner(pos1);

            return; // Stop checking once we find a winner
          }
        }
      }
    }
  }

  document.getElementById('reset-btn').addEventListener('click', resetGame);
  document.getElementById("reset-btn").addEventListener("click",hide)

   function hide(){
    msg-msgCointainer.classList.add("hide");
   }
  function resetGame() {
    boxes.forEach(box => {
      box.innerText = '';
      box.disabled = false;
    });
    turn0 = true;
  }
  document.getElementById("new-btn").addEventListener("click",newGame)
  function newGame(){
    boxes.forEach(box => {
      box.innerText = '';
      box.disabled = false;
      msgCointainer.classList.add("hide")
      reset.classList.remove("hide");
    });
    turn0 = true;
  }
});
