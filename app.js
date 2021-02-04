const yesno = document.querySelector(".yesno");
const text = document.querySelector(".text");
const Fallit = () => {
    setTimeout(function(){
        confetti.start();
    }, 0)
}

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
today = mm + "" + dd;
today === "0831" ? yesno.textContent = "YES" : yesno.textContent = "NO";
if(today === "0831"){
    document.body.style.background = "linear-gradient(to right top, #B22222, #CD5C5C)";
    text.style.color = "white";
    yesno.style.color = "white";
    Fallit();
    
    text.textContent = "HAPPY BIRTHDAY OICEN 🎉";
    yesno.textContent = "WISHING YOU A YEAR OF HAPPINESS";
}
