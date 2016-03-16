keypress = {

  init: function(){
    $(document).keydown(function(e) {
      e.preventDefault();
      keypress.routeKeypress(e.which);
      return false
    });
  },

  routeKeypress: function(keypressId){
    if(streetView.inStreetViewMode() && !annotate.annotationViewMode()){
      keypress.streetViewKeypress(keypressId)
    }
    else if(annotate.annotationViewMode()){
      keypress.annotationKeypress(keypressId)
    }
  },

  streetViewKeypress: function(keypressId){
    if(keypressId == 39){
      streetView.moveCarouselForward()
    }
    else if(keypressId == 37){
      streetView.moveCarouselBackward()
    }
    else if(keypressId == 27){
      streetView.closeStreetView()
    }
    else if(keypressId == 13){
      annotate.launchForLocation(selectedLocationMarker.location);
    }
  },

  annotationKeypress: function(keypressId){
    if(keypressId == 27){
      annotate.closeAnnotationView()
    }
  }


}
