function updateString(t) {
  return t < 10 ? "0" + t : t;
}

function Clock() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  hours = updateString(hours);
  minutes = updateString(minutes);
  seconds = updateString(seconds);

  let newTime = hours + " : " + minutes + " : " + seconds;

  document.getElementById("digital-web-clock").innerText = newTime;

  setTimeout(Clock, 1000);
}

window.onload = function() { Clock(); }
