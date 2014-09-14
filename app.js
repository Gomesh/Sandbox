/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//var myvariable = 'HI';
//console.log(myvariable);
        
var question = [
    {
        question: 'When u complete your graduation?',
        answer1: '2004',
        answer2: '2005',
        answer3: '2006',
        correctAnswer:2
    },
    {
        question: 'First Watch u owned.',
        answer1: 'Titan',
        answer2: 'HMT',
        answer3: 'Rolax',
        correctAnswer:2
    },
    {
        question:'Your Best Friend.',
        answer1: 'Abhi',
        answer2: 'Ram',
        answer3: 'Rohan',
        correctAnswer:1
    }
];

var readline = require('readline');
var rl = readline.createInterface(process.stdin , process.stdout);
var numCorrect = 0;
var questionNumber = 0;
function askQuestion(item) {
    console.log("Question: " + item.question);
    console.log();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
    console.log("1) " + item.answer1);
    console.log("2) " + item.answer2);
    console.log("3) " + item.answer3);
    console.log();
    console.log('Type the number of your answer: ');
    rl.on('line', function (userInput){
       var userAnswer = parseInt(userInput);
       if (userAnswer === item.correctAnswer){
         console.log('CORRECT');
         numCorrect++;
       } else {
         console.log('WRONG!');
       }
       console.log('-----------------------------------');
       questionNumber++;
       if (questionNumber < question.length) {
          askQuestion(question[questionNumber]);
       } else {
         rl.close();
       }
    });
 rl.prompt();
}