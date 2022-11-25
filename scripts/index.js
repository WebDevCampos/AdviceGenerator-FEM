const adviceId = document.querySelector(".advice__id");
const adviceText = document.querySelector(".advice__text");
fetch("https://api.adviceslip.com/advice")
  .then((res) => res.json())
  .then((data) => {
    adviceId.innerText = data.slip.id;
    adviceText.innerText = `"${data.slip.advice}"`;
  });
