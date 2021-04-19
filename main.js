// using jquery, get the body element
const body = $('body');

const questionsContainer = $('<div class="questions-container"></div>');

body.append(questionsContainer);

function createGrid() {
    for (let rows = 0; rows < 5; rows++) {
        for (let columns = 0; columns < 5; columns++) {
            questionsContainer.append("<div class='grid'></div>");
        };
    };
    $(".grid").width(960/5);
    $(".grid").height(960/5);
};

body.ready(function (){
    createGrid();
})