let divConatiner = document.createElement("div");
divConatiner.setAttribute("class", "container-fluid  bg-black");

let rowDiv = document.createElement("div");
rowDiv.setAttribute("class", "row");

divConatiner.appendChild(rowDiv);
document.body.appendChild(divConatiner);

let fetchCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => {
      return response.json();
    })
    .catch(() => {
      console.log("No Data");
    })
    .then((countries) => {
      countries.forEach((country) => {
        let colDiv = document.createElement("div");
        colDiv.setAttribute("class", "col-lg-4 col-sm-12 p-2 ");

        let cardDiv = document.createElement("div");
        cardDiv.setAttribute("class", "card bg-secondary text-white ms-5");
        cardDiv.style.maxWidth = "18rem";

        let cardHeader = document.createElement("div");
        cardHeader.setAttribute(
          "class",
          "card-header text-center bg-black text-white"
        );
        cardHeader.innerText = `${country.name.common}`;

        let image = document.createElement("img");
        image.setAttribute("src", `${country.flags.png}`);
        image.setAttribute("class", "card-img-top mt-5");
        image.setAttribute("class", "img");
        let cardBody = document.createElement("div");
        cardBody.setAttribute("Class", "card-body text-center");
        cardBody.innerHTML = `<ul>
<li >Capital: ${country.capital}</li>
<li >Region: ${country.region}</li>
<li >Country Code: ${country.cca3}</li><br>
</ul>`;

        let btn = document.createElement("button");
        btn.setAttribute("class", " btn btn-outline-light");
        btn.innerText = "click for Weather";

        btn.addEventListener("click", () => {
          fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${country.name.common}&appid=57a85b994640d1875636255e7ff2d10c`
          )
            .then((response) => {
              return response.json();
            })
            .catch(() => {
              console.log("Error in weather api");
            })
            .then((data) => {
              let weatherBody = document.createElement("div");
              weatherBody.setAttribute("class", "weather");
              weatherBody.style.backgroundColor = "skyBlue";
              weatherBody.style.color = "red";
              weatherBody.style.borderRadius = "20px";
              weatherBody.style.marginTop = "10px";
              weatherBody.innerHTML = `<ul style='padding:10px'>
    <li>Latitude: ${data.coord.lat}</li>
    <li>Longitude: ${data.coord.lon}</li>
    <li>Temperature: ${data.main.temp}</li>
    <li>Humidity: ${data.main.humidity}</li>
    <li>Wind-Speed: ${data.wind.speed}</li>
    </ul>`;
              cardBody.appendChild(weatherBody);
            });
        });

        cardBody.appendChild(btn);
        cardDiv.append(cardHeader, image, cardBody);
        colDiv.appendChild(cardDiv);
        rowDiv.appendChild(colDiv);
      });
    });
};
fetchCountries();
