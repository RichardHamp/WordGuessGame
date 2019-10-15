//Global Variables

var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
var words = ["bob", "rick", "jo", "vicki", "katie", "Felipe", "Sophia", "Linda", "Sebastian", "Albert Einstein"];/*words needed to guess for game*/

//Populates initial images

window.onload = function(){
  var j=(0)
  for (i = 65; i < 91; i++) {document.getElementById('bgroup').innerHTML += 
    '<img class="ibtn" input="" type="image" src="assets/images/Alphabet/'+alphabet[j]+
    '.png" button="" id="'+i+'" style="width:50px" onclick="clicked(this.id);document.getElementById("'
    +i+'").src="assets/images/Alphabet/'+alphabet[j]+'b.png"">';
  j++;
  }
  for (i = 1; i < 10; i++) {document.getElementById('cows').innerHTML += 
    '<img class="cow" id="cow'+i+'" src="assets/images/happy.png" alt="Flying Saucer">';
}
  document.getElementById('gameName').innerHTML +=
    '<img id=alien src="assets/images/saucer.png" alt="Flying Saucer">'+
    '<img id="beam" src="assets/images/beam.png">'
    
  document.getElementById('score').innerHTML +=" 0";//sets current global score to 0
}

//Initialize button

function initialize() { 
  function getRandom10(max) {//random number 1-10
    return Math.floor(Math.random() * Math.floor(max));
  }

    var randomWord = ((words[getRandom10(10)]).toUpperCase());
    console.log (randomWord); //random word

  for (i=0; i<randomWord.length; i++) //populates spaces for letters
  {document.getElementById('answerBar').innerHTML +='<img id=space src="assets/images/space.png">'}
  document.getElementById("init").style.visibility = "hidden"//hides button
  
}


//



//Shows empty spaces for letters in var = randomWord
  
// function aBar() {
//   for (var i; i<randomWord.length-1; i++) {document.getElementById('answerBar').innerHTML += "_";}}




// var answerArray = [];
// for (var i = 0; i < randomWord.length; i++) {
//   answerArray[i] = "_";
// }
 
// console.log (answerArray)




//   function clicked(clicked_id){
//       current=(clicked_id);
//       console.log (current);
//   }

  



   
    /*console.log (random10); test line*/

    

   
   

    // console.log (randomWord.toUpperCase());

  

    /*console.log (wLength); /*test line*/

    //var wordSplit = [] empty array filled by letters in randomWord
//console.log (wordSplit);

//     for (numPos=0; numPos<wLength; numPos++) {/*converts randomWord into array of letters*/
//       wordSplit.push(randomWord[numPos]);
//     }

//     console.log (wordSplit);/*test line*/

//     const unique = (value, index, self) => {/*creates a list of unique letters in the word called "uniqueLetters" for easy comparison*/
//       return self.indexOf(value) === index
//     }
//     const uniqueLetters = wordSplit.filter(unique)
    
//     console.log(uniqueLetters.length)/*test line*/

//     var answerArray = [];
//       for (var i = 0; i < randomWord.length; i++) {
//         answerArray[i] = "_";
//       }
//     var remainingLetters = randomWord.length;
//     console.log (answerArray);

// /* Capturing guesses. Logs in array "guesses" as keyCodes. */
 
//     var letterArray = Array.from(new Array(26), (x,i) => i + 65); /*gets all numbers correlating to letter keycodes and names the variables letterArray */

//     console.log (letterArray); //test line

//     document.onkeyup = letterSelect; /*listens for keystrokes*/

//     var guesses = []; /*empty array filled by letters in randomWord*/

//     console.log (guesses)

//     var vanna = []; /*empty array filled by guesses that correspond with randomWord*/

//     function clicked(clicked_id){//pulls id from button and converts string to number before running letterSelect.
//       integer = parseInt(clicked_id, 10);
//       console.log (integer);
//       letterSelect();
//      }

// /*Captures keycode for key pushed. If valid, adds to variable "guesses". If not, alerts player.*/
//     function letterSelect() {
//       tGuess = (event.keyCode)||(integer), 
//       console.log (tGuess),//test line
//       guess = String.fromCharCode(tGuess);//converting keyCode to string var "guess"
//       console.log (guess);
//       isInArray = letterArray.includes(tGuess); /*checks that tGuess is a letter (in letterArray)*/
//       /*console.log (isInArray);test line*/
        
//         if (((isInArray == true)&&(guesses.includes(String.fromCharCode(tGuess)))===false)
//               &&(uniqueLetters.includes(String.fromCharCode(tGuess)))===false){/*selection must be a letter, not already guessed, and not in the answer*/
//         guesses.push (String.fromCharCode(tGuess)); /*pushes letter from tGuess into "guesses" array*/
//          console.log (guesses);
         
//           document.getElementById("beam").style.visibility = "visible";
//           setTimeout(function(){ document.getElementById("beam").style.visibility = "hidden" }, 1000);
//           i=(guesses.length);
//           document.getElementById("cow"+[i]).style.visibility = "hidden"
//           }

//           if (((isInArray == true)&&(guesses.includes(String.fromCharCode(tGuess)))===false)
//           &&(uniqueLetters.includes(String.fromCharCode(tGuess)))===true){/*selection must be a letter, not already guessed, and in the answer*/
//           vanna.push (String.fromCharCode(tGuess)); /*pushes letter from tGuess into "guesses" array*/
//           console.log (vanna);
//           }

//           if (isInArray == false) {/*ensures only valid guesses are counted*/
//             alert ("not valid keystroke");
//           }

//         if (guesses.length > 9) { /*Too many guess triggers game's end*/
//         alert ("You Fail!");

//       };
//       // console.log (String.fromCharCode(tGuess));
//       // console.log (guesses);

//       /* Comparing guesses (var guesses) to words (var uniqueLetters)*/
//       if (wordSplit.includes(String.fromCharCode(tGuess))&&(vanna.includes(String.fromCharCode(tGuess)))===false){
//         vanna.push(String.fromCharCode(tGuess));h
   
//         }
//         console.log (uniqueLetters);
//         console.log (vanna);
//         if (uniqueLetters.length===vanna.length) {/*comparing lengths of two arrays--no need to check specific characters*/
//         alert ("You Win!"); 
//           winCounter++
//           console.log (winCounter);
//         } 
//         for (var j = 0; j < randomWord.length; j++) {
//           if (randomWord[j] === guess) {
//            answerArray[j] = guess;
//           remainingLetters--;
//            }
//         console.log (answerArray);
        
//           }
          
 

//      }
    

