"use strict";
/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 9
   Review Assignment

   Event Timer
   Author: Sophia Harlos
   Date:   Mar 29, 2026

*/
showClock();
setInterval(showClock, 1000);

function showClock(){
   var thisDay = new Date();
   var localDate = thisDay.toLocaleDateString(); //thisDay in local date conventions
   var localTime = thisDay.toLocaleTimeString();//thisDay in local time conventions
   document.getElementById("currentTime").innerHTML = "<span>" + localDate + "</span>" + "<span>" + localTime + "</span>";//change currentTime
   var j4Date = nextJuly4(thisDay);//store date
   j4Date.setHours(21);//21 is 9PM in 24hr time
   var days = (j4Date - thisDay)/(1000*60*60*24);//days left
   var hrs = (days - Math.floor(days))*24;//hrs left
   var mins = (hrs - Math.floor(hrs))*60;//mins left
   var secs = (mins - Math.floor(mins))*60;//secs left
   document.getElementById("dLeft").textContent = Math.floor(days);
   document.getElementById("hLeft").textContent = Math.floor(hrs);
   document.getElementById("mLeft").textContent = Math.floor(mins);
   document.getElementById("sLeft").textContent = Math.floor(secs);
}

function nextJuly4(currentDate) {
   var cYear = currentDate.getFullYear();
   var jDate = new Date("July 4, 2021");
   jDate.setFullYear(cYear);
   if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1);
   return jDate;
}