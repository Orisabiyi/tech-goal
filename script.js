const timeEl = document.getElementById("time");
const dayEl = document.getElementById("day");

function setTime() {
  setInterval(function () {
    const dateObj = new Date();
    const curHour = String(dateObj.getHours()).padStart(2, "0");
    const curMinute = String(dateObj.getMinutes()).padStart(2, "0");
    const curSeconds = String(dateObj.getSeconds()).padStart(2, "0");

    const dayFormatter = new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      timeZone: "UTC",
    });
    const curDay = dayFormatter.format(dateObj);

    timeEl.textContent = `${curHour}:${curMinute}:${curSeconds}`;
    dayEl.textContent = curDay;
  }, 1000);
}

setTime();
