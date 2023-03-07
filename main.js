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

//EXERCICE 3

$("#random-color").click(function(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    $("body").css("background-color","#"+randomColor);
});

$("#color-change").submit(function(e){
    e.preventDefault();

    let rouge = $("#rouge").val();
    let vert = $("#vert").val();
    let bleu = $("#bleu").val();

    let isRougeTrue = (rouge >= 0 && rouge <= 255);
    let isVertTrue = (vert >= 0 && vert <= 255);
    let isBleuTrue = (bleu >= 0 && bleu <= 255);

    if (!isRougeTrue || (typeof rouge === String)){
        $("#rouge").css("border-color","red");
        $("#rouge").trigger("focus");
    };
    if (!isVertTrue || (typeof vert === String)){
        $("#vert").css("border-color","red");
        $("#vert").trigger("focus");
    };
    if (!isBleuTrue || (typeof bleu === String)){
        $("#bleu").css("border-color","red");
        $("#bleu").trigger("focus");
    };
    if (isRougeTrue && isVertTrue && isBleuTrue){
        $("body").css("background-color","rgb("+rouge+","+vert+","+bleu+")");
        $("#bleu").css("border-color","");
        $("#vert").css("border-color","");
        $("#rouge").css("border-color","");
    }
});
