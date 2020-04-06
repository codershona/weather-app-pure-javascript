// function
let appId = '478cc3c9e7cd7db831d6f004db3d70f7';
let units = 'imperial';
// let searchMethod = 'zip';
let searchMethod;

function getSearchMethod(searchTerm) {
   if(searchTerm.length === 5 && Number.parseInt(searchTerm) + '' === searchTerm)
     searchMethod = 'zip';
    else {
       searchMethod = 'q';

    }
}

function searchWeather(searchTerm) {
  getSearchMethod(searchTerm);

  fetch(`http://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&APPID=${appId}&units=${units}`).then(result => {
    return result.json();
  }).then(result => {
    // IntersectionObserver();
    init(result);
  })

}

function init(resultFromServer) {
      // console.log(resultFromServer);
      switch (resultFromServer.weather[0].main) {
        case 'Clear':
          document.body.style.backgroundImage = 'url("clear.jpg")';
          break;

          case 'Clouds':
            document.body.style.backgroundImage = 'url("cloudy.jpg")';
          break;


          case 'Rain':
          case 'Drizzle':
          case 'Mist':
            document.body.style.backgroundImage = 'url("rain.jpg")';
           break;

        case 'Thunderstorm':
          document.body.style.backgroundImage = 'url("storm.jpg")';
          break;

          case 'Snow':
            document.body.style.backgroundImage = 'url("snow.jpg")';
          break;


        default:
          break;

      }
}

document.getElementById('searchBtn').addEventListener('click', () => {
  let searchTerm = document.getElementById('searchInput').value;
  if(searchTerm)
    searchWeather(searchTerm);
})
