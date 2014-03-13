(function ($) {

  var jsonURl = 'http://localhost:5000/statuses.json';

  $.getJSON(jsonURl,function(data){

    $.each(data, function(i, field){
      $("#container").append(i, field);
    });

})(jQuery);