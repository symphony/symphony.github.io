/// test script for tinkering

// jquery testing
$(document).ready(function() {
  $(".hidden").hover(function() {
   $(this).css("color", "blue");
  },
  function() {
    $(this).hide();
  });

});


const generateBarChart = function(data) {
  return data;
}

console.log(generateBarChart("test"));
