//DOM navigation
const onButton = document.querySelector('button[data-start]');
const offButton = document.querySelector('button[data-stop]');
//variables
let timerId = null;

//event listeners 
onButton.addEventListener('click', () => {
    if (timerId !== null) {
          onButton.setAttribute('disabled' , '' );
    }
    onButton.setAttribute('disabled', '');
    offButton.removeAttribute('disabled');
    timerId = setInterval(changeBodyColor, 1000);
})
offButton.addEventListener('click', () => {
    if (timerId !== null) {
        onButton.removeAttribute('disabled'); 
        offButton.setAttribute('disabled' , '' );
        clearInterval(timerId);
        timerId = null;
    }
})
//functions
function changeBodyColor() {
    document.body.style.backgroundColor = `${getRandomHexColor()}`
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
