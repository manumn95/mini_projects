let quotes = document.querySelector("p");

let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
  let data = await fetch("https://api.gameofthronesquotes.xyz/v1/random");
  let response = await data.json();
  quotes.innerText = response.sentence;
});
