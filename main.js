// using jquery, get the body element
const gameContainer = $('.game-container');

const questionsContainer = $('<div class="questions-container"></div>');

gameContainer.append(questionsContainer);

const row1 = $('<div class="row row-1"><div class="column column-100">$100</div><div class="column column-100">$100</div><div class="column column-100">$100</div><div class="column column-100">$100</div><div class="column column-100">$100</div></div>');

const row2 = $('<div class="row row-2"><div class="column column-200">$200</div><div class="column column-200">$200</div><div class="column column-200">$200</div><div class="column column-200">$200</div><div class="column column-200">$200</div></div>');

const row3 = $('<div class="row row-3"><div class="column column-400">$400</div><div class="column column-400">$400</div><div class="column column-400">$400</div><div class="column column-400">$400</div><div class="column column-400">$400</div></div>');

const row4 = $('<div class="row row-4"><div class="column column-600">$600</div><div class="column column-600">$600</div><div class="column column-600">$600</div><div class="column column-600">$600</div><div class="column column-600">$600</div></div>');

const row5 = $('<div class="row row-5"><div class="column column-800">$800</div><div class="column column-800">$800</div><div class="column column-800">$800</div><div class="column column-800">$800</div><div class="column column-800">$800</div></div>');

questionsContainer.append(row1);
questionsContainer.append(row2);
questionsContainer.append(row3);
questionsContainer.append(row4);
questionsContainer.append(row5);

//declare five arrays to hold only questions of that value
const value100Qs = [];
const value200Qs = [];
const value400Qs = [];
const value600Qs = [];
const value800Qs = [];

//loop through all the questions and push into appropriate array above

for (let i = 0; i < QUESTIONS.length; i++) {
    if (QUESTIONS[i].value === '$100') {
        value100Qs.push(QUESTIONS[i]);
    } else if (QUESTIONS[i].value === '$200') {
        value200Qs.push(QUESTIONS[i]);
    } else if (QUESTIONS[i].value === '$400') {
        value400Qs.push(QUESTIONS[i]);
    } else if (QUESTIONS[i].value === '$600') {
        value600Qs.push(QUESTIONS[i]);
    } else if (QUESTIONS[i].value === '$800') {
        value800Qs.push(QUESTIONS[i]);
    }
}

//loop through the columns with class column

// this loops through each box and console logs a message
// TODO: make it so that when you click a box, it 

function createClickEvents(string, array) {
    $(string).each(function(index) {
        $(this).click(function() {
            let randomNumber = Math.floor(Math.random() * (array.length + 1));
            // console.log(array[randomNumber]);

            // console.log(array[randomNumber].question);
            $(".jeopardy-question").text(array[randomNumber].question.toUpperCase());
            
            // console.log(array[randomNumber].value);
            $(".jeopardy-value").text(array[randomNumber].value);

            // console.log(array[randomNumber].answer);
            $(".jeopardy-answer").text(array[randomNumber].answer);

            $('.user-answers').val("");

            $('.jeopardy-question').css("background-color", "#060CE9");
            $('.jeopardy-question').css("border", "3px solid black");
            $('.questions-data-container').css("width", "600px");
            $('.questions-data-container').css("height", "300px");
        })
    })
}

createClickEvents(".column-100", value100Qs);
createClickEvents(".column-200", value200Qs);
createClickEvents(".column-400", value400Qs);
createClickEvents(".column-600", value600Qs);
createClickEvents(".column-800", value800Qs);

// work on the submit answer button here


$('.submit-button').click(function () {
    // get the correct answer
    const jeopardyAnswer = $('.jeopardy-answer').text();
    // console.log(jeopardyAnswer);
    // get the user input
    const userAnswer = $('.user-answers').val();
    // console.log(userInput);
    // get the score div
    const score = $('.update-score');
    let scoreCounter = 0;

    if(userAnswer.toLowerCase() === jeopardyAnswer.toLowerCase()) {
        //make sure to change the wording to Correct!
        $('.jeopardy-question').text("Correct!")
        let scoreNumber = Number(score.text());
        //update scoreNumber based on the questions value
        // create another if statement to switch score
        scoreNumber = scoreNumber + 100;
        console.log("scoreNumber is: " + scoreNumber);
        score.text(scoreNumber);
        console.log(typeof score.text());
        console.log(typeof scoreNumber);
    }


});

