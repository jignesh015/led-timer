var btn = $("#submit");
var input = $("#input");
var num;
var hourDiv1 = $("#hr1");
var hourDiv2 = $("#hr2");
var minDiv1 = $("#min1");
var minDiv2 = $("#min2");
var secDiv1 = $("#sec1");
var secDiv2 = $("#sec2");
var h, m, s;
var arr = [];

for(var i=1; i <= 7; i++) {
    var rect = "rect" + i;
    hourDiv1.append('<div class="rect' + i + ' black"></div>');
    hourDiv2.append('<div class="rect' + i + ' black"></div>');
    minDiv1.append('<div class="rect' + i + ' black"></div>');
    minDiv2.append('<div class="rect' + i + ' black"></div>');
    secDiv1.append('<div class="rect' + i + ' black"></div>');
    secDiv2.append('<div class="rect' + i + ' black"></div>');
}

function startTime() {
    var today = new Date();
    h = today.getHours();
    m = today.getMinutes();
    s = today.getSeconds();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    timer();
    var t = setTimeout(startTime, 500);
}
startTime();

function checkTime(i) {
    if(i < 10) {
        i = "0" + i;
    }
    return i;
}

function timer() {
    for(var i=1; i <= 7; i++) {
        var rect = ".rect" + i;
        $(rect).removeClass("red");
    }
    
    var s1 = s % 10;
    var s2 = Math.floor(s / 10);
    var m1 = m % 10;
    var m2 = Math.floor(m / 10);
    var h1 = h % 10;
    var h2 = Math.floor(h / 10);

    led(s1, 6);
    led(s2, 5);

    led(m1, 4);
    led(m2, 3);

    led(h1, 2);
    led(h2, 1);
    
}

function led(num, pos) {
   switch(num) {
        case 0 :
            arr = [1,2,3,5,6,7];
            changeColor(arr, pos);
            break;
        case 1 :
            arr = [3,6];
            changeColor(arr, pos);
            break;
        case 2 :
            arr = [1,3,4,5,7];
            changeColor(arr, pos);
            break;
        case 3 :
            arr = [1,3,4,6,7];
            changeColor(arr, pos);
            break;
        case 4 :
            arr = [2,3,4,6];
            changeColor(arr, pos);
            break;
        case 5 :
            arr = [1,2,4,6,7];
            changeColor(arr, pos);
            break;
        case 6 :
            arr = [1,2,4,5,6,7];
            changeColor(arr, pos);
            break;
        case 7 :
            arr = [1,3,6];
            changeColor(arr, pos);
            break;
        case 8 :
            arr = [1,2,3,4,5,6,7];
            changeColor(arr, pos);
            break;
        case 9 :
            arr = [1,2,3,4,6,7];
            changeColor(arr, pos);
            break;
        default: 
            console.log("Error");
    } 
}

function changeColor(array, pos) {
    switch(pos) {
        case 1:
            for(var i = 0; i < array.length; i++) {
                var rect = ".rect" + array[i];
                hourDiv1.children(rect).addClass("red");
            }
            break
        case 2:
            for(var i = 0; i < array.length; i++) {
                var rect = ".rect" + array[i];
                hourDiv2.children(rect).addClass("red");
            }
            break
        case 3:
            for(var i = 0; i < array.length; i++) {
                var rect = ".rect" + array[i];
                minDiv1.children(rect).addClass("red");
            }
            break
        case 4:
            for(var i = 0; i < array.length; i++) {
                var rect = ".rect" + array[i];
                minDiv2.children(rect).addClass("red");
            }
            break
        case 5:
            for(var i = 0; i < array.length; i++) {
                var rect = ".rect" + array[i];
                secDiv1.children(rect).addClass("red");
            }
            break
        case 6:
            for(var i = 0; i < array.length; i++) {
                var rect = ".rect" + array[i];
                secDiv2.children(rect).addClass("red");
            }
            break
        default:
            console.log("err");
    }
    
}


