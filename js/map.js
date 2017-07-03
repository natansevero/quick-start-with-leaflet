function tileLayerMap(map) {
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
}

/*
  infos = {
      message: String,
      open: boolean
  }
*/
function popup(geom, infos) {
  infos.open ? geom.bindPopup(infos.message).openPopup() : geom.bindPopup(infos.message);
}

let mapid = L.map('map').setView([51.505, -0.09], 13);
tileLayerMap(mapid);

// Pontos
let marker = L.marker([51.505, -0.09]).addTo(mapid);

// Circulos
let circle = L.circle([51.505, -0.11], {
  color: 'green',
  fillColor: 'red',
  fillOpacity: 0.3,
  radius: 800
}).addTo(mapid);

// poligonos
let polygon = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047]
]).addTo(mapid);

popup(marker, {
  message: 'Olá, sou um ponto!',
  open: true
});

popup(circle, {
  message: 'Olá, sou um circulo!',
  open: false
});

popup(polygon, {
  message: 'Olá, sou um poligono!',
  open: false
});

// Evento de Click no mapa
mapid.on('click', (event) => {
  L.popup()
      .setLatLng(event.latlng)
      .setContent(`As coordenadas da área clicada são essas: ${event.latlng.toString()}`)
      .openOn(mapid);
});
