var min = 0;
var sec = 0;
var msec = 0;

var interval;

function timer() {
    msec++
    document.getElementById("msec").innerHTML = msec;
    if (msec >= 100) {
        sec++
        document.getElementById("sec").innerHTML = sec;
        msec = 0;
    } else if (sec >= 60) {
        min++
        document.getElementById("min").innerHTML = min;
        sec = 0;
    }
}


function start() {
    interval = setInterval(timer, 10);
    document.getElementById("startBtn").disabled = true;
}

function stop() {
    clearInterval(interval);
    document.getElementById("startBtn").disabled = false;
}

function reset() {
    min = 0;
    sec = 0;
    msec = 0;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;
    document.getElementById("msec").innerHTML = msec;
    clearInterval(interval);
    document.getElementById("startBtn").disabled = false;
}