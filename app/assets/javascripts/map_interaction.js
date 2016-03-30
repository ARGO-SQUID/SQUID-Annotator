mapInteraction = {
  init: function() {
    mapInteraction.zoomListener()
  },

  fitStreet: function(streetPath){
    points = selectedStreet.getPath().j
    var bounds = new google.maps.LatLngBounds();

    _.each(points, function(point){
      new google.maps.LatLng(point.lat(),point.lng())
      bounds.extend(new google.maps.LatLng(point.lat(),point.lng()))
    })
    map.fitBounds(bounds)
  },

  recordZoomAndCenter: function(){
    window.zoomLevel = map.getZoom()
    window.mapCenter = map.getCenter()
  },

  setZoomAndCenter: function(){
    map.setZoom(window.zoomLevel)
    map.setCenter(window.mapCenter)
  },

  zoomListener: function() {
    google.maps.event.addListener(map, 'zoom_changed', function() {
      if (map.getZoom() < 14) map.setZoom(14);

      var strokeWeightLevel = mapInteraction.streetThicknessForZoom()
      _.each(allStreets, function(street){
        street.setOptions({ strokeWeight: strokeWeightLevel });
      })
    })
  },

  streetThicknessForZoom: function(){
    var z = map.getZoom()
    return ({14: 3, 15: 5, 16: 7, 17: 10,
             18: 12, 19: 23, 20: 29, 21: 34})[z]
  }

}
