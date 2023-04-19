function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("La geolocalización no está soportada por este navegador.");
  }
}

function showPosition(position) {
  console.log("Latitud: " + position.coords.latitude +
  " Longitud: " + position.coords.longitude);
}

