let myMap = L.map('map1').setView([32.18, -99.14], 4)
L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png').addTo(myMap)
let marker=L.marker([30.411912, -91.183643]).addTo(myMap)
let polygon=L.polygon([
  [30.41822071510673, -91.1945915222168],
  [30.394791736572984, -91.20600700378418],
  [30.38905392609894, -91.1888837814331],
  [30.409745477799135, -91.16669654846191],
  [30.419738037994318, -91.17047309875488],
  [30.41822071510673, -91.1945915222168]
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
