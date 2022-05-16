
// inicia la Configuración
function initMap() {
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const directionsService = new google.maps.DirectionsService();
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: { lat: 6.244338, lng: -75.573553 },
    });
    directionsRenderer.setMap(map);
    calculateAndDisplayRoute(directionsService, directionsRenderer);
  }

  function calculateAndDisplayRoute(directionsService, directionsRenderer) {

    directionsService.route(
      {
        origin: { lat: 3.3212265, lng: -76.6334447},
        destination: { lat: 3.3018364, lng: -76.649201 },
        // tambien se puede usar de otro modo WALKING - BICYCLING - TRANSIT
        travelMode: google.maps.TravelMode["WALKING"],
      },
      (response, status) => {
        if (status == "OK") {
          directionsRenderer.setDirections(response);
        } else {
          window.alert("Directions request failed due to " + status);
        }
      }
    );
  }