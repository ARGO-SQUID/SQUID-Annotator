content = {

  initializeForStreet: function(street){
    var streetHtml = Mustache.to_html($('#street-info-template').html(), street)
    $('#map-header-inner-top').html(streetHtml)

    initialLocation = street.locations[0]
    restOfLocations = _.reject(street.locations, function(l) { return l == initialLocation; });

    var carouselHtml = Mustache.to_html($('#street-carousel-template').html(),
                        {locations: restOfLocations, initialLocation: initialLocation, initialLocationId: initialLocation.id})
    $('#map-header-inner-bottom').html(carouselHtml)
    content.setLocation(initialLocation)
  },

  setLocation: function(location){
    var locationHtml = Mustache.to_html($('#location-info-template').html(), location)
    $('#map-header-inner-middle').html(locationHtml)
    mapInitializer.setSelectedLocationMarker(location.id)
    $('.street-location-carousel .location-img').removeClass('active')
    $('.street-location-carousel .location-img[data-id=' + location.id + ']').addClass('active')
  }

}
