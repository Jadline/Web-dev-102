const body = document.querySelector('body')
const isPlaying = true;

const playerOneImage = document.querySelector('.img1')
const playerTwoImage = document.querySelector('.img2')
const h1Element = document.querySelector('h1')

function MakeGuess(){
    const randomNumber = Math.floor(Math.random() * 6) + 1
    return randomNumber;
}

 let count = 1
function playDiceGame(){
        if(isPlaying){

            const playerOneRoll = MakeGuess()
            const playerTwoRoll = MakeGuess()
            if(playerOneRoll > playerTwoRoll){
                h1Element.innerHTML = "Player 1 Wins!🚩"
                
            }
            else if(playerOneRoll === playerTwoRoll){
                h1Element.innerHTML = "Both Players tied🚩"
            }
            else{
                h1Element.innerHTML = "Player 2 Wins🚩"
            }
            console.log(playerOneRoll,playerTwoRoll)
            playerOneImage.src = `images/dice${playerOneRoll}.png`
            playerTwoImage.src = `images/dice${playerTwoRoll}.png`
           
            
    }
    
       
       
        
       
       
  }



window.addEventListener("load",playDiceGame)
// we want to create the dice game using math.random()
//so the computer has to guess  and i am going to guess too 
//we have to create instances 
// we get hold of the image src  and replace it with the first
