import {} from "./jquery.js"

$(document).ready(function(){
    $("body").css("background-color","#111");
    $("#maDiv").append("<footer></footer>");
    $("footer").append("<p>C'est quoi ce bins ?</p>");
    $("footer").css("color","#fff");

});