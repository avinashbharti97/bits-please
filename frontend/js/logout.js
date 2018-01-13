$(document).ready(function(){
    var root = localStorage.getItem("root");
    console.log(localStorage.getItem("jwtToken"));
    localStorage.setItem("jwtToken","");
    console.log(localStorage.getItem("jwtToken"));
    window.location="login.html";
})
