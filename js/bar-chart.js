/// test js file for tinkering
const generateBarChart = function(data, options, element) {
  return data, options, element;
}

const testData = [1, 22, 7, 17];
const testOptions = {barColor: "blue"}
const testElement = "chart1";

console.log(generateBarChart(testData, testOptions, testElement);


/* Description
Create an API to draw a bar chart. Set parameters on HTML page and render chart in demo page. Demo page to display chart at Start.

Parameters
data - array of numbers, or object with labels and values
options - object that contains stylistic options, ie colour, size, title
element - the DOM element to be rendered into

Features
- HTML page where users can enter data
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
- Spacing between bars
- Title of bar chart>
  - Font size
  - Font colour

Extras
  - dynamic scaling
  - default values if not given parameters
  - accepts data in multiple formats/syntax
  - customizable input form
    - add/remove boxes to input data
    - provide default data or enter your own
    - accept input as string, or use boxes
    - reset button
*/



/* NSTRUCTIONS - https://web.compass.lighthouselabs.ca/prep/prep/activities/718

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
