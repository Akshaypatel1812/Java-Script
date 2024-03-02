document.addEventListener("DOMContentLoaded", () => {
  let title = document.querySelector("#title");
  function changeText() {
    title.innerHTML = "Hello Ji";
  }

  let To=setTimeout(changeText, 4000);
  //if user click cancel button before timeout than i does not change text
  document.querySelector('#button').addEventListener('click',()=>{
      clearTimeout(To);                  
  })
});
