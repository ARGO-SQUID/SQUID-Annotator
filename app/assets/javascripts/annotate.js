annotate = {

  init: function(){
    $('#close-annotation').click(function(){
      annotate.closeAnnotationView()
    })
  },

  closeAnnotationView: function(){
    $('#annotation-view-container').removeClass('active')
    $('#annotation-view-container #inner-annotation-container').html("")
  },

  launchForLocation: function(location){
    $('#annotation-view-container').addClass('active')
    var annotateHtml = Mustache.to_html($('#annotate-location-template').html(), location)
    $('#annotation-view-container #inner-annotation-container').html(annotateHtml)
  },

  annotationViewMode: function(){
    return $('#annotation-view-container').hasClass('active')
  }
}
