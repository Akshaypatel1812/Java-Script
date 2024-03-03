document.addEventListener("DOMContentLoaded", () => {
  let num = 0;
  function interval() {
    console.log("Akshay", num);
    num = num + 1;
  }
  let intervalID
  document.getElementById("button1").addEventListener("click", () => {
    intervalID=setInterval(interval, 1000);
  });

  document.getElementById("button2").addEventListener("click", () => {
    clearInterval(intervalID);
  });
});
