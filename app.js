var diceDom = document.querySelector(".dice");
var activePlayer;
var scores;
var roundScore;
var isNewGame;

initGame();

function initGame() {
   
    activePlayer = 0;
    otherPlayer = 1;
    scores = [0, 0];
    roundScore = 0;
    isNewGame = true;

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    diceDom.style.display = "none";

    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");

    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    
    document.querySelector(".player-0-panel").classList.add("active");
};    

// Shoog shideh event listener
document.querySelector('.btn-roll').addEventListener("click", function() {
    if (isNewGame) {
    // 1-6 random too avah
    var diceNumber = Math.floor(Math.random()*6) + 1;
   
    // Shoonii zurag gargaj ireh
    diceDom.style.display = "block";

    // buusan toonii zurag gargah
    diceDom.src = "dice-" + diceNumber + ".png";

    // buusan toog nemne
    if (diceNumber !== 1) {
      roundScore = roundScore + diceNumber;
      document.getElementById("current-" + activePlayer).textContent = roundScore;
    } else {

      
    switchToNextPlayer();

    //   if (activePlayer === 0) {
    //       activePlayer = 1;
    //   } else {
    //       activePlayer = 0;
    //   }
    } }else {
        alert("Game is over");
    }
  
});
document.querySelector('.btn-hold').addEventListener("click", function() {
    if (isNewGame)
    {

    // Toglogchiin onooruu nemeh
    scores[activePlayer] = scores[activePlayer] + roundScore;
    document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];
    diceDom.style.display = "none";

    if (scores[activePlayer] > 10) {
        isNewGame = false;
        document.getElementById("name-" + activePlayer).textContent = "Winnerr!!!";
        document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
        document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
        // document.getElementById("name-"+ otherPlayer).textContent = "Loser!!!";
        // document.querySelector(".player-" + otherPlayer + "-panel").classList.add("loser");
        
    } else 
        switchToNextPlayer();
    } else {
       alert("Game is over");
    }
    });

function switchToNextPlayer() {
    
    document.getElementById("current-" + activePlayer).textContent = 0;       
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    document.querySelector(".player-0-panel").classList.toggle("active");
    diceDom.style.display = "none";
    document.querySelector(".player-1-panel").classList.toggle("active");
    roundScore = 0;
};

document.querySelector(".btn-new").addEventListener("click", initGame);



    