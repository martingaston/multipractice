// create multiplication tables
let num = 10; // how big will the multiplication tables go?
let multiArr = [];
for (let f1 = 2; f1 <= num; f1++) {
  for (let f2 = 2; f2 <= num; f2++) {
    multiArr.push([f1, f2]);
  }
}

// taking the Fisher-Yates shuffle from https://bost.ocks.org/mike/shuffle/
function shuffle(arr) {
  let a = arr.length, t, i;
  while (a) {
    i = Math.floor(Math.random() * a--);
    t = arr[a];
    arr[a] = arr[i];
    arr[i] = t;
  }
  return arr;
}

// todo: create an object that can hold the current question and previous right/wrong answers

let clock = {
  startTime: new Date().getTime(),
  finTime: 0,
};

function nextQ() {
  // todo: what happens when we reach the end of the pack? right now it just hangs :) 
  if (shuffPos++ <= shuffLen) {
    answer.value = '';
    q.textContent = `${shuffled[shuffPos][0]}x${shuffled[shuffPos][1]}`;
    clock.startTime = new Date().getTime();
    answer.focus();
  }
}

function chkAnswer() {
  if (answer.value == shuffled[shuffPos][0] * shuffled[shuffPos][1]) {
    clock.finTime = new Date().getTime();
    console.log((clock.finTime - clock.startTime) / 1000);
    nextQ();
  } else {
    alert('that\'s wrong!');
  }
}

let shuffled = shuffle(multiArr), shuffLen = shuffled.length, shuffPos = 0;

let q = document.querySelector('#sum');
q.textContent = `${shuffled[shuffPos][0]}x${shuffled[shuffPos][1]}`;

let answer = document.querySelector('#answer');
let ansButton = document.querySelector('#submit');
ansButton.addEventListener('click', function () {
  chkAnswer();
});
answer.addEventListener('keypress', function (event) {
  if (event.keyCode == 13) {
    chkAnswer();
  }
});

module.exports = shuffle();