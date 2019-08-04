const process = require('process');

// process.stdout.write(`\n\nWhat is 2 + 2\n\n`);
//
// process.stdin.on('data', function(answer){
//   // console.log(answer.toString().trim());
//   let inputAnswer = answer.toString().trim();
//   if(inputAnswer === '4'){
//     process.exit();
//   } else {
//     process.stdout.write(`\n${inputAnswer} is the wrong answer, please try again\n`);
//   }
// })
//
// process.on('exit', function(){
//   process.stdout.write(`\nWell done, you got the right answer\n`);
// })

const questions = [
  'What is 2 + 2?',
  'How many sides are there on an octagon?'
]

const correctAnswers = [
  '4',
  '8'
]

let usersAnswers = [];

function askQuestion(num){
  process.stdout.write(`${questions[num]}`);
}

process.stdin.on('data', function(answer){
  let inputAnswer = answer.toString().trim();
});

askQuestion(0);
