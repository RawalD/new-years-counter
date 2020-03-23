const days= document.getElementById('days'),
    hours = document.getElementById('hours'),
    minutes = document.getElementById('minutes'),
    seconds = document.getElementById('seconds');

const year = document.getElementById('year');    
const countdown = document.getElementById('countdown');
const loading = document.getElementById('loading');

const currentYear = new Date().getFullYear();
    // currentDay = new Date().getDay(),
    // currentMonth = new Date().getMonth(),
    // currentHour = new Date().getHours(),
    // currentMinute = new Date().getMinutes(),
    // currentSeconds = new Date().getSeconds();


const newYearTime = new Date(`1 March ${currentYear + 1} 00:00:00`);
//console.log(newYearTime);

year.innerText = currentYear + 1;

function updateCountdown(){
    const currentTime = new Date();
    const difference = newYearTime - currentTime;

    const d = Math.floor(difference / 1000 / 60 / 60 / 24);
    const h = Math.floor(difference / 1000 / 60 / 60) % 24;
    const m = Math.floor(difference / 1000 /60) % 60;
    const s = Math.floor(difference /1000) % 60;
   
    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
    //console.log(s);
}

//show spinner
setTimeout(()=> {
    loading.remove();
    countdown.style.display = 'flex';
},1000);

setInterval(updateCountdown, 1000);
