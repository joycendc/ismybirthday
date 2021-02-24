const yesno = document.querySelector(".yesno");
const text = document.querySelector(".text");

if("serviceWorker" in navigator){
    navigator.serviceWorker.register("serviceWorker.js").then(reg => {
        console.log("Registered");
        console.log(reg);
    }).catch(error => {
        console.log("Failed");
        console.log(error);
    })

}

const Fallit = () => {
    setTimeout(function(){
        confetti.start();
    }, 0)
}

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
today = mm + "" + dd;

if(today === "0401"){
    document.body.style.background = "linear-gradient(to right top, #B22222, #CD5C5C)";
    text.style.color = "white";
    yesno.style.color = "white";
    Fallit();
    
    text.textContent = "HAPPY BIRTHDAY ANGELIE LOVE 🎉";
    yesno.textContent = "WISHING YOU A YEAR OF HAPPINESS \n I LOVE YOU SO MUCH  😘 ";
}else {
    yesno.textContent = "NO"
}
