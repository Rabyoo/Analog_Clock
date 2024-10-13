const numberHours = document.querySelector(".number-hours");
const barSeconds = document.querySelector(".bar-seconds");

const numberElement = [];
const barElement = [];

// Create Number Hours
for (let i = 1; i <= 12; i++) {
      numberElement.push(
            `<span style="--index:${i};"><p>${i}</p></span>`
      );
}

numberHours.insertAdjacentHTML("afterbegin", numberElement.join(""));

// Create Bar Seconds
for (let i = 1; i <= 60; i++) {
      barElement.push(
            `<span style="--index:${i};"><p></p></span>`
      );
}
barSeconds.insertAdjacentHTML("afterbegin", barElement.join(""));

const handHours = document.querySelector(".hand.hours");
const handMinutes= document.querySelector(".hand.minutes");
const handSecond = document.querySelector(".hand.second");

function getCurrentTime() {
      let date = new Date();

      let currentHours = date.getHours();
      let currentMinutes = date.getMinutes();
      let currentSecond = date.getSeconds();

      handHours.style.transform = `rotate(${currentHours * 30 + currentMinutes / 2}deg)`;
      handMinutes.style.transform = `rotate(${currentMinutes * 6}deg)`;
      handSecond.style.transform = `rotate(${currentSecond * 6}deg)`;
}

// Call getCurrentTime Function on page load
getCurrentTime();

// Call getCurrentTime to set clock hands every second
setInterval(getCurrentTime, 1000);












