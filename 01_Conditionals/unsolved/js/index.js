$('.tab').on("click", function(){
  if ($(this).hasClass("tab1")) {
    $("#tabContent2").css("display", "block");
    $("#tabContent1").css("display", "none");
    $(".tab1").addClass("active");
    $(".tab2").removeClass("active");
  }
  else if ($(this).hasClass("tab2")) {
    $("#tabContent1").css("display", "block");
    $("#tabContent2").css("display", "none");
    $(".tab2").addClass("active");
    $(".tab1").removeClass("active");
  }


});
