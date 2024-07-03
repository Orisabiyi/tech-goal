const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("min");
const secEl = document.getElementById("secs");
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

    hourEl.textContent = curHour;
    minuteEl.textContent = curMinute;
    secEl.textContent = curSeconds;
    dayEl.textContent = curDay;
  }, 1000);
}

setTime();
