let btn = document.getElementById("short-btn");
btn.addEventListener("click", short);

let longurl = document.getElementById("longurl");
let shorturl = document.getElementById("shorturl");
async function short(e) {
  e.preventDefault();
  const result = await fetch(
    `https://ulvis.net/API/write/get?url=https://${longurl.value}`
  );
  let response = await result.json();
  shorturl.value = response.data.url;
}

let copyIcon = document.getElementById("copy-icon");
copyIcon.addEventListener("click", () => {
  shorturl.select();
  window.navigator.clipboard.writeText(shorturl.value);
});

let clear = document.querySelector(".clr-btn");
clear.addEventListener("click", () => {
  longurl.value = "";
  shorturl.value = "";
});
