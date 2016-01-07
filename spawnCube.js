var loadingNum = 0;
var loading = setInterval(loadAnim, 7000);

$(document).ready(function(){
    console.log("Jquery Started Up!");
    loadingAnimController();
});

function loadAnim(){
    if($("#loading").css("margin-left") > "10px"){
        $("#loading").css({
            "margin-left": "-80%",
            "transition": "margin-left 7s;"
        });
        
    };
    
    if($("#loading").css("margin-left") < "10px"){
        $("#loading").css({
            "margin-left": "70%",
            "transition": "margin-left 7s;"
        });
        loadingNum += 1;
    };
    
    if(loadingNum >= 3){
        clearInterval(loading);
        $(".CubeintMain").css("visibility","hidden");
        $(".theGame").css("visibility","visible");
    }
};
