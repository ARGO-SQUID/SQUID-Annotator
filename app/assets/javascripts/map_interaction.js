mapInteraction = {
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

}
