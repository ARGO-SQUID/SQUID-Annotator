content = {

  initializeForStreet: function(street){
    var streetHtml = Mustache.to_html($('#street-info-template').html(), street)
    $('#map-header-inner-top').html(streetHtml)

    initialLocation = street.locations[0]

    var carouselHtml = Mustache.to_html($('#street-carousel-template').html(),
                                          {locations: street.locations, initial: initialLocation})
    $('#map-header-inner-bottom').html(carouselHtml)
    content.setLocation(initialLocation)
  },

  setLocation: function(location){
    var locationHtml = Mustache.to_html($('#location-info-template').html(), location)
    $('#map-header-inner-middle').html(locationHtml)
    mapInitializer.setSelectedLocationMarker(location.id)
    //move image carousel to this location
  }

}
