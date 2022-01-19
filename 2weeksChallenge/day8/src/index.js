const clockTitle = document.querySelector(".js-clock");

function getTime() {
  const date = new Date();
  const xmasDay = new Date(2022, 11, 25, 0, 0, 0);
  const gap = xmasDay - date;
  const day = Math.floor(gap / (1000 * 60 * 60 * 24));
  const hours = Math.floor((gap / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor(((gap / 1000) * 60) % 60);
  const seconds = Math.floor((gap / 1000) % 60);

  clockTitle.innerText = `${day}d ${hours < 10 ? `0${hours}` : hours}h ${
    minutes < 10 ? `0${minutes}` : minutes
  }m ${seconds < 10 ? `0${seconds}` : seconds}s`;
}
function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();