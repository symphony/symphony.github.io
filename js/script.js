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


function setOptions() {
  isReady = true;
  if (isReady) {
    $("#button-build").prop("disabled", false).addClass("special-button").text("Build Chart");
  }
}

function buildChart(button) {
  $(button).text("Well done!").removeClass("special-button")

  // Todo replace test data with user data
  const testData = [1, 9, 5, 4, 8, 12, 9];
  const testOptions = {
    title: "My First Chart",
    titleColor: "rgb(132, 240, 213)"};
  const testElement = "#my-chart"
  // eslint-disable-next-line no-undef
  const barObject = formatObject(testData, testOptions, testElement);

  generateBarChart(barObject.data, barObject.options, barObject.element);
}

function generateBarChart(data, options, element) {
  // Check if element exists
  if (!$(element).length) {
    return alert("Can't find element \"" + element + "\".");
  }

  // Check if already created
  if ($("#chart").length) return;

  // Generate DOM elements
  // Create div to house content
  jQuery("<div>", {
    id: "chart",
    class: "chart-container",
    title: options.title
  }).appendTo(element);

  // create stylesheet
  jQuery("<style>", {
    type:'text/css',
    id: "chart-style",
  }).appendTo("#chart");

  // create title
  jQuery("<h3>", {
    id: "title",
    class: "chart-title",
    title: options.title,
  }).appendTo("#chart");

  jQuery("<hr>", {}).appendTo("#chart");

  // create body
  jQuery("<div>", {
    id: "body",
    class: "chart-body",
  }).appendTo("#chart");

  jQuery("<div>", {
    id: "grid",
    class: "chart-grid",
  }).appendTo("#body");


  // Fill elements
  $("#title").text(options.title);
  addStyles();
  createBars();

  // Reveal results
  $(".results").slideDown(400);
  isReady = false;


  function addStyles() {
    $("#chart-style").append(`

    .chart-container {
      margin: 20px;
      padding: 20px 40px ;
      background-color: #333;
      border-radius: 8px;
      overflow: auto;
    }

    .chart-body {
      background-color: ${options.dark};
      margin: 20px auto;
      padding: 20px;
      font-size: 16px;
      border-radius: 8px;
    }

    .chart-title {
      font-weight: 400;
      color: ${options.titleColor};
    }

    .chart-grid {
      background-color: #2e2e2e;
    }

    .bar {
      display: inline-block;
      background-color: ${options.barColor};
      font-weight: 600;
      color: ${options.valueColor};
      padding: 40px 40px;
      margin-right: ${options.spacing};
      min-height: 4px;
      vertical-align: bottom;
      border-radius: 8px;
    }

    `)
  }

    function createBars() {
      $("#grid").css({height: "600px"});
      for (const i of data) {
        jQuery("<bar>", {
          id: i.name,
          class: "bar",
          text: i.value,
          css: { "height": getBarHeight(i.value)}
        }).appendTo("#grid");
      }

      // returns heigh as percentage based on min and max values
    function getBarHeight(v) {
      let height = v - options.min;
      height = height / (options.max - options.min);
      height *= 80; // convert to percentage scaled to 80%
      console.log(height);
      return height + "%";
    }
  }



}

