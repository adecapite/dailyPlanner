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


$("#9 textarea").val(JSON.parse(localStorage.getItem('input'))),
$("#10 textarea").val(JSON.parse(localStorage.getItem('input'))),
$("#11 textarea").val(JSON.parse(localStorage.getItem('input'))),
$("#12 textarea").val(JSON.parse(localStorage.getItem('input'))),
$("#13 textarea").val(JSON.parse(localStorage.getItem('input'))),
$("#14 textarea").val(JSON.parse(localStorage.getItem('input'))),
$("#15 textarea").val(JSON.parse(localStorage.getItem('input'))),
$("#16 textarea").val(JSON.parse(localStorage.getItem('input'))),
$("#17 textarea").val(JSON.parse(localStorage.getItem('input')))

