$(document).ready(function() {
  $("#blanks form").submit(function(event) {
      var name1Input = $("input#name1").val();
      var address1Input = $("input#address1").val();

      $(".name1").text(name1Input);
      $(".address1").text(address1Input);

      $("#letter").show();

      event.preventDefault();
  });
});
