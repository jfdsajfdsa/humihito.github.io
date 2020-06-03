  document.getElementById("test").innerHTML = "HELLO WORLD";
  

//時刻
  function showClock1(){
    var nowTime = new Date(); 
    var nowYear = nowTime.getFullYear();
    var nowMon  = nowTime.getMonth() + 1;
    var nowDate = nowTime.getDate();
    var nowHour = nowTime.getHours();
    var nowMin  = nowTime.getMinutes();
    var nowSec  = nowTime.getSeconds();
    var msg = "現在" + nowYear +"/" + nowMon +"/"+ nowDate + " - " + nowHour +":" + nowMin + ":" + nowSec + " です。 ";
    document.getElementById("RealtimeClockArea").innerHTML = msg;
 }
  setInterval('showClock1()',1000);

