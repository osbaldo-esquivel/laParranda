var begin = true;
var val = 0;

function getVal(min) {
    val = min;
}

document.getElementById("custom").addEventListener("click", function() {
    document.getElementById("mins").style.display = "block";
});

document.getElementById("drinkButt").addEventListener("click",function() {
    console.log(val);
    var minutes = new Date();
    minutes.setMinutes(minutes.getMinutes() + val);
    var counterFunc = setInterval(function() {
        var cheers = document.getElementById("cheers");
        var timeNow = new Date().getTime();
        var diff = minutes - timeNow;
        var mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        var secs = Math.floor((diff % (1000 * 60)) / 1000);

        if(secs < 10) { secs = "0" + secs; }
        document.getElementById("counter").innerHTML = mins + ":" + secs;
        
        if (diff < 0) {
            clearInterval(counterFunc);
            document.getElementById("counter").innerHTML = "Congrats on the Power Hour!";
        }
        
        var applause = new Audio("/audios/applause.mp3");
        if(begin == true) {
            applause.play();
            begin = false;
        }

        if(secs == 0) {
            var audio = new Audio("/audios/bell.mp3");
            audio.play();
            var msg = document.getElementById("drinkFlash");
            cheers.style.display = "block";
            msg.innerText = "Drink!";
            setTimeout(function() {
                msg.innerText = "";
                cheers.style.display = "none";
            },3000);
            
        }
    }, 1000);
});