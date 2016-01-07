var loadingNum = 0;
var loading = setInterval(loadAnim, 7000);
var size = [window.width,window.height];

$(document).ready(function(){
    console.log("Jquery Started Up!");
});

$(window).resize(function(){
    window.resizeTo(size[0],size[1]);
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
        createWindow("about:blank", screen.width, screen.height);
    }
};

function createWindow(src, width, height){
    var win = window.open(src, "_new", "width="+width+",height="+height);
    win.addEventListener("resize", function(){
        console.log("Resized");
		win.resizeTo(width, height);
    });
};
