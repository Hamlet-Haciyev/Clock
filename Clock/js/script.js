let hour = document.querySelector(".hour");
let minutes = document.querySelector(".minute");
let seconds = document.querySelector(".second");
let stops = document.querySelector("#stop");
let continues = document.querySelector("#continue");
let count = 1;
let countmin = 1;
let counthour = 1;

let timer = setInterval(() => {
  if (count <= 60) {
    seconds.style.transform = `rotate(${count * 6}deg)`;
    count++;
  } else {
    count = 1;
  }

  if (count * countmin + 1 == 3600) {
    hour.style.transform = `rotate(${counthour * 3.6}deg)`;
    counthour++;
  } else if (counthour == 100) {
    counthour = 1;
  }

  if (count == 1) {
    minutes.style.transform = `rotate(${countmin * 6}deg)`;
    countmin++;
  } else if (countmin == 60) {
    countmin = 1;
  }

  // if (countmin == 1) {
  //   hour.style.transform = `rotate(${counthour * 30}deg)`;
  //   counthour++;
  // } else if (counthour == 12) {
  //   counthour = 1;
  // }
}, 1000);

stops.addEventListener("click", () => {
  clearInterval(timer);
});
continues.addEventListener("click", () => {
  timer = setInterval(() => {
    if (count <= 60) {
      seconds.style.transform = `rotate(${count * 6}deg)`;
      count++;
    } else {
      count = 1;
    }

    if (count * countmin + 1 == 3600) {
      hour.style.transform = `rotate(${counthour * 36}deg)`;
      counthour++;
    } else if (counthour == 100) {
      counthour = 1;
    }

    if (count == 1) {
      minutes.style.transform = `rotate(${countmin * 6}deg)`;
      countmin++;
    } else if (countmin == 60) {
      countmin = 1;
    }
  }, 1000);
});
