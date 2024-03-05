let count = 10;

document.addEventListener("DOMContentLoaded", () => {
  let num = document.getElementById("count");
  num.innerHTML = count;

  let pb = document.getElementById("increment");
  let mb = document.getElementById("decrement");

  pb.addEventListener("click", () => {
    if (count >= 20) {
      num.innerHTML = "Max";
      setTimeout(() => {
        num.innerHTML = count;
      }, 1000);
    } else {
      count = count + 1;
      num.innerHTML = count;
    }
  });

  mb.addEventListener("click", () => {
    if (count <= 0) {
        num.innerHTML = "Min";
        setTimeout(() => {
          num.innerHTML = count;
        }, 1000);
    } else {
      count = count - 1;
      num.innerHTML = count;
    }
  });
});
