const yesno = document.querySelector(".yesno");
const text = document.querySelector(".text");


var time = 9
setInterval(function() {
  var seconds = time % 60;
  var minutes = (time - seconds) / 60;
  if (seconds.toString().length == 1) {
    seconds = seconds;
  }
  if (minutes.toString().length == 1) {
    minutes = minutes;
  }
  document.getElementById("time").innerHTML = seconds + "s";
  time--;
  if (time == 0) {
    window.location.href = "video.html";
  }
}, 1000);

const Fallit = () => {
    setTimeout(function(){
        confetti.start();
    }, 0)
}

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
today = mm + "" + dd;


    document.body.style.background = "linear-gradient(to right top, #B22222, #CD5C5C)";
    text.style.color = "white";
    yesno.style.color = "white";
    Fallit();
    
    text.textContent = "HAPPY BIRTHDAY ANGELIE LOVE 🎉";
    yesno.textContent = "WISHING YOU A YEAR OF HAPPINESS \n I LOVE YOU SO MUCH  😘 ";
