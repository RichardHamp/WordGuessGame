//Global Variables
var randomWord = [];
var letter = [];
var lettersGuessed = 0;
var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var guesses = []

//Global Functions
function getRandom10(max) {//random number 1-10
  return Math.floor(Math.random() * Math.floor(max));
}

function clearing(elementID) {//zeros out div
  document.getElementById(elementID).innerHTML = "";
}

function win() {
  document.getElementById("win").innerHTML +=
    '<img class="responsive" id="win" src="assets/images/win.png" alt="Win">';
  document.getElementById("init").style.visibility = "visible";//hides button
}

function lose() {
  document.getElementById("lose").innerHTML +=
    '<img class="responsive" id="lose" src="assets/images/lose.png" alt="Lose">'
  document.getElementById("init").style.visibility = "visible"//hides button
}

//On Win load
window.onload = function () {

  document.getElementById('gameName').innerHTML +=

    '<img id="beam" class="responsive" src="assets/images/shipandbeam.png">' +
    '<img id=alien class="responsive" src="assets/images/saucer.png" alt="Flying Saucer">'
}

//Initialize button

function initialize() {
  //Resetting Variables
  clearing('cows');
  clearing('win');
  clearing('lose');
  clearing('bgroup');
  clearing('answerBar');
  var words = ["MOO", "TELEPORT", "CHUPACABRA", "GRAZING", "MOTHERSHIP", "CUD", "PEWPEW", "SAUCER", "BEAM", "MARTIANS"];
  var cowsLeft = 9;
  var randomWord = ((words[getRandom10(10)]));
  var guesses = [];
  var lettersGuessed = 0;

  //Resetting Images
  for (i = 0; i < randomWord.length; i++) { //populates spaces for letters
    document.getElementById('answerBar').innerHTML += '<img id=space' + [i] + ' class=space src="assets/images/space.png">'
    document.getElementById("init").style.visibility = "hidden"//hides button
  }

  document.getElementById('cows').innerHTML += '<img class="cows responsive" input="">'

  for (i = 1; i < 10; i++) {
    document.getElementById('cows').innerHTML += '<img class="cow" id="cow' + i + '" src="assets/images/happy.png" alt="cows">';
  }

  //Captures input from key and stores in var "letter"
  for (i = 0; i < 26; i++) {
    document.getElementById('bgroup').innerHTML +=
    '<img class="ibtn responsive" input=type="image" src="assets/images/Alphabet/' + alphabet[i] + '.png" button id="' + alphabet[i] + '" onclick=keyed(' + alphabet[i] + ')>'

    document.onkeypress = function (event) {
      letter = (String.fromCharCode(event.keyCode));
      document.getElementById(letter).src = 'assets/images/Alphabet/' + [letter] + 'b.png';
      if (guesses.indexOf(letter) > -1) {
        alert("See the big X over the letter? That means you can't do it again.");
      }
      else {
        guesses.push(letter);

        if (randomWord.indexOf(letter) > -1) {
          for (j = 0; j < randomWord.length; j++) {
            if (randomWord[j] == letter) {
              document.getElementById('space' + [j] + '').src = 'assets/images/Alphabet/' + letter + '.png';
              lettersGuessed++;
              if (lettersGuessed == randomWord.length) {
                q = document.getElementById("score").innerHTML;
                clearing("score");
                r = Number(cowsLeft) + Number(q);
                document.getElementById("score").innerHTML = (r)
                win();
              }
            }
          }
        }

        else {
          document.getElementById("beam").style.visibility = "visible";
          setTimeout(function () { document.getElementById("beam").style.visibility = "hidden" }, 1000);
          document.getElementById('cow' + [cowsLeft]).style.visibility = "hidden";

          cowsLeft--;
          if (cowsLeft <= 0) {
            lose();
          }
        }
      }
    }
  }
}
//   function answers() {document.getElementById('answerBar').innerHTML +='<img id=space'+[i]+' class="space responsive" src="assets/images/space.png">'
// }

  //loading alphabet

  //  onclick="clicked(this.id)" document.getElementById("'+i+'").src="assets/images/Alphabet/'+alphabet[i]+'b.png">'
    //'<img class="ibtn" input="" type="image" src="assets/images/Alphabet/'+alphabet[j]+'.png" button id="'+alphabet[i]+'"onclick="document.getElementById("'+i+'").src="assets/images/space.png">'

  // //loading cows
  // for (i = 1; i < 10; i++) {document.getElementById('cows').innerHTML += 
  //   '<img class="cow" id="cow'+i+'" src="assets/images/happy.png" alt="cows">';
  // }
  //loading flying saucer and beam (hidden)