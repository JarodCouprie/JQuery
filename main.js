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

//EXERCICE 2
$("#formulaire").submit(function(e){
    e.preventDefault();
    //$("#infos").html($("#nom").val() + $("#prenom").val() + $("#date-de-naissance").val());
    if((typeof $("#nom").val() === "string") && isNaN($("#nom").val())){
        $("#info-nom").html($("#nom").val());
    }else{
        $("#nom").css("background-color","red");
    };
    if((typeof $("#prenom").val() === "string") && isNaN($("#prenom").val())){
        $("#info-prenom").html($("#prenom").val());
    }else{
        $("#prenom").css("background-color","red");
    };
    if ($("#annee-de-naissance").val() > 1900 && $("#annee-de-naissance").val() <= 2023){
        $("#info-age").html(2023 - $("#annee-de-naissance").val()+"ans");
    }else{
        $("#annee-de-naissance").css("background-color","red");
    };
});