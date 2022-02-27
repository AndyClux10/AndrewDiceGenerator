const dice1 = "./images/557px-Dice-1.svg.png"
const dice2 = "./images/557px-Dice-2.svg.png"
const dice3 = "./images/1200px-Dice-3.svg.png"
const dice4 = "./images/557px-Dice-4.svg.png"
const dice5 = "./images/557px-Dice-5.svg.png"
const dice6 = "./images/1200px-Dice-6a.svg.png"
const diceBoard = document.querySelector(".dice")

const diceArray = [dice1, dice2, dice3, dice4, dice5, dice6]

// Grab the value from my input: check
// Generate a random die face:
// 


function diceRoll(){
    let imageCheck = !!document.querySelector('img');
    if(imageCheck == true){
        diceBoard.innerHTML = " ";
        let inputValue = document.querySelector("input").value;
        let i = inputValue;
        while(i > 0){
            randomDie();
            i--;
        }
    } else{
        let inputValue = document.querySelector("input").value;
        let i = inputValue;
        while(i > 0){
            randomDie();
            i--;
        }
    }
}

function randomDie(){
    let randIndex = Math.floor(Math.random() * diceArray.length);
    let newDie = document.createElement('img');
    newDie.src = diceArray[randIndex];
    newDie.classList.add("dice-1")
    diceBoard.appendChild(newDie);
    }