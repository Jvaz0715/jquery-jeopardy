// using jquery, get the body element
const body = $('body');

const questionsContainer = $('<div class="questions-container"></div>');

body.append(questionsContainer);

const row1 = $('<div class="row row-1"><div class="column">100</div><div class="column">100</div><div class="column">100</div><div class="column">100</div><div class="column">100</div></div>');

const row2 = $('<div class="row row-2"><div class="column">200</div><div class="column">200</div><div class="column">200</div><div class="column">200</div><div class="column">200</div></div>');

const row3 = $('<div class="row row-3"><div class="column">300</div><div class="column">300</div><div class="column">300</div><div class="column">300</div><div class="column">300</div></div>');

const row4 = $('<div class="row row-4"><div class="column">400</div><div class="column">400</div><div class="column">400</div><div class="column">400</div><div class="column">400</div></div>');

const row5 = $('<div class="row row-5"><div class="column">500</div><div class="column">500</div><div class="column">500</div><div class="column">500</div><div class="column">500</div></div>');

questionsContainer.append(row1);
questionsContainer.append(row2);
questionsContainer.append(row3);
questionsContainer.append(row4);
questionsContainer.append(row5);
