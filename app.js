'use-strict';
var userName = prompt('What is your name?');
var confirmQuiz = confirm('Welcome! Would you like to take a quiz about Kurt?');

if(confirmQuiz){
  console.log('Great! Let\'s get started!');
} else {
  console.log('Okay. First, please answer the following questions to exit the quiz.');
}

//User input stored in array.
var quizResponses = new Array (
prompt('Please answer the following questions with Y or N. Does Kurt live in Wallingford?'),
prompt('Was Kurt a submariner?'),
prompt('Did Kurt see a lot when looking out of the windows on the submarine?'),
prompt('Did Kurt get to shoot any missiles from his submarine?'),
prompt('Is Kurt from Seattle?')
);

//All correct responses to the user's input.
var correctAnswers = new Array (
'Fremont is awesome.',
'Kurt was on the USS Kentucky.',
'Kurt said there aren\'t any windows on submarines!',
'Fuck yea he did!',
'He\'s from Alabama.'
);

//All incorrect responses to the user's input.
var incorrectAnswers = new Array (
'Yikes! Actually, Kurt lives in Fremont.',
'Actually, Kurt was a submariner on the USS Kentucky.',
'Oh no! Remember, there are no windows on submarines.',
'Actually, Kurt got to shoot two test missiles while he was on board.',
'He loves Seattle but grew up in Auburn, AL.'
);

var answerCount = 0;

//Loop for the quiz. This is not very robust, as I can't figure out how to interrupt the for loop for an invalid response.
for (var i = 0; i < quizResponses.length; i++) {
  //If yes, then log either the correct or incorrect answer to the console and write it to the HTML doc.
  if (quizResponses[i].toUpperCase() === 'Y' || quizResponses[i].toUpperCase() === 'YES') {
    if (i === 0 || i === 2 || i === 4) {
      console.log(incorrectAnswers[i]);
      document.write('<ul><li> Incorrect. ' + incorrectAnswers[i] + '</li></ul>');
    } else {
      console.log(correctAnswers[i]);
      document.write('<ul><li> Correct. ' + correctAnswers[i] + '</li></ul>');
      answerCount++;
    }
    //If no, then log either the correct or incorrect answer to the console and write it to the HTML doc.
  } else if (quizResponses[i].toUpperCase() === 'N' || quizResponses[i].toUpperCase() === 'NO') {
    if (i === 1 || i === 3) {
      console.log(incorrectAnswers[i]);
      document.write('<ul><li> Incorrect. ' + incorrectAnswers[i] + '</li></ul>');
    } else {
      console.log(correctAnswers[i]);
      document.write('<ul><li> Correct. ' + correctAnswers[i] + '</li></ul>');
      answerCount++;
    }
  }
};
//Write the results of the quiz to the console.
document.write('<p>You got ' + answerCount + '/5 correct!</p>');

//If the user got all five questions correct, then they can do two bonus questions.
if (answerCount === 5) {
  alert('Good job! You get two bonus questions!');

  var randomNum = Math.floor(Math.random() * 10 + 1);
  var guessNumCount = 0;
  var numGuessesLeft = 3;

  while (guessNumCount < 4) {
    var numberQuestion = prompt('What number am I thinking of?');
    if (parseInt(numberQuestion) === randomNum) {
      console.log('Nice job! The number was ' + randomNum + '!');
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
};

//If they got the first bonus question correct, the user can attempt the last bonus question.
if (answerCount === 6) {
  alert('You\'ve answered a shit ton of answers correctly. Here is the last bonus question.');
  alert('Guess a state Kurt has lived in. You get six guesses.');

  var statesLivedIn = ['alabama', 'florida', 'south carolina', 'washington', 'new york', 'connecticut'];
  var statesGuessesLeft = 5;
  var maxGuesses = 6;
  var statesComplete = false;

  for (var statesCount = 0; statesCount < maxGuesses; statesCount++) {
    var statesQuestion = prompt('Kurt has lived in: ');
    for (i = 0; i < statesLivedIn.length; i++) {
      if (statesQuestion.toLowerCase() === statesLivedIn[i]) {
        statesComplete = true;
        statesLivedIn.splice(i, 1);
        alert('You guessed correctly! He\'s also lived in ' + statesLivedIn.toString() + '.');
        document.write('<p>You got both bonus questions correct!</p>');
        break;
      }
    }
    if (statesComplete === true) {
      break;
    } else {
      alert('He has never lived in that state. You have ' + statesGuessesLeft-- + ' guesses remaining.');
      if (statesCount === maxGuesses - 1) {
        alert('You\'re out of guesses! He has lived in ' + statesLivedIn.toString() + '.');
        document.write('<p>You got one bonus question correct!</p>');
      }
    }
  }
}

document.write('Thanks for playing ' + userName + '!');
