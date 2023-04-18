function initMap() {
  var location = {lat: 40.712776, lng: -74.005974}; // Cambia las coordenadas por las de tu ubicación
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: location
  });
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
}