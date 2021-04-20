// $("button").onclick= function() {validateEmail(inputText)};

function validateEmail(){
  $("input").removeClass("afterClick");
  var inputText = $(".inputBox").val();
  var pattern=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (pattern.test(inputText)) {
    $(".email-registration-status").html("Your email id is registered.");
  }
  else {
    $(".inputBox").addClass("afterClick");
    $(".email-registration-status").html("Please provide a valid email.");
  }
}
