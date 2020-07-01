var activePlayer = 0;

var scores = [0, 0];

var roundScore = 0;

var diceNumber = Math.floor(Math.random()*6) + 1;


document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

// Shoog shideh event listener
document.querySelector('.btn-roll').addEventListener("click", function() {
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

      
      document.getElementById("current-" + activePlayer).textContent = 0;       
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

      document.querySelector(".player-0-panel").classList.toggle("active");
      diceDom.style.display = "none";
      document.querySelector(".player-1-panel").classList.toggle("active");
      roundScore = 0;

    //   if (activePlayer === 0) {
    //       activePlayer = 1;
    //   } else {
    //       activePlayer = 0;
    //   }
    }
});
