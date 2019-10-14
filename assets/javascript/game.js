/* Selecting random word, determins length, and converts to lettered array. Resulting variables = randomWord & wordSplit (word split into letters)*/
var winCounter = 0

document.addEventListener("keypress", function(event) {
  if (event.keyCode == 65) {
      alert ("hi.")
  }
})

    function getRandom10(max) {/*random decimal 0-1 */
        return Math.floor(Math.random() * Math.floor(max));
      }

    var random10 = (getRandom10(10));/*uses output of function getRandom10 to generate a number 0-9 and name the variable "result"*/
    
    /*console.log (random10); test line*/

    var words = ["bob", "rick", "jo", "vicki", "katie", "Felipe", "Sophia", "Linda", "Sebastian", "Albert Einstein"];/*words needed to guess for game*/

    var randomWord = ((words[random10]).toUpperCase()); /*randomly picks a word from Words array and names the variable "randomWord"*/

    console.log (randomWord); /*WORD test line*/

    // console.log (randomWord.toUpperCase());

    var wLength = (randomWord.length); /*names the length of randomWord as variable wLength*/

    /*console.log (wLength); /*test line*/

    var wordSplit = [] /*empty array filled by letters in randomWord*/

    for (numPos=0; numPos<wLength; numPos++) {/*converts randomWord into array of letters*/
      wordSplit.push(randomWord[numPos]);
    }

    console.log (wordSplit);/*test line*/

    const unique = (value, index, self) => {/*creates a list of unique letters in the word called "uniqueLetters" for easy comparison*/
      return self.indexOf(value) === index
    }
    const uniqueLetters = wordSplit.filter(unique)
    
    console.log(uniqueLetters.length)/*test line*/

    // var wordSplitUniques = wordSplit.filter(wordSplit[] => word.length > 6);

/* Capturing guesses. Logs in array "guesses" as keyCodes. */
 
    var letterArray = Array.from(new Array(26), (x,i) => i + 65); /*gets all numbers correlating to letter keycodes and names the variables letterArray */

    /*console.log (letterArray); test line*/

    document.onkeyup = keyUpHandler; /*listens for keystrokes*/

    var guesses = ["guesses"]; /*empty array filled by letters in randomWord*/

    var vanna = ["vanna"]; /*empty array filled by guesses that correspond with randomWord*/

/*Captures keycode for key pushed. If valid, adds to variable "guesses". If not, alerts player.*/
    function keyUpHandler() {
      tGuess = (event.keyCode), 
      /*console.log (tGuess),/*test line*/
      isInArray = letterArray.includes(tGuess); /*checks that tGuess is a letter (in letterArray)*/
      /*console.log (isInArray);test line*/
        
        if (((isInArray == true)&&(guesses.includes(String.fromCharCode(tGuess)))===false)
              &&(uniqueLetters.includes(String.fromCharCode(tGuess)))===false){/*selection must be a letter, not already guessed, and not in the answer*/
        guesses.push (String.fromCharCode(tGuess)); /*pushes letter from tGuess into "guesses" array*/
         console.log (guesses);
          }

          if (((isInArray == true)&&(guesses.includes(String.fromCharCode(tGuess)))===false)
          &&(uniqueLetters.includes(String.fromCharCode(tGuess)))===true){/*selection must be a letter, not already guessed, and in the answer*/
          vanna.push (String.fromCharCode(tGuess)); /*pushes letter from tGuess into "guesses" array*/
          console.log (vanna);
          }

          if (isInArray == false) {/*ensures only valid guesses are counted*/
            alert ("not valid keystroke");
          }

        if (guesses.length > 5) { /*Too many guess triggers game's end*/
        alert ("You Fail!");

      };
      // console.log (String.fromCharCode(tGuess));
      // console.log (guesses);

      /* Comparing guesses (var guesses) to words (var uniqueLetters)*/
      if (wordSplit.includes(String.fromCharCode(tGuess))&&(vanna.includes(String.fromCharCode(tGuess)))===false){
        vanna.push(String.fromCharCode(tGuess));h
   
        }
        console.log (uniqueLetters);
        console.log (vanna);
        if (uniqueLetters.length===vanna.length) {/*comparing lengths of two arrays--no need to check specific characters*/
          console.log ("You Win!"); 
          winCounter++
          console.log (winCounter);
        } 
       
     }

    

  

    


       




