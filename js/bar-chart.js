/// JS only script to test and host rendering function

// todo include jquery, set up page

// Global default variable values
const defaultColors = ["#036", "#20b2aa", "#468499", "#b4eeb4", "#00ced1"]; // dark blues and greens
const defaultLabel = "Value ";
const defaultSubLabel = "Group ";
const defaultDark = "#333";
const defaultLight = "#ddd";


// Default Objects
const defaultData = [0, 2, 4, 6];
const defaultOptions = {
  barColor: defaultColors[0],
  valuePos: "center",
  valueColor: "light",
  labelColor: "black",
  title: "My Chart",
  titleColor: "#000",
  titleSize: 14, // in pixels,
  stackedColors: defaultColors,
  spacing: 4, // px
  ticks: 10,
  labels: [],
  background: "dark"
}
const defaultElement = "#chart-1-rendered";


// Main Bar Chart Function
const generateBarChart = function(data, options, element) {
  // initialize values
  let chartData = [];
  const chartOptions = defaultOptions // object
  const chartElement = element || defaultElement; // string
  chartOptions.labels = generateLabels();
  chartData = labelData();
  console.log(chartData);

  function generateLabels() {
    // check if labels were given, if not then generate defaults
    if (options.labels) return options.labels;
    const newArray = [];
    for (let i = 0; i < data.length; i++) {
      if (Array.isArray(data[i])) {
        const subArray = [];
        for (let j = 0; j < data[i].length; j++) {
          subArray.push(defaultSubLabel + (j+1));
        }
        newArray.push(subArray);
        continue;
      }
      newArray.push(defaultLabel + (i+1));
    }
    return newArray;
  }

  // create object for each data point
  function labelData() {
    const newArray = []
    let i = 0;
    let keyName = "";
    for (const value of data) {
      if (Array.isArray(value)) {
        const subArray = [];
        for (let j = 0; j < value.length; j++) {
          keyName = getLabel(i, j);
          subArray.push({name: keyName, value: value[j]})
        }
        newArray.push(subArray);
        i++;
        continue;
      }
      keyName = getLabel(i);
      newArray.push({name: keyName, value: value});
      // console.log(newArray);
      i++;
    }
    return newArray;
  }

  function getLabel(i, j) {
    return chartOptions.labels[i][j] || chartOptions.labels[i];
  }

  // todo auto bar width

  // todo auto bar height

  // todo auto whole chart width

  // todo auto chart height based on largest tick


  // test return
  const outputRaw = {chartData, chartOptions, chartElement};
  return outputRaw;
}

// todo color type (string/hex) converter function
// todo size type converter



// Test Data
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

// test
console.log(generateBarChart(testData, testOptions, testElement));

/* TODO next steps
  - set up basic HTML demo page 2h
  - set up basic CSS 1h
  - Set up DOM + jquery interaction test script 4h
  - test interaction with test data (create a chart) 2h
  - create bar chart generator function 16h
  - create bar chart DOM interaction script 8h
  - set up basic HTML input page 4h
  - test input page interaction 2h
  - build full input page 8h
  - design CSS 8h
  - program extras 8h

  Estimated hours * 2 probably
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
  - instruction tooltips
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
