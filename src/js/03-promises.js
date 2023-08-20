//imports
import { Notify } from 'notiflix';
//DOM navigation
const form = document.querySelector('.form');
//variables
let firstDelay = 0;
let step = 0;
let amount = 0;

form.addEventListener('submit', event => {
  event.preventDefault();
  firstDelay = Number(form.delay.value);
  step = Number(form.step.value);
  amount = Number(form.amount.value);
  for (let i = 0; i < amount; i++) {
    createPromise(i, firstDelay);

    firstDelay += step;
  }
});

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve(Notify.success(`Fulfilled promise ${position} in ${delay}ms`));
      } else {
        // Reject
        reject(Notify.failure(`Rejected promise ${position} in ${delay}ms`));
      }
    }, delay);
  });
}
