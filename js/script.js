/// Main jQuery Script

// Init variables
let isReady = false;

/// Begin DOM listening/interaction
$(document).ready(function() {


  // begin functions

  // Show confirm button
  $(".options-button").click(function() {
    setOptions();
  });

  // Build graph on button click
  $("#button-build").click(function() {
    buildChart();
  });


}); // End Document Ready


function setOptions(isReady) {
  isReady = true;
  if (isReady) {
    $("#button-build").prop("disabled", false).addClass("special-button").text("Build Chart");
  }
}


function buildChart(data, options, element) {
  $(this).text("Well done!").removeClass("special-button"),
    $(".results").css("display", "block");
  isReady = false;
  const testData = [1, 9, [1, 5, 2], 4];
  const testOptions = {labels: testData};
  const testElement = "#my-chart"
  // eslint-disable-next-line no-undef
  $("#chart-1-chart").text(generateBarChart(testData));
}
