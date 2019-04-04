let myMap = L.map('map1').setView([32.18, -99.14], 4)
let basemapUrl = 'https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png'
L.tileLayer(basemapUrl).addTo(myMap)
let point = L.marker([30, -90]).addTo(myMap)
let polygon = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047]
]).addTo(myMap)
polygon.bindPopup('A polygon')
marker.bindPopup('A marker')
// create a red polyline from an array of LatLng points
var latlngs = [
    [30.437070, -91.1858988],
    [30.418114, -91.176566],
    [30.409042, -91.176046],
    [30.410637, -91.183431]
];
var polyline = L.polyline(latlngs, {color: 'red'}).addTo(myMap);
// zoom the map to the polylin
map.fitBounds(polyline.getBounds());
