
$(document).ready(function() {



  $("form#appointment").submit(function(event) {
    event.preventDefault()
  var name = ($("input#name").val());
  var services = ($("input#services").val());
  var email = ($("input#email").val());
  var date = ($("input#date").val());
  var time = ($("input#time").val());
  var answers = [name, services, email, date, time]
      $("#output").text(answers);
  });
});
