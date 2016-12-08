var btn = $("#submit");
var input = $("#input");
var num;
var secDiv1 = $("#sec1");
var s;

for(var i=1; i <= 7; i++) {
    var rect = "rect" + i;
    secDiv1.append('<div id="rect' + i + '" class="black"></div>');
}

function timer() {
    for(var i=1; i <= 7; i++) {
        var rect = "#rect" + i;
        $(rect).removeClass("red");
    }
    
    var s1 = s % 10;
    console.log(s1);
    switch(s1) {
        case 0 :
            $("#rect1").addClass("red");
            $("#rect2").addClass("red");
            $("#rect3").addClass("red");
            $("#rect5").addClass("red");
            $("#rect6").addClass("red");
            $("#rect7").addClass("red");
            break;
        case 1 :
            $("#rect3").addClass("red");
            $("#rect6").addClass("red");
            break;
        case 2 :
            $("#rect1").addClass("red");
            $("#rect3").addClass("red");
            $("#rect4").addClass("red");
            $("#rect5").addClass("red");
            $("#rect7").addClass("red");
            break;
        case 3 :
            $("#rect1").addClass("red");
            $("#rect3").addClass("red");
            $("#rect4").addClass("red");
            $("#rect6").addClass("red");
            $("#rect7").addClass("red");
            break;
        case 4 :
            $("#rect2").addClass("red");
            $("#rect3").addClass("red");
            $("#rect4").addClass("red");
            $("#rect6").addClass("red");
            break;
        case 5 :
            $("#rect1").addClass("red");
            $("#rect2").addClass("red");
            $("#rect4").addClass("red");
            $("#rect6").addClass("red");
            $("#rect7").addClass("red");
            break;
        case 6 :
            $("#rect1").addClass("red");
            $("#rect2").addClass("red");
            $("#rect4").addClass("red");
            $("#rect5").addClass("red");
            $("#rect6").addClass("red");
            $("#rect7").addClass("red");
            break;
        case 7 :
            $("#rect1").addClass("red");
            $("#rect3").addClass("red");
            $("#rect6").addClass("red");
            break;
        case 8 :
            $("#rect1").addClass("red");
            $("#rect2").addClass("red");
            $("#rect3").addClass("red");
            $("#rect4").addClass("red");
            $("#rect5").addClass("red");
            $("#rect6").addClass("red");
            $("#rect7").addClass("red");
            break;
        case 9 :
            $("#rect1").addClass("red");
            $("#rect2").addClass("red");
            $("#rect3").addClass("red");
            $("#rect4").addClass("red");
            $("#rect6").addClass("red");
            $("#rect7").addClass("red");
            break;
        default: 
            console.log("Error");
    }
}

function startTime() {
    var today = new Date();
    s = today.getSeconds();
    // s = checkTime(s);
    console.log(s % 10);
    timer();
    var t = setTimeout(startTime, 500);
}
startTime();