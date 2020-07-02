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
    
    var ampm = '';
    if(nowHour < 12){
      ampm = 'AM';
    } else{
      ampm = 'PM';
    }
    
    var msg = "現在" + nowYear +"/" + String(nowMon).padStart(2,'0') +"/"+ String(nowDate).padStart(2,'0') + " - " + ampm + String(nowHour % 12).padStart(2,'0') +":" + String(nowMin).padStart(2,'0') + ":" + String(nowSec).padStart(2,'0') + " です。 ";
    document.getElementById("RealtimeClockArea").innerHTML = msg;
 }
  setInterval('showClock1()',1000);
//ここまで時刻

//ここからストップウォッチのコード
var PassSec;

function showPassage(){
  PassSec++;
  var msg = "ボタンを押してから " + PassSec + "秒が経過しました。";
  document.getElementById('PassageArea').innerHTML = msg;
}

function startShowing(){
  PassSec = 0;
  PassageID = setInterval('showPassage()',1000);
  document.getElementById('startcount').disabled = true;
}

function stopShowing(){
  clearInterval(PassageID);
  document.getElementById('startcount').disabled = false;
}
//ここまでストップウォッチのコード
