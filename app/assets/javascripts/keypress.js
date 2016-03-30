keypress = {

  init: function(){
    $(document).keydown(function(e) {
      result = keypress.routeKeypress(e.which);
      if(result == true){
        e.preventDefault();
        return false
      }
    });
  },

  routeKeypress: function(keypressId){
    if(streetView.inStreetViewMode() && !annotate.annotationViewMode()){
      return keypress.streetViewKeypress(keypressId)
    }
    else if(annotate.annotationViewMode()){
      return keypress.annotationKeypress(keypressId)
    }
    else{
      return false
    }
  },

  streetViewKeypress: function(keypressId){
    if(keypressId == 39){
      streetView.moveCarouselForward()
      $('#carousel-right').addClass('hover-state')
      setTimeout(function(){
        $('#carousel-right').removeClass('hover-state')
      }, 100)
      return true
    }
    else if(keypressId == 37){
      streetView.moveCarouselBackward()
      $('#carousel-left').addClass('hover-state')
      setTimeout(function(){
        $('#carousel-left').removeClass('hover-state')
      }, 100)
      return true
    }
    else if(keypressId == 27){
      streetView.closeStreetView()
      return true
    }
    else if(keypressId == 32){
      $('#launch-annotate').addClass('hover-state')
      annotate.launchForLocation(selectedLocationMarker.location);
      setTimeout(function(){
        $('#launch-annotate').removeClass('hover-state')
      }, 100)
      return true
    }
    else{
      return false
    }
  },

  annotationKeypress: function(keypressId){
    if(keypressId == 27){
      annotate.closeAnnotationView()
      return true
    }
    else{
      return false
    }
  }


}
