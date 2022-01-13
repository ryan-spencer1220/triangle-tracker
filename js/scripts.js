$(document).ready(function () {
  $("form#triangle").submit(function (event) {
    event.preventDefault();
    const side1 = parseInt($("#side1").val());
    const side2 = parseInt($("#side2").val());
    const side3 = parseInt($("#side3").val());

    if (side1 === side2 && side2 === side3) {
      $("#Equilateral").show();
      $("#default").hide();
      $("Isosceles").hide();
      $("#Scalene").hide();
      $("#Not-a-triangle").hide();
    } else if (
      side1 + side2 <= side3 ||
      side2 + side3 <= side1 ||
      side1 + side3 <= side2
    ) {
      $("#Not-a-triangle").show();
      $("#default").hide();
      $("#Equilateral").hide();
      $("Isosceles").hide();
      $("#Scalene").hide();
    } else if (side1 === side2 || side2 === side3 || side1 === side3) {
      $("#Isosceles").show();
      $("#default").hide();
      $("#Scalene").hide();
      $("#Not-a-triangle").hide();
      $("#Equilateral").hide();
    } else if (
      side1 + side2 > side3 ||
      side1 + side3 > side2 ||
      (side2 + side3 > side1 && (side1 != side2) != side3)
    ) {
      $("#Scalene").show();
      $("#default").hide();
      $("#Not-a-triangle").hide();
      $("#Equilateral").hide();
      $("Isosceles").hide();
    } else {
      $("#default").show();
      $("#Not-a-triangle").hide();
      $("#Equilateral").hide();
      $("Isosceles").hide();
      $("#Scalene").hide();
    }
  });
});

/*else if (
  side1 + side2 <= side3 ||
  side2 + side3 <= side1 ||
  side1 + side3 <= side2
) {
  $("#Not-a-triangle").show();
  $("#default").hide();
  $("#Equilateral").hide();
  $("Isosceles").hide();
  $("#Scalene").hide();
} else if (
  $("#side1").val() === "" ||
  $("#side2").val() === "" ||
  $("#side3").val() === ""
) {
  $("#default").show();
  $("#Not-a-triangle").hide();
  $("#Equilateral").hide();
  $("Isosceles").hide();
  $("#Scalene").hide();
} else {
  $("#default").show();
  $("#Not-a-triangle").hide();
  $("#Equilateral").hide();
  $("Isosceles").hide();
  $("#Scalene").hide();
}*/
