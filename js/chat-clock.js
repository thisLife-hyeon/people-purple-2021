const clockTitle2s = document.querySelectorAll(".chat-clock");

function clock2() {
  const date2 = new Date();

  clockTitle2s.forEach((clockTitle2) => {
    let hours2 = String(date2.getHours()).padStart(2, "0");

    const minutes2 = String(date2.getMinutes()).padStart(2, "0");
    const ampm2 = hours2 >= 12 ? "오후" : "오전";
    hours2 = hours2 % 12;
    hours2 = hours2 ? hours2 : 12;

    clockTitle2.innerText = `${ampm2} ${hours2}:${minutes2}`;
  });
}

clock2();
setInterval(clock2, 1000);
