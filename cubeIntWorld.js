var randomWidthL = Math.floor(Math.random() * 48) + 1;
var randomHeightL = Math.floor(Math.random() * 39) + 1;
var randomWidthLS = Math.floor(Math.random() * 28) + 1;
var randomHeightLS = Math.floor(Math.random() * 39) + 1;
var randomRotate = Math.floor(Math.random() * 360) + 1;


var cubeSpawnTime = 1;
var cubeSpawnTimeCom = cubeSpawnTime * 1000;
var sirSpawnTime = 2.5;
var sirSpawnTimeCom = sirSpawnTime * 1000;

var spawnCubeSir = setInterval(spawnRandomSir, 1000);
var cubeAmount = setInterval(cubeAmount, 10);
var spawnCube = setInterval(spawnRandom, cubeSpawnTimeCom);


var divs = 0;
var money = 100000000;
var maxDiv = 5;
var sirBought = 0;


var cubeLimitCost = 15;
var costSpawnCube = 30;


var sirSpawnCube = 30;


clearInterval(spawnCubeSir);

$(".IncreaseSpawn").click(function(){
    if(money >= costSpawnCube && cubeSpawnTime > 0.1){
        money -= costSpawnCube;
        costSpawnCube += 60
        $(".money").html("cubes collected: " + money);
        $(".IncreaseSpawn").html("Decrease Cube Spawn time<br>-[Costs: " + costSpawnCube + "]-");
        cubeSpawnTime = cubeSpawnTime - 0.1;
        cubeSpawnTime = cubeSpawnTime.toFixed(1)
        cubeSpawnTimeCom = cubeSpawnTime * 1000
        $(".currentSpawn").html("Cubes spawn in every<br>-[" + cubeSpawnTime + "second]-");
        clearInterval(spawnCube)
        spawnCube = setInterval(spawnRandom, cubeSpawnTimeCom);
    };
});

$(".IncreaseSpawnSir").click(function(){
    if(money >= sirSpawnCube && sirSpawnTime > 0.1){
        money -= sirSpawnCube;
        sirSpawnCube += 60
        $(".money").html("cubes collected: " + money);
        $(".IncreaseSpawnSir").html("Decrease Cube Spawn time<br>-[Costs: " + sirSpawnCube + "]-");
        sirSpawnTime = sirSpawnTime - 0.1;
        sirSpawnTime = sirSpawnTime.toFixed(1)
        sirSpawnTimeCom = sirSpawnTime * 1000
        $(".currentSpawnSir").html("Cubes spawn in every<br>-[" + sirSpawnTime + "second]-");
        clearInterval(spawnCubeSir)
        spawnCubeSir = setInterval(spawnRandomSir, sirSpawnTimeCom);
    };
});

$(".shop").click(function(){
    $(".cubeSkins").css({
        "display": "block",
        "width": "30%",
        "visibility": "visible"
    });
    
    $(".cubeLimit").css({
        "display": "none",
        "width": "0%",
        "visibility": "invisible"
    });
    
    $(".cubeSpawn").css({
        "display": "none",
        "width": "0%",
        "visibility": "invisible"
    });
    
    $(".cubeSpawnSir").css({
        "display": "none",
        "width": "0%",
        "visibility": "invisible"
    });
});

$(".shop2").click(function(){
    $(".cubeLimit").css({
        "display": "block",
        "width": "30%",
        "visibility": "visible"
    });
    
    $(".cubeSkins").css({
        "display": "none",
        "width": "0%",
        "visibility": "invisible"
    });
    
    $(".cubeSpawn").css({
        "display": "none",
        "width": "0%",
        "visibility": "invisible"
    });
    
    $(".cubeSpawnSir").css({
        "display": "none",
        "width": "0%",
        "visibility": "invisible"
    });
});

$(".shop3").click(function(){
    $(".cubeLimit").css({
        "display": "none",
        "width": "0%",
        "visibility": "visible"
    });
    
    $(".cubeSkins").css({
        "display": "none",
        "width": "0%",
        "visibility": "invisible"
    });
    
    $(".cubeSpawn").css({
        "display": "block",
        "width": "30%",
        "visibility": "invisible"
    });
    
    $(".cubeSpawnSir").css({
        "display": "none",
        "width": "0%",
        "visibility": "invisible"
    });
});

$("#toS").click(function(){
    
    if(sirBought == 2){
        $(".cubeSpawn").css({
            "display": "none",
            "width": "0%",
            "visibility": "invisible"
        });

        $(".cubeSpawnSir").css({
            "display": "block",
            "width": "30%",
            "visibility": "visible"
        });
    }else{
        alert("You dont have MLG bought.");
    };
    
});

$("#toC").click(function(){
        $(".cubeSpawnSir").css({
            "display": "none",
            "width": "0%",
            "visibility": "invisible"
        });

        $(".cubeSpawn").css({
            "display": "block",
            "width": "30%",
            "visibility": "visible"
        });
});

$(".IncreaseLimit").click(function(){
    if(money >= cubeLimitCost){
        money -= cubeLimitCost;
        $(".money").html("cubes collected: " + money);
        maxDiv += 1;
        cubeLimitCost *= 2.5;
        cubeLimitCost = Math.floor(cubeLimitCost - maxDiv * 2);
        $(".IncreaseLimit").html("Increase Cube Limit by 1<br> -[" + cubeLimitCost+ "]-");
    };
});

function cubeAmount(){
    $(".currentLimit").html("Current cube limit is <br> -[" + maxDiv + "]-");
};

$(".img1").click(function(){
    if(money >= 5 && sirBought < 1){
        spawnCubeSir = setInterval(spawnRandomSir, sirSpawnTime);
        money -= 5;
        $(".money").html("cubes collected: " + money);
        $(".dwiT").html("Deal with it! -[SOLD]-");
        $(".img1").addClass("img1Sold");
        $(".img1").removeClass("img1");
        maxDiv += 1;
        sirBought += 2;
    }else if(money < 5 && sirBought < 1){
        alert("Your poor");
    };
});

$(document).on('click', '.randomDiv', function(e) {

    $( this ).remove();
    money += 1
    $(".money").html("cubes collected: " + money);
    divs -= 1;

});

$(document).on('click', '.img1In', function(e) {

    $( this ).remove();
    money += 2
    $(".money").html("cubes collected: " + money);
    divs -= 1;

});


function spawnRandom(){
    randomWidthL = Math.floor(Math.random() * 48) + 1;
    randomHeightL = Math.floor(Math.random() * 39) + 1;
    randomRotate = Math.floor(Math.random() * 360) + 1;
    if(divs < maxDiv){
        $(".spawnIn").append("<div id='random' class='randomDiv' style='position: absolute; min-height: 50px; min-width: 50px; max-height: 50px; max-width: 50px; background-color: blue; margin-left: " + randomWidthL + "%; margin-top: " + randomHeightL + "%; transform: rotate(" + randomRotate + "deg)'></div>");
        divs += 1;
    };
};

function spawnRandomSir(){
    randomWidthLS = Math.floor(Math.random() * 28) + 1;
    randomHeightLS = Math.floor(Math.random() * 39) + 1;
    randomRotate = Math.floor(Math.random() * 360) + 1;
    if(divs < maxDiv){
        $(".spawnIn").append("<img src='http://i.imgur.com/t1dSFNJ.png' class='img1In' style='position: absolute; min-height: 50px; min-width: 50px; max-height: 50px; max-width: 50px; background-color: blue; margin-left: " + randomWidthLS + "%; margin-top: " + randomHeightLS + "%; transform: rotate(" + randomRotate + "deg)' >");
        divs += 1;
    };
};
