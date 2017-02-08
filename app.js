'use-strict';
var confirmQuiz = confirm('Welcome! Would you like to take a quiz about Kurt?');

if(confirmQuiz){
  console.log('Great! Let\'s get started!');
} else {
  console.log('Too bad. First, please answer the following questions to exit the quiz.');
}

var quizResponseOne = prompt('Please answer the following questions with Y or N. Does Kurt live in Wallingford?');

if(quizResponseOne.toUpperCase() === 'Y' || quizResponseOne.toUpperCase() === 'YES'){
  console.log('Yikes! Actually, Kurt lives in Fremont.');
  document.write('Does Kurt live in Wallingford? Answer: Yikes! Actually, Kurt lives in Fremont.');
} else if (quizResponseOne.toUpperCase() !== 'N' || quizResponseOne.toUpperCase() !== 'NO') {
  console.log('Please answer Y or N for now on.');
} else {
  console.log('Correct!');
  document.write('Does Kurt live in Wallingford? Answer: Correct!');
}

var quizResponseTwo = prompt('Was Kurt a submariner?');

if(quizResponseTwo.toUpperCase() === 'Y' || quizResponseTwo.toUpperCase() === 'YES'){
  console.log('Correct!');
  document.write('Was Kurt a submariner? Answer: Correct!');
} else if (quizResponseTwo.toUpperCase() !== 'N' || quizResponseTwo.toUpperCase() !== 'NO') {
  console.log('Please answer Y or N for now on.');
} else {
  console.log('Incorrect. Kurt was a submariner on the USS Kentucky.');
  document.write('Was Kurt a submariner? Answer: Incorrect. Kurt was a submariner on the USS Kentucky.');
}

var quizResponseThree = prompt('Did Kurt see a lot when looking out of the windows on the submarine?');

if(quizResponseThree.toUpperCase() === 'N' || quizResponseThree.toUpperCase() === 'NO'){
  console.log('Correct! Kurt said there aren\'t any windows on submarines!');
  document.write('Did Kurt see a lot when looking out of the windows on the submarine? Answer: Correct! Kurt said there aren\'t any windows on submarines!');
} else if (quizResponseThree.toUpperCase() !== 'N' || quizResponseThree.toUpperCase() !== 'NO') {
  console.log('Please answer Y or N for now on.');
} else {
  console.log('Oh no! Remember, there are no windows on submarines.');
  document.write('Did Kurt see a lot when looking out of the windows on the submarine? Answer: Oh no! Remember, there are no windows on submarines.');
}

var quizResponseFour = prompt('Did Kurt get to shoot any missiles from his submarine?');

if(quizResponseFour.toUpperCase() === 'Y' || quizResponseFour.toUpperCase() === 'YES'){
  console.log('Fuck yea he did!');
  document.write('Did Kurt get to shoot any missiles from his submarine? Answer: Fuck yea he did!');
} else if (quizResponseFour.toUpperCase() !== 'N' || quizResponseFour.toUpperCase() !== 'NO') {
  console.log('Please answer Y or N for now on.');
} else {
  console.log('Actually, Kurt got to shoot two test missiles while he was on board.');
  document.write('Did Kurt get to shoot any missiles from his submarine? Answer: Actually, Kurt got to shoot two test missiles while he was on board.');
}

var quizResponseFive = prompt('Is Kurt from Seattle?');

if(quizResponseFive.toUpperCase() === 'N' || quizResponseFive.toUpperCase() === 'NO'){
  console.log('Correct!');
  document.write('Is Kurt from Seattle? Answer: Correct!');
} else if (quizResponseFive.toUpperCase() !== 'N' || quizResponseFive.toUpperCase() !== 'NO') {
  console.log('Please answer Y or N for now on.');
} else {
  console.log('He loves Seattle but grew up in Auburn, AL.');
  document.write('Is Kurt from Seattle? Answer: He loves Seattle but grew up in Auburn, AL.');
}

alert('Thanks for playing!');
document.write('Thanks for playing!');
