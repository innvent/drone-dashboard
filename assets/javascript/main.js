// Get Json
(function ($) {
  var jsonURl = 'http://localhost:5000/statuses.json';
  var template = $.trim( $('#template').html() );
  var frag = '';

  $.getJSON(jsonURl,function(data){
    $.each(data.repositories, function(i, obj){
      frag += template.replace( /{{ name }}/ig, obj.name ).replace( /{{ status }}/ig, obj.status );
    });
    $("#repositories-list").append(frag);
  });

  $("#template").remove();

})(jQuery);
