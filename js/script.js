$(document).ready(function() {
  $(".hidden").hover(function() {
   $(this).css("color", "blue");
  },
  function() {
    $(this).hide();
  });

  $("button").click(function() {
    alert("Hello");
  });

}); // end of jquery
