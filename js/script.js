/// DOM interaction
$(document).ready(function() {
  let isReady = false;


  // begin functions

  // Show confirm button
  $(".options-button").click(function() {
    isReady = true;
    if (isReady) {
      $("#button-build").prop("disabled", false).addClass("special-button").text("Build Chart");
    }
  });

  // Build graph on button click
  $("#button-build").click(function() {
    $(this).text("Well done!").removeClass("special-button"),
    $(".results").css("display", "block");
    isReady = false;
  });


});
