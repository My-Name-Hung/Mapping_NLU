mapboxgl.accessToken = "pk.eyJ1IjoidGhhbmhodW5nMTExMTIwMDIiLCJhIjoiY2xuOG5xbXhyMDBqdzJqb3o2eTg4ZDdvNCJ9.c1wnXUMq8opOXn7NrPIwhA"

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
})

function successLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
    setupMap([106,16])
}

function setupMap(center) {
    const map = new mapboxgl.Map({
        container: "map",
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 4
    })

    const nav = new mapboxgl.NavigationControl();

    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
      });

    map.addControl(directions, 'top-left');
}