const quiz1 = document.getElementById("quiz1");
const quiz2 = document.getElementById("quiz2");
const quiz3 = document.getElementById("quiz3");
const quiz4 = document.getElementById("quiz4");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");
const myPhoto = document.getElementById("my-photo");
const topicText = document.getElementById("topic-text");

let delay = 1000 / 50;

quiz1.onclick = function () {
  answer1.classList.toggle("a-show");
  quiz1.classList.toggle("open-q-part");
};
quiz2.onclick = function () {
  answer2.classList.toggle("a-show");
  quiz2.classList.toggle("open-q-part");
};
quiz3.onclick = function () {
  answer3.classList.toggle("a-show");
  quiz3.classList.toggle("open-q-part");
};
quiz4.onclick = function () {
  answer4.classList.toggle("a-show");
  quiz4.classList.toggle("open-q-part");
};
