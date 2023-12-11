


$(function () {
  


$(function () {
  
  $(".save-button").on("click", function () {
      
      var blockId = $(this).closest(".time-block").attr("id");
      var userInput = $(this).siblings(".description").val();
      
      
      localStorage.setItem(blockId, userInput);
  });

  
  function updateHourlyStatus() {
      var currentHour = dayjs().hour();

      $(".time-block").each(function () {
          var blockHour = parseInt($(this).attr("id").split("-")[1]);

          
          if (blockHour < currentHour) {
              $(this).removeClass("present future").addClass("past");
          } else if (blockHour === currentHour) {
              $(this).removeClass("past future").addClass("present");
          } else {
              $(this).removeClass("past present").addClass("future");
          }
      });
  }

  
  updateHourlyStatus();

  
  
  function loadSavedData() {
      $(".time-block").each(function () {
          var blockId = $(this).attr("id");
          var savedData = localStorage.getItem(blockId);

          
          $(this).find(".description").val(savedData);
      });
  }

  
  loadSavedData();

  
  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));
});
