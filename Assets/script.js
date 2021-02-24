var jumboTron = document.getElementById("jumbotron")
var timeAndDateEl = $('#clock')

function showTime() {
  var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
  timeAndDateEl.text(currentTime);
}
setInterval(showTime, 1000);