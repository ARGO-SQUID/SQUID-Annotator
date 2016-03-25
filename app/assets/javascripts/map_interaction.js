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
      if (map.getZoom() < 10) map.setZoom(10);

      var strokeWeightLevel = mapInteraction.streetThicknessForZoom()
      _.each(allStreets, function(street){
        street.setOptions({ strokeWeight: strokeWeightLevel });
      })
    })
  },

  streetThicknessForZoom: function(){
    var z = map.getZoom()
    if(z > 12){ return 20 }
    else if(z > 6){ return 10 }
    else {return 5 }
  }

}
