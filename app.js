//Code along project Feb-20-2022

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",

];

const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let futureDate = new Date(2022,11,16,14,30,0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
    month = months[month];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];


giveaway.textContent = `Class Ends On ${weekday}, ${date} ${month} ${year} at ${hours}:${minutes}pm` ;

// future time in ms

const futureTime = futureDate.getTime();


function getRemainingTime(){
const today = new Date().getTime();

const t = futureTime - today;

//values in ms

const oneDay = 24 * 60 * 60 * 1000;
const oneHour = 60 * 60 * 1000;
const oneMinute = 60 * 1000;
const oneSecond = 1000;

let days = t / oneDay;
days = Math.floor(days);

let hours = Math.floor((t % oneDay) / oneHour);
let minutes = Math.floor((t % oneHour) / oneMinute);
let seconds = Math.floor((t % oneMinute) / 1000);

// Set values array:
const values = [days,hours,minutes,seconds];

function format(item){
    if(item < 10){
        return item = `0${item}`
    }
    return item
}

items.forEach(function(item,index){
    item.innerHTML = format(values[index]);
});
if (t < 0) {
    clearInterval(countdown);

    deadline.innerHTML = `<h4 class="graduated">This class has graduated, Congratulations to all who participated! My your future be full of clean, working code!!</h4>`;
}

}
// countdown
let countdown = setInterval(getRemainingTime,1000);

getRemainingTime();