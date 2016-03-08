mapInitializer = {
  styles: [{"featureType":"landscape","elementType":"all","stylers":[{"visibility":"simplified"},{"hue":"#0066ff"},{"saturation":74},{"lightness":100}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"off"},{"weight":0.6},{"saturation":-85},{"lightness":61}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"simplified"},{"color":"#5f94ff"},{"lightness":26},{"gamma":5.86}]}],

  init: function() {
    var mapOptions =  {
      center: new google.maps.LatLng(43.045979, -76.148841),
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      styles: mapInitializer.styles,
      panControl:false,
      zoomControl:true,
      mapTypeControl: false,
      scaleControl: false,
      scrollwheel: false,
      streetViewControl: false,
      rotateControl: false,
      zoomControlOptions: {
        style: google.maps.ZoomControlStyle.SMALL,
        position: google.maps.ControlPosition.LEFT_CENTER
      }
    }
    map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    mapInitializer.initializeStreets()
  },

  initializeStreets: function(){
    selectedStreet = null, selectedStreetLocationMarkers = null
    $.get("/api/v1/streets", function( data ) {
      allStreets = _.map(data, function(street){
        return mapInitializer.initializeStreet(street)
      });
    });
  },

  initializeStreet: function(streetData){
    var streetCoordinates = _.map(streetData['locations'], function(location){
      return {lat: location['lat'], lng: location['long']}
    });

    var streetPath = new google.maps.Polyline({
      path: streetCoordinates,
      geodesic: true,
      strokeColor: '#FF0000', strokeOpacity: 1.0, strokeWeight: 5,
      locations: streetData['locations'],
      street_name: streetData['street_name'],
      bound_one: streetData['bound_one'],
      bound_two: streetData['bound_two']
    });

    streetPath.setMap(map);
    mapInitializer.setStreetClickListener(streetPath)

    return streetPath
  },

  setStreetClickListener: function(streetPath){
    google.maps.event.addListener(streetPath, 'click', function () {
      mapInitializer.initializeSelectedStreet(streetPath)
    });
  },

  clearSelectedStreet: function(){
    selectedStreet = null
    if(selectedStreetLocationMarkers){
      _.each(selectedStreetLocationMarkers, function(marker){
        marker.setMap(null)
      })
    }
  },

  initializeSelectedStreet: function(streetPath){
    mapInitializer.clearSelectedStreet();
    selectedStreet = streetPath
    selectedStreetLocationMarkers = _.map(streetPath.locations, function(location){
      return mapInitializer.initStreetLocationMarker(location)
    })
    content.initializeForStreet(streetPath)
  },

  initStreetLocationMarker: function(location){
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(location.lat , location.long),
      map: map,
      id: location.id,
      location: location
    });
    return marker
  }
}
