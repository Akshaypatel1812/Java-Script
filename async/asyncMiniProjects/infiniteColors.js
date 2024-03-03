document.addEventListener("DOMContentLoaded", () => {
  function randomColor() {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  let intervalID;
  function changeColor() {
    document.body.style.backgroundColor = randomColor();
  }

  document.getElementById("buttonId1").addEventListener("click", () => {
    if (intervalID == null) {
      intervalID = setInterval(changeColor, 1000);
    }
  });

  document.getElementById("buttonId2").addEventListener("click", () => {
    clearInterval(intervalID);
    intervalID = null;
  });
});
