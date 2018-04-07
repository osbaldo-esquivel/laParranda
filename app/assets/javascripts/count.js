document.getElementById("drinkButt").addEventListener("click",function() {
    var sixtyMinutes = new Date();
    sixtyMinutes.setMinutes(sixtyMinutes.getMinutes() + 60);
    var counterFunc = setInterval(function() {
        var timeNow = new Date().getTime();
        var diff = sixtyMinutes - timeNow;
        var mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        var secs = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById("counter").innerHTML = mins + ":" + secs;
        if (diff < 0) {
            clearInterval(counterFunc);
            document.getElementById("counter").innerHTML = "Congrats on the Power Hour!";
        }
    }, 1000);
});