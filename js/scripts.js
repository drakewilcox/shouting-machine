

$(document).ready(function()  {
  $("#formOne").submit(function(event)  {
    var shoutInput = $("input#shout").val().toUpperCase(); 

    $(".log").append("<li>" + shoutInput + "</li>");

    event.preventDefault();
  });
});