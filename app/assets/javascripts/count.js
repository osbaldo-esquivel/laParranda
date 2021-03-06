var begin = true;
var val = 0;

function getVal(mins) {
    val = mins;
    if(mins != "") {
        document.getElementById("counter").innerText = val + " mins";
    }
}

document.getElementById("custom").addEventListener("click", function() {
    document.getElementById("mins").style.display = "block";
});

document.getElementById("drinkButt").addEventListener("click",function() {
    if(val == "") {
        val = document.getElementById("minutes").value;
    }
    var currDate = new Date();
    var timeEnds = currDate.setMinutes(currDate.getMinutes() + val*1000);
    var counterFunc = setInterval(function() {
        var timeNow = Date.now();
        var gameTime = timeEnds - timeNow;
        var mins = Math.floor(gameTime/60000000);
        var secs = Math.floor((gameTime/1000)%60);
        var applause = new Audio("/audios/applause.mp3");
        var cheers = document.getElementById("cheers");
        if(secs < 10) { secs = "0" + secs; }
        if(mins < 10) { mins = "0" + mins; }
        document.getElementById("counter").innerText = mins + ":" + secs;
        if (mins == 0 && secs == 0) {
            clearInterval(counterFunc);
            document.getElementById("counter").innerHTML = "Congrats on the Power Hour!";
        }
        if(begin == true) {
            applause.play();
            begin = false;
        }
        if(secs == 0) {
            sounds = {
                1: "/audios/air_horn.mp3",
                2: "/audios/boxing.mp3",
                3: "/audios/train.mp3",
                4: "/audios/woop.mp3",
                5: "/audios/bell.mp3"
            }
            var randNum = Math.floor(Math.random() * 6);
            var audio = new Audio(sounds[randNum]);
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