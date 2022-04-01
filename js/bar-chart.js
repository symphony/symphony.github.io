/// Helper JS script
// function gets object data from API and formats and returns populated object, filling in default values where necessary


// Global default variable values
const defaultColors = ["#F9FFD8", "#AFD4E4", "#036", "#20b2aa", "#468499", "#b4eeb4", "#00ced1"]; // dark blues and greens
const defaultLabel = "Value ";
const defaultSubLabel = "Group ";
const defaultDark = "#222";
const defaultLight = "#ddd";
const defaultValueColor = "#717192";
const defaultGridColor = "#2B2B30";
const baseChartWidth = 200;

// Default Data
const defaultData = [0, 2, 4, 6];
const defaultOptions = {
  labels: [],
  barColor: defaultColors[0],
  valuePos: "center",
  valueColor: defaultValueColor,
  labelColor: defaultLight,
  title: "Generated Chart",
  titleColor: defaultDark,
  titleSize: "14px",
  stackedColors: defaultColors,
  spacing: 20,
  barWidth: 80,
  gridColor: defaultGridColor,
  ticks: 10,
  // values below aren't provided, but are calculated and used for reference later
  hasStacked: false,
  max: 0,
  min: 0,
  chartWidth: 0,
  dark: defaultDark,
  light: defaultLight,
  background: "light"
};
const defaultElement = "#chart-1"; // class or id name


// Main Bar Chart Function
function formatObject(uData, uOptions, uElement) {
  // initialize values
  let data = uData || defaultData; // array
  const options = defaultOptions; // object
  const element = uElement || defaultElement; // string

  // run helper functions
  replaceOptions();
  options.hasStacked = checkForStacked();
  getMinMax();
  calculateWidths();
  setTickSize();
  data = pairDataWithNames();

  // build and return data
  const barObject = {data, options, element};
  return barObject;



  // Helper functions
  // Replace Default Options values if given
  function replaceOptions() {
    for (const key in uOptions) {
      options[key] = uOptions[key];
    }
  }

  function checkForStacked() {
    for (const i of data) {
      if (Array.isArray(i)) return true;
    }
    return false;
  }

  function getMinMax() {
    const flat = data.flat();
    options.min = Math.min(...flat);
    options.max = Math.max(...flat);
  }

  function calculateWidths () {
    let minWidth = baseChartWidth; // 200px
    const numOfBars = data.length;
    minWidth += numOfBars * (options.barWidth + options.spacing);
    options.chartWidth = minWidth;
  }

  function setTickSize() {
    // TODO find logical tick size
    console.log("Suggested tick " + ((options.max - options.min) / 10));
  }

  // pair each data point with label name
  function pairDataWithNames() {
    const newArray = []
    let i = 0;
    let keyName = "";
    for (let value of uData) {
      if (Array.isArray(value)) {
        const subArray = [];
        for (let j = 0; j < value.length; j++) {
          keyName = generateSubLabel(j);
          subArray.push({name: keyName, value: value[j]})
        }
        value = subArray;
      }
      keyName = generateLabel(i);
      newArray.push({name: keyName, value: value});
      i++;
    }
    return newArray;
  }

  function generateLabel(i) {
    return defaultLabel + (i+1);
  }

  function generateSubLabel(i) {
    return defaultSubLabel + (i+1);
  }
}
// End main function



/*
//  Test Data
const testData = [1, 22, [7, 4, 2], 17];
const testOptions = {
  // barColor: "blue",
  valuePos: "top",
  labelColor: "orange",
  // title: "My Chart",
  titleColor: 0, // default
  // titleSize: 0,
  stackedColor: ["red", "#FF3"],
  spacing: 2,
  ticks: 6
};
const testElement = 0;

console.log(formatObject(testData, testOptions, testElement));
*/

/* TODO next steps
  // - set up basic HTML demo page 2h
  // - set up basic CSS 1h
  // - set up basic HTML input page 2h
  // - test input page interaction 2h
  // - Set up DOM + jquery interaction test script 4h
  // - test interaction with test data (create a chart) 8h
  // - create bar chart generator function 16h
  // - create bar chart DOM interaction script 8h
  // - create raw output widget - 4h
  - build full input page 8h
  - build input functionality 16h
  - design CSS 8h
  - Tweak functionality 16h
  - program extras 16h
*/


/* Project Description
Create an API to draw a bar chart. Set parameters on HTML page and render chart in Demo page. Demo page to display chart at Start.

Parameters
data - array of numbers, or object with labels and values
options - object that contains stylistic options, ie colour, size, title
element - the DOM element to be rendered into

Features
- HTML page where users can enter data
  - Written Instructions
- Display single values as vertical bars placed horizontally
- Stacked/multiple value bar chart
  - each bar can have multiple values
- Show value as text in the bar
- individual bar width dependent on total number of values passed
- bar height based on max/average values of data
- Axes data
  - X-axis labels
  - Y-axis ticks - generated automatically or predefined

Options
- Text label can be top, center or bottom
- Bar colour - per value for stacked bars
- Label colour
  - Colors can be hex or written
- Spacing between bars
- Title of bar chart
  - Font size
  - Font colour

Extras
  - clamped options values (ie. max spacing size)
  - dynamic scaling
  - animations
  - default values if not given parameters
  - accepts data in multiple formats/syntax
  - customizable input form
    - add/remove boxes to input data
    - provide default data or enter your own
    - accept input as string, or use boxes
    - reset button
  - colour picker
  - font picker
  - dark or white background
  - options visual preview
  - instructions
  - tooltips
  - graphics
  - vertical OR horizontal options
  - non linear tick values
*/



/* INSTRUCTIONS - https://web.compass.lighthouselabs.ca/prep/prep/activities/718

Functional Requirements
You should have a simple API to draw a bar chart. The function should be used by your HTML page to render the chart into your demo page. The signature of the function should be as follows:

drawBarChart(data, options, element);
The data parameter will be the data the chart should work from Start with just an Array of numbers
e.g. [1, 2, 3, 4, 5]

The options parameter should be an object which has options for the chart.
e.g. width and height of the bar chart

The element parameter should be a DOM element or jQuery element that the chart will get rendered into.

Display Requirements
Bar Chart
Display a list of single values, horizontally as a bar chart

Numerical values should also be displayed inside of the bar
The position of values should be customizable too:
Top, centre or bottom of the bar.
Bar sizes should be dependent on the data that gets passed in

Bar width should be dependent on the total amount of values passed.
Bar height should be dependent on the values of the data.
Bar properties that should be customizable:

Bar Colour
Label Colour
Bar spacing (space between bars)
Bar Chart axes
X-axis should show labels for each data value

Think about how you would need to structure your data to associate a label to each value
Y-axis should show ticks at certain values

Think about where you would configure these values. Should they be part of the data or the options to the bar chart function.
The title of the bar chart should be able to be set and shown dynamically

The title of the bar chart should also be customizable:

Font Size
Font Colour
Multiple Value (Stacked) bar charts
Allow the user to pass multiple values for each bar.

Think about how you would need to structure this data compared to a single bar chart.
This should also support all the features of the single bar chart, including

Customizable bar colours, per value
Customizable label colours
*/
