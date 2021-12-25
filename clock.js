const clockTitle = document.querySelector(".js-clock");

function clock() {
  const date = new Date();

  let hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "오후" : "오전";
  hours = hours % 12;
  hours = hours ? hours : 12;

  clockTitle.innerText = `${hours}:${minutes} ${ampm}`;
}

clock();
setInterval(clock, 1000);
