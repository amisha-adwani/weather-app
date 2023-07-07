document.getElementById("submit").onclick = async function () {
  let city = document.getElementById("city");
  let cityValue = city.value;
  const apikey = "";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric`;
  const response = await fetch(url + `&appid=${apikey}`);
  let data = await response.json();
  let data2 = data.weather[0].description;
  let data3 = data.main.temp;
  let data4 = data.name;
  let data5 = data.sys.country;
  document.getElementById("displayDeg").innerText = data3 + "°C";
  document.getElementById("displayDesc").innerText = data2;
  document.getElementById("displayCity").innerText = data4 + ", " + data5;
};
