const yesno = document.querySelector(".yesno");
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
today = mm + "" + dd;
today === "0831" ? yesno.textContent = "YES" : yesno.textContent = "NO";