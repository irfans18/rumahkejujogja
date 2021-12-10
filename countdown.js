const countdown = () =>{
   
   const gap = initDate();
   // console.log(gap);

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
   // document.getElementById("firstLineText").textContent = "Menuju";


}

const promoMessage = (value) => {

   if(value == false) {
      document.getElementById("firstLineText").textContent = "Menuju";
      document.getElementById("secondLineText").textContent = "PROMO 12.12";
   } else {
      document.getElementById("firstLineText").textContent = "PROMO 12.12";
      document.getElementById("secondLineText").textContent = "Diskon 12%";
   }
}

const initDate = () =>{
   const startDate = new Date("December 11, 2021 00:00:00").getTime(); //start promo
   const endDate = new Date("December 14, 2021 00:00:00").getTime();  //end promo
   const now = new Date().getTime();

   if (now < startDate) {
      promoMessage(false);
      return startDate - now;
   } else {
      promoMessage(true);
      return endDate - now;
   }
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
