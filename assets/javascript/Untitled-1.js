//Global Variables

var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
var words = ["bob", "rick", "jo", "vicki", "katie", "Felipe", "Sophia", "Linda", "Sebastian", "Albert Einstein"];/*words needed to guess for game*/
var randomWord =[];
var letter=[];


//Loading initial images
window.onload = function(){
  var j=(0)
  for (i = 0; i < 26; i++) {document.getElementById('bgroup').innerHTML += 
   // '<img class="ibtn" input="" type="image" src="assets/images/Alphabet/'+alphabet[j]+'.png" button id="'+alphabet[i]+'" onclick="clicked(this.id)" document.getElementById("'+i+'").src="assets/images/Alphabet/'+alphabet[j]+'b.png">'
    '<img class="ibtn" input="" type="image" src="assets/images/Alphabet/'+alphabet[j]+'.png" button id="'+alphabet[i]+'"onclick="document.getElementById("'+i+'").src="assets/images/space.png">'
                                                                                                                        //onclick="document.getElementById('myImage').src='pic_bulboff.gif"'>
    
  j++;
 console.log()
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
    document.getElementById('ph').innerHTML += (randomWord);//random word
    console.log (ph);

  for (i=0; i<randomWord.length; i++) //populates spaces for letters and creates answerspaces in "pac"
  {document.getElementById('answerBar').innerHTML +='<img id=space src="assets/images/space.png">'
  document.getElementById("init").style.visibility = "hidden"//hides button
  document.getElementById('pac').innerHTML += "_"
}
console.log(pac)
    }
  
//Captures input from click or push and stores in var "letter"

  document.onkeypress = function (event) {
  letter = (String.fromCharCode(event.keyCode).toUpperCase());
  document.getElementById('let').innerHTML += (letter);
  }

  guesses = [];
  ins = (document.getElementById('ph').innerHTML);
  if (ins.includes(letter)===true) {
    guesses.push (letter);
    console.log ("yup")}
  else {
    console.log ("nope");
    
  function clicked(clicked_id){
    letter = (clicked_id.toUpperCase());
    document.getElementById('let').innerHTML += (letter);