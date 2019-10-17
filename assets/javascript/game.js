//Global Variables

var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
var randomWord =[];
var letter=[];
var lettersGuessed=0;
var cowsLeft=3;

//Global Function
function getRandom10(max) {//random number 1-10
  return Math.floor(Math.random() * Math.floor(max));
}

function win () {
  alert ("Hurray")
}

function lose () {
  alert ("You Fail")
}


window.onload = function(){
  var j=(0)
  //loading alphabet
  for (i = 0; i < 26; i++) {document.getElementById('bgroup').innerHTML += 
   '<img class="ibtn" input="" type="image" src="assets/images/Alphabet/'+alphabet[i]+'.png" button id="'+alphabet[i]+'" onclick="clicked(this.id)" document.getElementById("'+i+'").src="assets/images/Alphabet/'+alphabet[i]+'b.png">'
    //'<img class="ibtn" input="" type="image" src="assets/images/Alphabet/'+alphabet[j]+'.png" button id="'+alphabet[i]+'"onclick="document.getElementById("'+i+'").src="assets/images/space.png">'
  }
  //loading cows
  for (i = 1; i < 10; i++) {document.getElementById('cows').innerHTML += 
    '<img class="cow" id="cow'+i+'" src="assets/images/happy.png" alt="cows">';
  }
  //loading flying saucer and beam (hidden)
  document.getElementById('gameName').innerHTML +=
    '<img id=alien src="assets/images/saucer.png" alt="Flying Saucer">'+
    '<img id="beam" src="assets/images/beam.png">'
}

//Initialize button

function initialize() { 
  var words = ["bob", "rick", "jo", "vicki", "katie", "Felipe", "Sophia", "Linda", "Sebastian", "Albert Einstein"];/*words needed to guess for game*/
  
  document.getElementById('score').innerHTML +=" 0";//sets current global score to 0
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
   
  document.onkeypress = function (event) {
    
  letter = (String.fromCharCode(event.keyCode).toUpperCase());
  console.log(letter)  // document.getElementById('let').innerHTML += (letter);
  if (randomWord.indexOf(letter) > -1) {
    for (j=0;j<randomWord.length;j++) {
      if (randomWord[j] == letter) {
        console.log(j);
        document.getElementById('space'+[j]+'').src = 'assets/images/Alphabet/'+letter+'.png';
        lettersGuessed++;
        console.log(lettersGuessed)
        if (lettersGuessed==randomWord.length) {
          win()
        
        }
      }
    }
  }
  else {
    cowsLeft --;
    if (cowsLeft<=0) {
      lose();
      return;
    }
    document.getElementById("beam").style.visibility = "visible";
    setTimeout(function(){ document.getElementById("beam").style.visibility = "hidden" }, 1000);
    document.getElementById('cow'+[cowsLeft]).style.visibility = "hidden";}
    console.log (cowsLeft);
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
