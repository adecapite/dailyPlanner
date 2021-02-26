var jumboTron = document.getElementById("jumbotron")
var timeAndDateEl = $('#clock')
var  saveButtonEl = $('.saveButton')
var currentHour = moment.format('H')


function showTime() {
  var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
  timeAndDateEl.text(currentTime);
}
setInterval(showTime, 1000);

saveButtonEl.on("click", function() {
    var input = $(this).siblings("textarea").val();
    var storedInputs = $(this).parent().attr("id");
    localStorage.setItem("storedInputs", JSON.stringify(input));
    document.createElement("li").appendChild(input)
}
);

$("#9 ").val(JSON.parse(localStorage.getItem('input'))),
$("#10 ").val(JSON.parse(localStorage.getItem('input'))),
$("#11").val(JSON.parse(localStorage.getItem('input'))),
$("#12").val(JSON.parse(localStorage.getItem('input'))),
$("#13").val(JSON.parse(localStorage.getItem('input'))),
$("#14").val(JSON.parse(localStorage.getItem('input'))),
$("#15").val(JSON.parse(localStorage.getItem('input'))),
$("#16").val(JSON.parse(localStorage.getItem('input'))),
$("#17").val(JSON.parse(localStorage.getItem('input')))


function presentTime(){
  Element.classList.add('present')
}
function pastTime(){
  Element.classList.add('past')
}

function futureTime{
  Element.classList.add('future')
}

