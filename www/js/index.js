
document.addEventListener('deviceready', onDeviceReady, false);

function fetch() {
    console.log("fetcho");
    cordovaFetch('https://api.chucknorris.io/jokes/random')
  .then(function(response) {
    return response.json()
  }).then(function(json) {
    console.log('parsed json', json)
    document.getElementById("a").textContent = json.value;
    
  }).catch(function(ex) {
    console.log('parsing failed', ex)
  })
}

function checkConnection() {
    var networkState = navigator.connection.type;
    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';
    document.getElementById("battery").textContent = states[networkState];
}

function onDeviceReady() {
    fetch();
    checkConnection();
    const button = document.getElementById("button");
    button.addEventListener("click", fetch);
}
