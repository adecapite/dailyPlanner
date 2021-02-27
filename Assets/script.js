var jumboTron = document.getElementById("jumbotron")
var timeAndDateEl = $('#clock')
var  saveButtonEl = $('.saveButton')



function showTime() {
  var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
  timeAndDateEl.text(currentTime);
}
setInterval(showTime, 1000);

saveButtonEl.on("click", function() {
    var input = $(this).siblings("textarea").val();
    var storedInputs = $(this).parent().attr("id");
    localStorage.setItem("storedInputs", JSON.stringify(input));
  }
);

$("#9 textarea").val(JSON.parse(localStorage.getItem('input')));
$("#10 textarea").val(JSON.parse(localStorage.getItem('input')));
$("#11").val(JSON.parse(localStorage.getItem('input')));
$("#12").val(JSON.parse(localStorage.getItem('input')));
$("#13").val(JSON.parse(localStorage.getItem('input')));
$("#14").val(JSON.parse(localStorage.getItem('input')));
$("#15").val(JSON.parse(localStorage.getItem('input')));
$("#16").val(JSON.parse(localStorage.getItem('input')));
$("#17").val(JSON.parse(localStorage.getItem('input')));



// $('.col-md-10 description').each(function())
// {
//   var plannerHour = parseInt($(this).attr('id'))
// }

// $('.col-md-10 description').each(function())
// {
//   var plannerHour = parseInt($(this).attr('id'))
// }

// $('.col-md-10').each(function(){
//     var val = parseInt($(this).prop('id'));
//     if(val > currentHour && val < currentHour+6){
//         $(this).css('background-color','Blue');
//     }else if(val < currentHour && val > currentHour-6){
//         $(this).css('background-color','Red');
//     }else if(val === currentHour){
//         $(this).css('background-color','Green');
//     };
// })

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