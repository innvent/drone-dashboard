function get_statuses() {
  var statuses_endpoint = window.location.search.indexOf('mock') == -1 ?
    "http://localhost:5000/statuses.json" :
    "http://localhost:5000/json_mock.json"
  var template = $.trim( $('#template').html() );

  $.getJSON(statuses_endpoint, function( data ) {
    var items = [];
    $.each(data.repositories, function( key, val ) {
      items.push(
        template.replace(
          /{{ name }}/ig, val.name
        ).replace( /{{ status }}/ig, val.status )
      );
    });
    $("#repositories-list").html(items.join( "" ));
    setTimeout(function() {
      get_statuses();
    }, 10000);
  });
}

$(function(){
   get_statuses();
});
