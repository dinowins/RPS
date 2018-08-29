/**
 * LOGIC
 */

 let score = 0;
 let playerChoice;

 let readable = {
   '0': 'Rock',
   '1': 'Paper',
   '2': 'Scissors',
 }

 let cpuChoice = {
   init: function() {
     this.store = Math.floor(Math.random() * 3);
     this.text = readable[this.store];
   },
   store: '',
   text: '',
 };

let order = [0, 1, 2, 0];

let chooseWinner = function(player, cpu) {
  if(order[player] === order[cpu]) {
    return 'The game is tied. Try again?';
  }
  if(order[player] === order[cpu + 1]) {
    score++;
    return 'You won!';
  } else {
    score--;
    return 'You lost :(';
  }
}

/**
* UI
*/

let paragraph = document.querySelector('p');

let assignClick = function(tag, pos) {
  // assign a click listener
  tag.addEventListener('click', function(){
    // set the player's choice
    playerChoice = pos;
    // give feedback to the cpuChoice
    cpuChoice.init();
    paragraph.innerText = 'The computer chose: ' + cpuChoice.text
    // determine a winner
    // display the winner and the current score
    paragraph.innerText += '\n' + chooseWinner(playerChoice, cpuChoice.store);
    paragraph.innerText += '\n' + 'SCORE: ' + score;
  })

}

let images = {
  tags: document.getElementsByTagName('img'),
  init: function() {
    for(let step = 0; step < this.tags.length; step++) {
      assignClick(this.tags[step], step);
    }
  }
}

images.init();
