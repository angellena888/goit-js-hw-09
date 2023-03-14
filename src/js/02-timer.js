import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const input = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const refs = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
  value: document.querySelector('.value'),
  label: document.querySelector('.label'),
  field: document.querySelector('.field'),
}

startBtn.setAttribute('disabled', true);
let intervalId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const currentDate = new Date();
    if (selectedDates[0] - currentDate >= 0) {
      startBtn.disabled = false;
      onStart(selectedDates[0]);
    } else {
      window.alert('Please choose a date in the future');
      startBtn.disabled = true;
    }
  },
};

flatpickr('#datetime-picker', options);

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function onStart(selectedDate) {
  intervalId = setInterval(() => {
    const currentDate = new Date();
    const deltaTime = selectedDate - currentDate;
    startBtn.disabled = false;
    refs.field.disabled = false;
    if (deltaTime > 0) {
      const { days, hours, minutes, seconds } = convertMs(deltaTime);
      refs.days.textContent = days;
      refs.hours.textContent = hours;
      refs.minutes.textContent = minutes;
      refs.seconds.textContent = seconds;
    } else { 
      clearInterval(intervalId); 
    }
  }, 1000); 
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}