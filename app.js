window.addEventListener("load", ()=> {
    var today = new Date().getTime();
    var deadline = new Date("Jul 4, 2019 00:00:00").getTime();
    var timeUntil = deadline - today;

    let msPerDay = 1000 * 60 * 60 * 24;
    let msPerHour = 1000 * 60 * 60;
    let msPerMinute = 1000 * 60;
    var days = Math.floor(timeUntil / msPerDay);
    var hours = Math.floor((timeUntil % msPerDay) / msPerHour);
    var minutes =  Math.floor((timeUntil % msPerHour) / msPerMinute);

    document.getElementById("time-left").innerHTML = days + " days " + hours + " hours " + minutes + " minutes until Fourth of July!";

});