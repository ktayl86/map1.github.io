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
  [30.413460424044256, -91.17267251014708],
  [30.413414161573098, -91.17397338151932],
  [30.41332394969129, -91.17626398801804],
  [30.413229111469242, -91.17818176746368],
  [30.411818092891057, -91.17812544107437],
  [30.411799587593844, -91.17859750986099]
];
var polyline = L.polyline(latlngs, {color: 'red'}).addTo(myMap);
// zoom the map to the polylin
map.fitBounds(polyline.getBounds());
