let weather ={
  "apiKey":"9386953c310aad1633b56342e6747912",
  fetchWeather: function(){
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Denver&units=metric&appid=9386953c310aad1633b56342e6747912"
      )
      .then((response) =>response.json())
      .then((data) => console.log(data));
  }
}