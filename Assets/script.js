var jumboTron = document.getElementById("jumbotron")
var timeAndDateEl = $('#clock')
var  saveButtonEl = $('.saveButton')


//function for the live clock
function showTime() {
  var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
  timeAndDateEl.text(currentTime);
}
setInterval(showTime, 1000);
//operates the save button
saveButtonEl.on("click", function() {
    var input = $(this).siblings("textarea").val();
    var storedInputs = $(this).parent().attr("id");
    localStorage.setItem("storedInputs", JSON.stringify(input));
  }
);
//Retrives the inputs
$("#9 textarea").val(JSON.parse(localStorage.getItem('input')));
$("#10 textarea").val(JSON.parse(localStorage.getItem('input')));
$("#11").val(JSON.parse(localStorage.getItem('input')));
$("#12").val(JSON.parse(localStorage.getItem('input')));
$("#13").val(JSON.parse(localStorage.getItem('input')));
$("#14").val(JSON.parse(localStorage.getItem('input')));
$("#15").val(JSON.parse(localStorage.getItem('input')));
$("#16").val(JSON.parse(localStorage.getItem('input')));
$("#17").val(JSON.parse(localStorage.getItem('input')));





//This block parses the value of the id which is numbered after the hour, and converts them to an object. Then value checks that against the hour in moment and then assigns the block the correct color.
var currentTime = moment().format("H");
$(".col-md-10").each(function () {
  var val = parseInt($(this).attr("id"));
  if (val == currentTime) {
    $(this).css("background-color", "Red");
  }else if (val < currentTime) {
    $(this).css("background-color", "lightgray");
  } else if (val > currentTime) {
    $(this).css("background-color", "Green");
  } 
  }
);