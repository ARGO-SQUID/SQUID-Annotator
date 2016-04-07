streetView = {

  init: function(){
    streetView.setStreetClickListeners()
  },

  setStreetClickListeners: function(){
    $('#launch-annotate').click(function(){
      annotate.launchForLocation(selectedLocationMarker.location)
    })

    $('#carousel-left').click(function(){
      streetView.moveCarouselBackward()
      return false
    })

    $('#carousel-right').click(function(){
      streetView.moveCarouselForward()
      return false
    })

    $('#close-street-view').click(function(){
      streetView.closeStreetView()
      return false
    })
  },

  moveToStreetView: function(){
    mapInteraction.recordZoomAndCenter()
    $('#map-container').addClass('street-view-on')
    setTimeout(function(){
      google.maps.event.trigger(map, "resize")
      mapInteraction.fitStreet(selectedStreet)
    },210);
  },

  removeStreetView: function(){
    $('#map-container').removeClass('street-view-on')
    setTimeout(function(){
      google.maps.event.trigger(map, "resize")
      mapInteraction.setZoomAndCenter()
    },210);
  },

  initializeForStreet: function(street){
    var streetHtml = Mustache.to_html($('#street-info-template').html(), street)
    $('#street-and-location-data #street-data').html(streetHtml)

    initialLocation = selectedStreetLocationMarkers[0].location
    restOfLocations = _.reject(selectedStreetLocationMarkers, function(l) { return l.id == initialLocation.id; });
    restOfLocations = _.map(restOfLocations, function(l){return l.location})

    var carouselHtml = Mustache.to_html($('#street-carousel-template').html(),
                        {locations: restOfLocations, initialLocation: initialLocation, initialLocationId: initialLocation.id})
    $('#street-view-inner #street-carousel-container').html(carouselHtml)
    streetView.setLocation(initialLocation)
    streetView.moveToStreetView()
  },

  setLocation: function(location){
    var locationHtml = Mustache.to_html($('#location-info-template').html(), location)
    $('#street-and-location-data #location-data').html(locationHtml)
    mapInitializer.setSelectedLocationMarker(location.id)
    $('.street-location-carousel .location-img-container').removeClass('active')
    $('.street-location-carousel .location-img-container[data-id=' + location.id + ']').addClass('active')
    $('#street-carousel-container .street-location-carousel').attr('data-current', location.id)
    setTimeout(function (){ streetView.showStreetViewAnnotations(location) }, 100);
  },

  moveCarouselForward: function(){
    var currentId = parseInt($('#street-carousel-container .street-location-carousel').attr('data-current'))
    var current = $('#street-carousel-container .street-location-carousel .location-img-container[data-id=' + currentId + ']')
    var next = $(current).next('.location-img-container')

    if(next.length > 0){
      var nextId = $(next).attr('data-id')
    }
    else{
      var nextId = $('#street-carousel-container .street-location-carousel .location-img-container:first-of-type').attr('data-id')
    }
    nextMarker = mapInitializer.findLocationMarkerById(nextId)
    streetView.setLocation(nextMarker.location)
  },

  moveCarouselBackward: function(){
    var currentId = parseInt($('#street-carousel-container .street-location-carousel').attr('data-current'))
    var current = $('#street-carousel-container .street-location-carousel .location-img-container[data-id=' + currentId + ']')
    var prev = $(current).prev('.location-img-container')

    if(prev.length > 0){
      var prevId = $(prev).attr('data-id')
    }
    else{
      var prevId = $('#street-carousel-container .street-location-carousel .location-img-container:last-of-type').attr('data-id')
    }
    prevMarker = mapInitializer.findLocationMarkerById(prevId)
    streetView.setLocation(prevMarker.location)
  },

  inStreetViewMode: function(){
    return $('#map-container').hasClass('street-view-on')
  },

  closeStreetView: function(){
    streetView.removeStreetView()
    mapInitializer.clearSelectedStreet()
  },

  showStreetViewAnnotations: function(location){
    anno.reset()
    if(location.annotations.length == 0){ return }
    else{
      anno.makeAnnotatable(document.getElementById('location-img-' + location.id));
      _.each(location.annotations, function(annotation){
        oneAnnotation = {
          annotationId: annotation.id,
          src : annotation.image_url,
          locationId: annotation.location_id,
          text : annotation.text,
          category: annotation.category,
          editable: false,
          shapes : [{
            type : annotation.shape,
            geometry : { x : annotation.x, y: annotation.y, width : annotation.width, height: annotation.height }
          }]
        }
        anno.addAnnotation(oneAnnotation)
      })
      anno.hideSelectionWidget()

    }
  }
}
