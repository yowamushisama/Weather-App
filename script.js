fetch('https://dataservice.accuweather.com/locations/v1/locationKey?apikey=1213&language=en-us&details=true', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => {
  console.log(data)
})
.catch(error => {
  console.log(error);
});
