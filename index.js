setInterval(() => {
    const d = new Date();
let h = d.getHours();
let m = d.getMinutes();
let s =d.getSeconds();
let amPm = h >= 12 ? "PM" : "AM";
let hh =document.getElementById('hh');
let mm =document.getElementById('mm');
let ss =document.getElementById('ss');

let hr_dot = document.querySelector('.hr_dot');
let min_dot = document.querySelector('.min_dot');
let sec_dot = document.querySelector('.sec_dot');
let date = document.querySelector('.date');
date.innerHTML= " , " + d.toDateString();


//convert 24hr to 12hrs
if(h>12){h=h-12;}
//put 0 in front of single digit
h = (h<10) ? "0" + h : h;
m  = (m<10) ? "0" + m: m;
s  = (s<10) ? "0" + s : s;

document.getElementById('hours').innerHTML = h + "<br><span>Hours</span>";
document.getElementById('minutes').innerHTML = m + "<br><span>Minutes</span>";
document.getElementById('seconds').innerHTML = s + "<br><span>Second</span>";
document.getElementById('ampm').innerHTML = amPm;

hh.style.strokeDashoffset=440-(440*h)/12;
mm.style.strokeDashoffset=440-(440*m)/60;
ss.style.strokeDashoffset=440-(440*s)/60;

hr_dot.style.transform = `rotate(${h * 30}deg)`;

min_dot.style.transform = `rotate(${m * 6}deg)`;

sec_dot.style.transform =  `rotate(${s * 6}deg)`;

});
