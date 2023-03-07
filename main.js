import {} from "./jquery.js"

// $(document).ready(function(){
//     $("body").css("background-color","#111");
//     $("#maDiv").append("<footer></footer>");
//     $("footer").append("<p>C'est quoi ce bins ?</p>");
//     $("footer").css("color","#fff");

// });

//EXERCICE 1

let i = 0;
$("#affichage-plus").html(i);
$("#click-plus").click(function(){
    i++;
    $("#affichage-plus").html(i);
});

