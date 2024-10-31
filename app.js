function updateClock() {
    var date = new Date();

    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    var hourin12Format = hour % 12;
    if (hourin12Format === 0) {
        hourin12Format = 12;
    }

    var period;
    if (hour < 12) {
        period = "AM";
    } else {
        period = "PM";
    }

    if (hourin12Format < 10) {
        hourin12Format = "0" + hourin12Format;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    document.getElementById("hours").innerHTML = hourin12Format;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("period").innerHTML = period;

var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

var day = days[date.getDay()];
var month = months[date.getMonth()];
var currentDate = date.getDate();
var year = date.getFullYear();

document.getElementById("current-date").innerHTML = month + " " + currentDate + ", " + year + ", " + day;
}

setInterval(updateClock, 1000);

updateClock();
