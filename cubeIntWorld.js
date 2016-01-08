var randomWidthL = Math.floor(Math.random() * 48) + 1;
var randomHeightL = Math.floor(Math.random() * 39) + 1;
var spawnCube = setInterval(spawnRandom, 1000);
var divs = 0;
var money = 0;

$(".shop").click(function(){
    $(".cubeSkins").css({
        "display": "block",
        "width": "30%",
        "visibility": "visible"
    })
});


function clickRemoval(){
    $(".randomDiv").remove()
    console.log("Anger")
    money += 1
    $(".money").html("cubes collected: " + money);
    divs -= 1;
}


function spawnRandom(){
    randomWidthL = Math.floor(Math.random() * 48) + 1;
    randomHeightL = Math.floor(Math.random() * 39) + 1;
    
    if(divs < 5){
        $(".spawnIn").append("<div onclick='clickRemoval()' id='random' class='randomDiv' style='position: absolute; min-height: 50px; min-width: 50px; max-height: 50px; max-width: 50px; background-color: blue; margin-left: " + randomWidthL + "%; margin-top: " + randomHeightL + "%;'></div>");
        divs += 1;
    };
};
