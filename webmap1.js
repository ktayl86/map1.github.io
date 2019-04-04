let myMap = L.map('map1').setView([32.18, -100], 4)
let basemapUrl = 'https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png'
L.tileLayer(basemapUrl).addTo(myMap)
let point = L.marker([30.41317822262917, -91.17254376411438]).addTo(myMap)
let polygon = L.polygon([
  [30.41822071510673, -91.1945915222168],
  [30.394791736572984, -91.20600700378418],
  [30.38905392609894, -91.1888837814331],
  [30.409745477799135, -91.16669654846191],
  [30.419738037994318, -91.17047309875488],
  [30.41822071510673, -91.1945915222168]
]).addTo(myMap)
polygon.bindPopup('LSU Main Campus')
point.bindPopup('My Apartment')
// create a red polyline from an array of LatLng points
var latlngs = [
  [30.413460424044256, -91.17267251014708],
  [30.413414161573098, -91.17397338151932],
  [30.41332394969129, -91.17626398801804],
  [30.413229111469242, -91.17818176746368],
  [30.411818092891057, -91.17812544107437],
  [30.411799587593844, -91.17859750986099]
]
var polyline = L.polyline(latlngs, { color: 'red' }).addTo(myMap)
// zoom the map to the polylin
myMap.fitBounds(polyline.getBounds())
