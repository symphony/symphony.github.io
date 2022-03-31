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
    buildChart(this);
  });


}); // End Document Ready


function setOptions(isReady) {
  isReady = true;
  if (isReady) {
    $("#button-build").prop("disabled", false).addClass("special-button").text("Build Chart");
  }
}

function buildChart(button) {
  $(button).text("Well done!").removeClass("special-button")

  // Todo replace test data with user data
  const testData = [1, 9, [1, 5, 2], 4];
  const testOptions = {title: "My First Chart"};
  const testElement = "#my-chart"
  // eslint-disable-next-line no-undef
  const barObject = formatObject(testData, testOptions, testElement);
  console.log(barObject);

  generateBarChart(barObject.data, barObject.options, barObject.element);
}

function generateBarChart(data, options, element) {
  // Check if element exists
  if (!$(element).length) {
    return alert("Can't find element '" + element + "'.");
  }

  // Generate DOM elements
  // Create div to house content
  jQuery('<div>', {
    id: "chart",
    class: 'chart-container',
    title: options.title
  }).appendTo(element);

  // create title
  jQuery('<h2>', {
    id: "title",
    class: "chart-title",
    title: options.title,
  }).appendTo("#chart");

  jQuery('<hr>', {}).appendTo("#chart");

  // create body
  jQuery('<div>', {
    id: "body",
    class: "chart-body",
    style: "height: 800px"
  }).appendTo("#chart");

  // Fill elements
  $("#title").text(options.title);
  createGrid();

  // Reveal results
  $(".results").slideDown(400);
  isReady = false;


  function createGrid() {
    $(".chart-body").css("    width: 1200px;    ;")
  }



}

