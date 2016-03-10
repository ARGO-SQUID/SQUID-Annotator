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
      streetView.removeStreetView()
      mapInitializer.clearSelectedStreet()
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
    $('#street-view-inner-top #street-data').html(streetHtml)

    initialLocation = street.locations[0]
    restOfLocations = _.reject(street.locations, function(l) { return l == initialLocation; });

    var carouselHtml = Mustache.to_html($('#street-carousel-template').html(),
                        {locations: restOfLocations, initialLocation: initialLocation, initialLocationId: initialLocation.id})
    $('#street-view-inner-bottom #street-carousel-container').html(carouselHtml)
    streetView.setLocation(initialLocation)
    streetView.moveToStreetView()
  },

  setLocation: function(location){
    var locationHtml = Mustache.to_html($('#location-info-template').html(), location)
    $('#street-view-inner-top #location-data').html(locationHtml)
    mapInitializer.setSelectedLocationMarker(location.id)
    $('.street-location-carousel .location-img').removeClass('active')
    $('.street-location-carousel .location-img[data-id=' + location.id + ']').addClass('active')
    $('#street-carousel-container .street-location-carousel').attr('data-current', location.id)
  },

  moveCarouselForward: function(){
    var currentId = parseInt($('#street-carousel-container .street-location-carousel').attr('data-current'))
    var current = $('#street-carousel-container .street-location-carousel .location-img[data-id=' + currentId + ']')
    var next = $(current).next('.location-img')

    if(next.length > 0){
      var nextId = $(next).attr('data-id')
    }
    else{
      var nextId = $('#street-carousel-container .street-location-carousel .location-img:first-of-type').attr('data-id')
    }
    nextMarker = mapInitializer.findLocationMarkerById(nextId)
    streetView.setLocation(nextMarker.location)
  },

  moveCarouselBackward: function(){
    var currentId = parseInt($('#street-carousel-container .street-location-carousel').attr('data-current'))
    var current = $('#street-carousel-container .street-location-carousel .location-img[data-id=' + currentId + ']')
    var prev = $(current).prev('.location-img')

    if(prev.length > 0){
      var prevId = $(prev).attr('data-id')
    }
    else{
      var prevId = $('#street-carousel-container .street-location-carousel .location-img:last-of-type').attr('data-id')
    }
    prevMarker = mapInitializer.findLocationMarkerById(prevId)
    streetView.setLocation(prevMarker.location)
  }
}
