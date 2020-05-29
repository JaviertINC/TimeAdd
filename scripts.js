function start(){
    obj = document.getElementById('body');
    obj.style.backgroundColor = (obj.style.backgroundColor == '#4c4c4c') ? 'none' : '#4c4c4c';
    obj = document.getElementById('cnt');
    obj.style.backgroundColor = (obj.style.backgroundColor == '#4caf5055') ? 'none' : '#4caf5055';
    $("#action h1").text("Detener");
    $("#action").attr("onclick","stop()");
    document.getElementById("timerStatus").value = 0;
    var cSum = document.getElementById("cSum").value;
    startTimer(parseInt(document.getElementById("seconds").value) + parseInt(cSum));
}
function stop(){
    document.getElementById("timerStatus").value = 1;

    $("#action h1").text("Renaudar");
    $("#action").attr("onclick","start()");

    updateSum();
    resetTimer();
}
function updateSum(){
    var cMin = document.getElementById("cMin").value;
    var cSec = document.getElementById("cSec").value;

    var tmp = (parseInt(60) * parseInt(cMin)) + parseInt(cSec);

    document.getElementById("cSum").value = tmp;
    document.getElementById("ts").innerText = tmp;
}

function resetTimer(){
    document.getElementById("m").innerText = fix_num(0);
    document.getElementById("s").innerText = fix_num(0);

}

function startTimer(duration) {
    var timer = duration, minutes, seconds;
    var time_out = 0;
    setInterval(function () {
        if(minutes == 0 && seconds == 0){
            if(time_out == 0){
                stop();
                obj = document.getElementById('body');
                obj.style.backgroundColor = (obj.style.backgroundColor == '#c00') ? 'none' : '#c00';
                obj = document.getElementById('cnt');
                obj.style.backgroundColor = (obj.style.backgroundColor == '#4c4c4c') ? 'none' : '#4c4c4c';
                alert("Se agotó el tiempo");
                time_out = 1;
                timer = duration;
            }
        }else{
            if(document.getElementById("timerStatus").value == "0"){
                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);

                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                document.getElementById("m").innerText = fix_num(minutes);
                document.getElementById("s").innerText = fix_num(seconds);
                document.getElementById("cMin").value = minutes;
                document.getElementById("cSec").value = seconds;

                if (--timer < 0) {
                    timer = duration;
                    time_out = 0;
                }
            }else{
                minutes = 0;
                seconds = 0;
                time_out = 1;
            }
        }
    }, 1000);
}



function fix_num(num){
    switch(num){
        case 0:
            return "00";
        break;
        case 1:
            return "01";
        break;
        case 2:
            return "02";
        break;
        case 3:
            return "03";
        break;
        case 4:
            return "04";
        break;
        case 5:
            return "05";
        break;
        case 6:
            return "06";
        break;
        case 7:
            return "07";
        break;
        case 8:
            return "08";
        break;
        case 9:
            return "09";
        break;
        default:
            return num;
        break;
    }
}
