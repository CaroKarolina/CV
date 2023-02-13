console.log("Countdown Timer");

const finalDateInputEl = document.querySelector(".final-date-input");
const finalDateBtnEl = document.querySelector(".final-date-btn");
const msgDivEl = document.querySelector(".msg");

let timerId = null;
let finalDate = null;

console.log(timerId);

const initTimer = () => {
  msgDivEl.setAttribute("style", "visibility: hidden");
  clearInterval(timerId);
  finalDate = finalDateInputEl.value;
  if (finalDate !== "") {
    finalDate = new Date(finalDate);
    timer();
    timerId = setInterval(timer, 1000);
    return timerId;
  }
};

const timer = () => {
  const currentDate = new Date().getTime(); //zwraca liczbę milisec od 01.01.70 do dziś

  const timeLag = Math.floor((finalDate.getTime() - currentDate) / 1000);

  if (timeLag <= 0) {
    msgDivEl.setAttribute("style", "visibility: visible");
    pushTextContent(0, 0, 0, 0);
    clearInterval(timerId);
    return;
  }

  const days = Math.floor(timeLag / 60 / 60 / 24);
  const hours = Math.floor((timeLag / 60 / 60) % 24);
  const minutes = Math.floor((timeLag / 60) % 60);
  const seconds = Math.floor(timeLag % 60);

  pushTextContent(days, hours, minutes, seconds);
};

const pushTextContent = (...arguments) => {
  const h1ListEl = document.querySelectorAll(".clock-container h1");
  let index = 0;
  h1ListEl.forEach((h1El) => {
    h1El.textContent = arguments[index];
    index++
  });
};
finalDateBtnEl.addEventListener("click", initTimer);
