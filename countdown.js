const countdown = () =>{
   const countDate = new Date("December 11, 2021 00:00:00").getTime();
   const now = new Date().getTime();
   const gap = countDate - now;

   const second = 1000;
   const minute = second * 60;
   const hour = minute * 60;
   const day = hour * 24;

   const viewDay = Math.floor(gap/day);
   const viewHour = Math.floor((gap % day) / hour);
   const viewMinute = Math.floor((gap % hour) / minute);
   const viewSecond = Math.floor((gap % minute) / second);

   // var viewDays = document.getElementById("day").span;
   document.getElementById("day").textContent = format(viewDay);
   document.getElementById('hour').textContent = format(viewHour);
   document.getElementById("minute").textContent = format(viewMinute);
   document.getElementById("second").textContent = format(viewSecond);

}

const format = (value) =>{
   if (value < 10) {
      return "0" + value;
   } else {
      return value;
   }
}

// countdown();

setInterval(countdown, 1000);