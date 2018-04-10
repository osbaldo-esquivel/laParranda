var begin = true;
document.getElementById("drinkButt").addEventListener("click",function() {
    var sixtyMinutes = new Date();
    sixtyMinutes.setMinutes(sixtyMinutes.getMinutes() + 60);
    var counterFunc = setInterval(function() {
        var timeNow = new Date().getTime();
        var diff = sixtyMinutes - timeNow;
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

        var cheers = document.getElementById("cheers");
        if(secs == 0) {
            var audio = new Audio("/audios/bell.mp3");
            audio.play();
            var msg = document.getElementById("drinkFlash");
            
            msg.innerText = "Drink!";
            setTimeout(function() {
                msg.innerText = "";
            },3000);
            
        }
    }, 1000);
});