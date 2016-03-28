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
    anno.makeAnnotatable(document.getElementById('annotate-image'));
    anno.addHandler('onAnnotationCreated', function(annotation) {
      console.log(annotation)
    })
  },

  annotationViewMode: function(){
    return $('#annotation-view-container').hasClass('active')
  }
}
