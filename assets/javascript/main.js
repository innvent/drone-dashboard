(function ($) {

  // var jsonURl = 'http://localhost:5000/statuses.json';
  var jsonURl = 'drone.json';

  $.getJSON(jsonURl,function(data){

    $.each(data, function(i, field){
      $("#container").append(i, field);
    });

})(jQuery);