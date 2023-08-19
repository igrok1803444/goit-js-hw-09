//imports
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix';
//DOM navigation
const chooseDateElement = document.querySelector('#datetime-picker');
const startButton = document.querySelector('button[data-start]');
const daysEl = document.querySelector('span[data-days]');
const hoursEl = document.querySelector('span[data-hours]');
const minutesEl = document.querySelector('span[data-minutes]');
const secondsEl = document.querySelector('span[data-seconds]');
//variables
let compareValue = 0;
let timerId = null;
let selectedDate = 0;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() - new Date().getTime() <= 0) {
      Notify.failure('Please choose a date in the future');
    } else {
      selectedDate = selectedDates[0].getTime();
      renderInterface(selectedDate);
      startButton.removeAttribute('disabled');
      startButton.classList.remove('disabled');
    }
  },
};
//event listeners
startButton.addEventListener('click', () => {
  timerId = setInterval(renderInterface, 1000, selectedDate);
});
//functions
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
function addLeadingZero(days, hours, minutes, seconds) {
  if (days.toString().length < 2) {
    days = days.toString().padStart(2, '0');
  }
  if (hours.toString().length < 2) {
    hours = hours.toString().padStart(2, '0');
  }
  if (minutes.toString().length < 2) {
    minutes = minutes.toString().padStart(2, '0');
  }
  if (seconds.toString().length < 2) {
    seconds = seconds.toString().padStart(2, '0');
  }
  return { days, hours, minutes, seconds };
}
function renderInterface(selectedDate) {
  let { days, hours, minutes, seconds } = addLeadingZero(
    ...Object.values(convertMs(compareValue))
  );

  console.log(compareValue);
  daysEl.textContent = days;
  hoursEl.textContent = hours;
  minutesEl.textContent = minutes;
  secondsEl.textContent = seconds;
  if (compareValue <= 0) {
    clearInterval(timerId);
    startButton.setAttribute('disabled', '');
    startButton.classList.add('disabled');
    daysEl.textContent = '00';
    hoursEl.textContent = '00';
    minutesEl.textContent = '00';
    secondsEl.textContent = '00';
  }
  compareValue = selectedDate - new Date().getTime();
}
flatpickr(chooseDateElement, options);
