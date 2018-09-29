var start = document.querySelector("#start");
var intro = document.querySelector("#intro");
var main = document.querySelector("#main");
start.addEventListener("click", function() {
    intro.style.visibility = "hidden";
    intro.style.display = "none";
    main.style.visibility = "visible";
    main.style.display = "flex";
});

var table = timesTables.table();
var shuffled = timesTables.game.shuffled(table);

var q = document.querySelector("#sum");
q.textContent = `${shuffled[0][0]}x${shuffled[0][1]}`;

var answer = document.querySelector("#answer");
var ansButton = document.querySelector("#submit");
var form = document.querySelector("#answer-form");
var i = 0;
form.addEventListener("submit", function(event) {
    event.preventDefault();
    if (timesTables.check(shuffled[i], answer.value) == true) {
        var answerBox = document.querySelector(
            ".box" + timesTables.box(shuffled[i])
        );
        answerBox.setAttribute("style", "background-color: #09bc8a");
        i += 1;
        q.textContent = `${shuffled[i][0]}x${shuffled[i][1]}`;
        answer.value = "";
        answer.focus();
    } else {
        var answerBox = document.querySelector(
            ".box" + timesTables.box(shuffled[i])
        );
        answerBox.setAttribute("style", "background-color: #d8315b");
        i += 1;
        q.textContent = `${shuffled[i][0]}x${shuffled[i][1]}`;
        answer.value = "";
        answer.focus();
    }
});
