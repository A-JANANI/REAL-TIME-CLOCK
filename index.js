import './style.css';
function Time()
 {
   let date = new Date(); 
   let hh = date.getHours();
   let mm = date.getMinutes();
   let ss = date.getSeconds();
   let session = "AM";

   if(hh === 0)
   {
      hh = 12;
   }
   if(hh > 12)
   {
      hh = hh - 12;
      session = "PM";
    }
   if(hh < 10) 
      hh="0"+hh;
   else
      hh=hh;
   if(mm < 10) 
      mm="0"+mm;
   else
      mm=mm;
   if(ss < 10) 
      ss="0"+ss;
   else
      ss=ss;
   
   let time = hh + ":" + mm + ":" + ss + " " + session;
   document.getElementById("clock").innerText = time; 
   let t = setTimeout(function(){ Time() } , 1000);
}

Time();
