//Global Variables
var randomWord =[];
var letter=[];
var lettersGuessed=0;

var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
//Global Function
function getRandom10(max) {//random number 1-10
  return Math.floor(Math.random() * Math.floor(max));
}

function keyed(a) {
  letter = (a);
  console.log (letter);
}

function win () {
  document.getElementById("win").innerHTML += 
  '<img class="responsive" id="win" src="assets/images/win.png" alt="Win">'
  document.getElementById("init").style.visibility = "visible"//hides button
}

function lose () {
  document.getElementById("lose").innerHTML += 
  '<img class="responsive" id="lose" src="assets/images/lose.png" alt="Lose">'
  document.getElementById("init").style.visibility = "visible"//hides button
}

function answers() {document.getElementById('answerBar').innerHTML +='<img id=space'+[i]+' class="space responsive" src="assets/images/space.png">'
}

window.onload = function(){
  
  //loading alphabet
  
  //  onclick="clicked(this.id)" document.getElementById("'+i+'").src="assets/images/Alphabet/'+alphabet[i]+'b.png">'
    //'<img class="ibtn" input="" type="image" src="assets/images/Alphabet/'+alphabet[j]+'.png" button id="'+alphabet[i]+'"onclick="document.getElementById("'+i+'").src="assets/images/space.png">'
  
  // //loading cows
  // for (i = 1; i < 10; i++) {document.getElementById('cows').innerHTML += 
  //   '<img class="cow" id="cow'+i+'" src="assets/images/happy.png" alt="cows">';
  // }
  //loading flying saucer and beam (hidden)
  document.getElementById('gameName').innerHTML +=
    
    '<img id="beam" class="responsive" src="assets/images/shipandbeam.png">'+
    '<img id=alien class="responsive" src="assets/images/saucer.png" alt="Flying Saucer">'
}

//Initialize button

function initialize() { 
  var words = ["bob", "rick", "jo", "vicki", "katie", "Felipe", "Sophia", "Linda", "Sebastian", "Albert Einstein"];/*words needed to guess for game*/
  
  var cowsLeft=9;

  document.getElementById('cows').innerHTML += '<img class="cows responsive" input="">'

  for (i = 1; i < 10; i++) {document.getElementById('cows').innerHTML += 
    '<img class="cow" id="cow'+i+'" src="assets/images/happy.png" alt="cows">';
  }

  document.getElementById('score').innerHTML +="0";//sets current global score to 0
  console.log (score)
  
  var randomWord = ((words[getRandom10(10)]).toUpperCase());
    //document.getElementById('ph').innerHTML += (randomWord);//random word & sets to div ph
    console.log (ph);

  for (i=0; i<randomWord.length; i++) //populates spaces for letters
  {document.getElementById('answerBar').innerHTML +='<img id=space'+[i]+' class=space src="assets/images/space.png">'
  document.getElementById("init").style.visibility = "hidden"//hides button
    }
   
  console.log (randomWord)

  //Captures input from click or push and stores in var "letter"
  for (i = 0; i < 26; i++) {document.getElementById('bgroup').innerHTML += 
  '<img class="ibtn responsive" input=type="image" src="assets/images/Alphabet/'+alphabet[i]+'.png" button id="'+alphabet[i]+'" onclick=keyed('+alphabet[i]+')>'

  document.onkeypress = function (event) {
    guesses=[]
    letter = (String.fromCharCode(event.keyCode).toUpperCase());
    ll = (String.fromCharCode(event.keyCode));
    document.getElementById(ll).src='assets/images/Alphabet/'+[letter]+'b.png';
    
    if (letter.indexOf(guesses)>0) {
      alert("See the big X over the letter? That means you can't do it again.");
      }
      else {guesses.push (letter);
        console.log (guesses);
      }

  if (randomWord.indexOf(letter) > -1){

   

    for (j=0;j<randomWord.length;j++) {
      if (randomWord[j] == letter) {
        document.getElementById('space'+[j]+'').src = 'assets/images/Alphabet/'+letter+'.png';
        lettersGuessed++;
        if (lettersGuessed==randomWord.length) {
          win();
        }
      }
    }
  }
  
  else {
    document.getElementById("beam").style.visibility = "visible";
    setTimeout(function(){ document.getElementById("beam").style.visibility = "hidden" }, 1000);
    document.getElementById('cow'+[cowsLeft]).style.visibility = "hidden";}
    cowsLeft --;
    if (cowsLeft<=0) {
      lose();
    }
  }
  
}
  }
  



  // else {
  //   document.getElementById("beam").style.visibility = "visible";
  //   setTimeout(function(){ document.getElementById("beam").style.visibility = "hidden" }, 1000);
  //   i=(guesses.length);
  //   document.getElementById('cow'+[i]).style.visibility = "hidden";}

  //   guess_array.splice(index, [i], letter);
	// 		guess_array.splice(randomWord.lastIndexOf(letter), 1, letter);
	// 		console.log(guess_array);
  // }
  

  // function guess(letter){
	// 	var index = randomWord.indexOf(letter);
	// 	if(randomWord.indexOf(letter) > -1){
	// 		guess_array.splice(index, 1, letter);
	// 		guess_array.splice(randomWord.lastIndexOf(letter), 1, letter);
	// 		console.log(guess_array);



  //checks var = letter (let) against word and stores in guesses
  //ins = (document.getElementById('ph').innerHTML);
  
  // if (randomWord.includes(letter)===true) {
  //   ;
  //   console.log ("yup")}
  // else {
  //   console.log ("nope");}

    // guesses.push (letter);
    // document.getElementById("beam").style.visibility = "visible";
    //       setTimeout(function(){ document.getElementById("beam").style.visibility = "hidden" }, 1000);
    //       i=(guesses.length);
    //       document.getElementById('cow'+[i]).style.visibility = "hidden";}
        
            





        //   if (((isInArray == true)&&(guesses.includes(String.fromCharCode(letter)))===false)
        //       &&(uniqueLetters.includes(String.fromCharCode(tGuess)))===false){/*selection must be a letter, not already guessed, and not in the answer*/
        // guesses.push (String.fromCharCode(tGuess)); /*pushes letter from tGuess into "guesses" array*/
        //  console.log (guesses);
         
        //   document.getElementById("beam").style.visibility = "visible";
        //   setTimeout(function(){ document.getElementById("beam").style.visibility = "hidden" }, 1000);
        //   i=(guesses.length);
        //   document.getElementById("cow"+[i]).style.visibility = "hidden"
        //   }

        //   if (((isInArray == true)&&(guesses.includes(String.fromCharCode(tGuess)))===false)
        //   &&(uniqueLetters.includes(String.fromCharCode(tGuess)))===true){/*selection must be a letter, not already guessed, and in the answer*/
        //   vanna.push (String.fromCharCode(tGuess)); /*pushes letter from tGuess into "guesses" array*/
        //   console.log (vanna);


        //   if (isInArray == false) {/*ensures only valid guesses are counted*/
        //     alert ("not valid keystroke");

        // if (guesses.length > 9) { /*Too many guess triggers game's end*/
        // alert ("You Fail!");
      
// function aBar() {
//   for (var i; i<randomWord.length-1; i++) {document.getElementById('answerBar').innerHTML += "_";}}

// var answerArray = [];
// for (var i = 0; i < randomWord.length; i++) {
//   answerArray[i] = "_";

//     const unique = (value, index, self) => {/*creates a list of unique letters in the word called "uniqueLetters" for easy comparison*/
//       return self.indexOf(value) === index
//     }
//     const uniqueLetters = wordSplit.filter(unique)
    
//     var answerArray = [];
//       for (var i = 0; i < randomWord.length; i++) {
//         answerArray[i] = "_";
//       }
//     var remainingLetters = randomWord.length;

// /* Capturing guesses. Logs in array "guesses" as keyCodes. */
 
//     var letterArray = Array.from(new Array(26), (x,i) => i + 65); /*gets all numbers correlating to letter keycodes and names the variables letterArray */

//     document.onkeyup = letterSelect; /*listens for keystrokes*/

//     var guesses = []; /*empty array filled by letters in randomWord*/

//     var vanna = []; /*empty array filled by guesses that correspond with randomWord*/


// /*Captures keycode for key pushed. If valid, adds to variable "guesses". If not, alerts player.*/
//     document.onkeyup = letterSelect
// function letterSelect() {
//     
//       isInArray = letterArray.includes(tGuess); /*checks that tGuess is a letter (in letterArray)*/
        
//         if (((isInArray == true)&&(guesses.includes(String.fromCharCode(tGuess)))===false)
//               &&(uniqueLetters.includes(String.fromCharCode(tGuess)))===false){/*selection must be a letter, not already guessed, and not in the answer*/
//         guesses.push (String.fromCharCode(tGuess)); /*pushes letter from tGuess into "guesses" array*/
         
//           document.getElementById("beam").style.visibility = "visible";
//           setTimeout(function(){ document.getElementById("beam").style.visibility = "hidden" }, 1000);
//           i=(guesses.length);
//           document.getElementById("cow"+[i]).style.visibility = "hidden"
//           }

//           if (((isInArray == true)&&(guesses.includes(String.fromCharCode(tGuess)))===false)
//           &&(uniqueLetters.includes(String.fromCharCode(tGuess)))===true){/*selection must be a letter, not already guessed, and in the answer*/
//           vanna.push (String.fromCharCode(tGuess)); /*pushes letter from tGuess into "guesses" array*/

//           if (isInArray == false) {/*ensures only valid guesses are counted*/
//             alert ("not valid keystroke");

//         if (guesses.length > 9) { /*Too many guess triggers game's end*/
//         alert ("You Fail!");

//       /* Comparing guesses (var guesses) to words (var uniqueLetters)*/
//       if (wordSplit.includes(String.fromCharCode(tGuess))&&(vanna.includes(String.fromCharCode(tGuess)))===false){
//         vanna.push(String.fromCharCode(tGuess));h
//     
//         if (uniqueLetters.length===vanna.length) {/*comparing lengths of two arrays--no need to check specific characters*/
//         alert ("You Win!"); 
//           winCounter++

//         for (var j = 0; j < randomWord.length; j++) {
//           if (randomWord[j] === guess) {
//            answerArray[j] = guess;
//           remainingLetters--;
