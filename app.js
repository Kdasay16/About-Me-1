'use-strict';
var userName = prompt('What is your name?');
var confirmQuiz = confirm('Welcome! Would you like to take a quiz about Kurt?');

//CONSIDER ADDING CONSOLELOGS TO PROVIDE FEEDBACK TO DEVELOPER.

if(confirmQuiz){
  alert('Great! Let\'s get started!');
  console.log('Great! Let\'s get started!');
} else {
  alert('Okay. First, please answer the following questions to exit the quiz.');
  console.log('Okay. First, please answer the following questions to exit the quiz.');
}

//User input stored in array.
var quizResponses = [
  'Please answer the following questions with Y or N. Does Kurt live in Wallingford?',
  'Was Kurt a submariner?',
  'Did Kurt see a lot when looking out of the windows on the submarine?',
  'Did Kurt get to shoot any missiles from his submarine?',
  'Is Kurt from Seattle?'
];

//INSERT A LIST OF CORRECT ANSWER VARIABLES HERE. THEN INSERT THOSE ANSWERS INTO AN ARRAY.

//All correct FEEDBACK to the user's input.
var correctAnswers = [
  //^^CHANGE TO FEEDBACK AND MAKE EACH ONE A VARIABLE
  'Fremont is awesome.',
  'Kurt was on the USS Kentucky.',
  'Kurt said there aren\'t any windows on submarines!',
  'Fuck yea he did!',
  'He\'s from Alabama.'
];

//All incorrect responses to the user's input.
var incorrectAnswers = [
  //^^CHANGE TO FEEDBACK. MAKE EACH FEEDBACK STATEMENT A VARIABLE
  'Yikes! Actually, Kurt lives in Fremont.',
  'Actually, Kurt was a submariner on the USS Kentucky.',
  'Oh no! Remember, there are no windows on submarines.',
  'Actually, Kurt got to shoot two test missiles while he was on board.',
  'He loves Seattle but grew up in Auburn, AL.'
];

var answerCount = 0;

fiveQuestions();

function fiveQuestions(){

  for (var i = 0; i < quizResponses.length; i++) {
    flag = false;
    /*Lesson learned: Previously, I put the prompts inside of the quizResponses array. I
    also attempted to put the prompt at the beginning of the for loop. What the loop would end up doing
    is getting the values of each prompt, storing them in the array, then checking the statements. The code below
    will store the input into the variable, then continue the script correctly.*/
    var newResponse = prompt(quizResponses[i]);
    if (newResponse.toUpperCase() === 'Y' || newResponse.toUpperCase() === 'YES') {
      flag = true;
      if (i === 0 || i === 2 || i === 4) {
        console.log(incorrectAnswers[i]);
        document.write('<ul><li> Incorrect. ' + incorrectAnswers[i] + '</li></ul>');
      } else {
        console.log(correctAnswers[i]);
        document.write('<ul><li> Correct. ' + correctAnswers[i] + '</li></ul>');
        answerCount++;
      }
      //If no, then log either the correct or incorrect answer to the console and write it to the HTML doc.
    } else if (newResponse.toUpperCase() === 'N' || newResponse.toUpperCase() === 'NO') {
      flag = true;
      if (i === 1 || i === 3) {
        console.log(incorrectAnswers[i]);
        document.write('<ul><li> Incorrect. ' + incorrectAnswers[i] + '</li></ul>');
      } else {
        console.log(correctAnswers[i]);
        document.write('<ul><li> Correct. ' + correctAnswers[i] + '</li></ul>');
        answerCount++;
      }
    } else {
      alert('I AM A ROBOT. INVALID RESPONSE.');
      i--;
    }
  };
}
//Loop for the quiz. This is not very robust, as I can't figure out how to interrupt the for loop for an invalid response.
//Write the results of the quiz to the console.
document.write('<p>You got ' + answerCount + '/5 correct!</p>');

//If the user got all five questions correct, then they can do two bonus questions.

//ADD CONSOLE FEEDBACK TO SEE THE RANDOM NUMBER THAT WAS GENERATED.
if (answerCount === 5) {
  alert('Good job! You get two bonus questions!');
  numQuestionGame();
};
function numQuestionGame() {

  var randomNum = Math.floor(Math.random() * 10 + 1);
  var guessNumCount = 0;
  var numGuessesLeft = 3;

  while (guessNumCount < 4) {
    var numberQuestion = prompt('What number am I thinking of?');
    if (parseInt(numberQuestion) === randomNum) {
      alert('Nice job! The number was ' + randomNum + '!');
      answerCount++;
      break;
    } else if (parseInt(numberQuestion) > randomNum) {
      alert('Too high! You have ' + numGuessesLeft-- + ' guesses left!');
    } else if (parseInt(numberQuestion) < randomNum) {
      alert('Too low! You have ' + numGuessesLeft-- + ' guesses left!');
    }
    guessNumCount++;
    if (guessNumCount === 4) {
      console.log('Better luck next time!');
    }
  }
}
//^^^^^WRITE RESULTS TO WEBSITE AND WHAT THE NUMBER WAS.

//CORRECT STATEMENT ABOUT GETTING TWO BONUS QUESTIONS.
//If they got the first bonus question correct, the user can attempt the last bonus question.
if (answerCount === 6) {
  alert('You\'ve answered a shit ton of answers correctly. Here is the last bonus question.');
  alert('Guess a state Kurt has lived in. You get six guesses.');
  statesQuestion();
}
function statesQuestion() {
  var statesLivedIn = ['Alabama', 'Florida', 'South Carolina', 'Washington', 'New York', 'Connecticut'];
  var statesGuessesLeft = 5;
  var maxGuesses = 6;
  var statesComplete = false;

  for (var statesCount = 0; statesCount < maxGuesses; statesCount++) {
    var statesQuestion = prompt('Kurt has lived in: ');
    for (i = 0; i < statesLivedIn.length; i++) {
      if (statesQuestion.toLowerCase() === statesLivedIn[i].toLowerCase()) {
        statesComplete = true;
        statesLivedIn.splice(i, 1);
        alert('You guessed correctly! He\'s also lived in ' + statesLivedIn.join(', ') + '.');
        document.write('<p>You got both bonus questions correct!</p>');
        break;
      }
    }
    if (statesComplete === true) {
      break;
    } else {
      alert('He has never lived in that state. You have ' + statesGuessesLeft-- + ' guesses remaining.');
      if (statesCount === maxGuesses - 1) {
        alert('You\'re out of guesses! He has lived in ' + statesLivedIn.join(', ') + '.');
        document.write('<p>You got one bonus question correct!</p>');
      }
    }
  }
}
//^^^^WRITE RESULTS TO THE WEBPAGE

document.write('Thanks for playing ' + userName + '!');

//ENDING NOTES: NEED MORE DEVELOPER FEEDBACK IN THE CONSOLE.
//CONTROLLED ENTRY INTO THE WEBPAGE. RESULTS OF A QUESTION IS IMMEDIATELY LOGGED. BUT THIS MAY HAVE MORE TO DO WITH THE PROPERTIES OF PROMPTS.
//
