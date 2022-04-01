/// Main jQuery Script

// Init variables
let readyToBuild = false;

// Todo replace test data with user data
const testData = [1, 9, 5, 4, 8, 12, 9];
const testOptions = {
  title: "My First Chart",
  titleColor: "rgb(132, 240, 213)"};
const testElement = "#my-chart"

/// Begin DOM listening/interaction
$(document).ready(function() {
  // begin functions

  // Show confirm button
  $(".options-button").click(function() {
    verifyParameters();
  });

  // Build graph on button click
  $("#button-build").click(function() {
    if (!readyToBuild) return;
    $(this).text("Well done!").removeClass("special-button")
    startBuildingChart();
  });


}); // End Document Ready

// Functions
// Verifies there's no conflicting options
function verifyParameters() {
  // Todo add some checks before build button is ready
  readyToBuild = true;
  if (!readyToBuild) return;
  $("#button-build").prop("disabled", false).addClass("special-button").text("Build Chart");
}

// Build chart with user data and settings
function startBuildingChart() {
  // External function in bar-chart.js
  // Fills empty parameters with default ones and saves some restructures object data
  // eslint-disable-next-line no-undef
  const barObject = formatObject(testData, testOptions, testElement);

  // Renders Bar Chart
  generateBarChart(barObject.data, barObject.options, barObject.element);

  // Shares raw HTML text to be copied
  outputRaw(barObject.element);
}

// Creates and renders the bar chart elements
function generateBarChart(data, options, element) {
  // Check if element exists and return error
  if (!$(element).length) {
    return alert("Can't find element \"" + element + "\".");
  }

  // Check if already created to prevent duplicate
  if ($("#chart").length) return;
  readyToBuild = false;

  // Build HTML elements and hierachy
  // Create div to house content
  jQuery("<div>", {
    id: "chart",
    class: "chart-container",
    title: options.title
  }).appendTo(element);

  // link font
  jQuery("<link>", {
    href:"https://fonts.googleapis.com/css2?family=Montserrat",
    rel: "stylesheet",
  }).appendTo("#chart");

  // create stylesheet
  jQuery("<style>", {
    type:'text/css',
    id: "chart-style",
  }).appendTo("#chart");

  // create title
  jQuery("<h2>", {
    id: "title",
    class: "chart-title",
    title: options.title,
  }).appendTo("#chart");

  jQuery("<hr>", {
    class: "hr",
  }).appendTo("#chart");

  // create body
  jQuery("<div>", {
    id: "body",
    class: "chart-body",
  }).appendTo("#chart");

  jQuery("<div>", {
    id: "grid",
    class: "chart-grid",
  }).appendTo("#body");

  jQuery("<div>", {
    id: "bar-container",
    class: "bar-container",
  }).appendTo("#grid");


  // Fill elements
  $("#title").text(options.title);
  addStyles();
  createBars();

  // Reveal results
  $(".results").slideDown(400);

  function addStyles() {
    $("#chart-style").append(`

    .chart-container {
      margin: 20px;
      padding: 20px 40px ;
      background-color: #333;
      border-radius: 8px;
      overflow: auto;
      scroll-padding: 20px;
      text-align: center;
      font-family: 'Montserrat';
    }

    .chart-body {
      background-color: ${options.dark};
      margin: 20px auto;
      padding: 20px;
      font-size: 20px;
      border-radius: 8px;
      min-width: ${options.chartWidth}px;
      max-width: ${options.chartWidthMax}px;
    }

    .chart-title {
      font-weight: 400;
      color: ${options.titleColor};
    }

    .chart-grid {
      background-color: ${options.gridColor};
      min-width: ${options.chartWidth}px;
    }

    .bar-container {
      position: relative;
      height: 96%;
      top: 4%;
      width: 96%;
    }

    .bar {
      display: inline-block;
      box-sizing: border-box;
      padding: 20px 0;
      vertical-align: bottom;
      margin: 0 ${options.spacing}px;
      background-color: ${options.barColor};
      color: ${options.valueColor};
      min-height: 4px;
      min-width: ${options.barWidth}px;
      font-weight: 600;
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
      text-align: center;
    }

    .hr {
      height: 2px;
      width: 20%;
      background-color: #444;
      border-radius: 2px;
      border: none;
    }
`)
  }

    function createBars() {
      $("#grid").css({height: "600px"});
      $("#grid").css("min-width", options.chartWidth);

      for (const i of data) {
        jQuery("<bar>", {
          id: i.name,
          class: "bar",
          text: i.value,
          css: { "height": getBarHeight(i.value)}
        }).appendTo("#bar-container");
      }

      // returns heigh as percentage based on min and max values
    function getBarHeight(barValue) {
      let height = barValue - options.min;
      height = height / (options.max - options.min);
      height *= 100; // convert to percentage
      return height + "%";
    }
  }

}

function outputRaw(element){
  const $snippet = $("#results-raw").append($(element).clone());
  // converts HTML element to text
  $snippet.text($snippet.html());
  // adds new lines for legibility between tags
  $($snippet).text($snippet.text().replace(/></g, ">\n<"));
}

