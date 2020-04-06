// function
let appId = '478cc3c9e7cd7db831d6f004db3d70f7';
let units = 'imperial';
let searchMethod = 'zip';

function searchWeather(searchTerm) {
  fetch(`http://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&APPID=${appId}&units=${units}`).then(result => {
    return result.json();
  }).then(result => {
    // IntersectionObserver();
    init(result);
  })

}

function init(resultFromServer) {
      console.log(resultFromServer);
}
