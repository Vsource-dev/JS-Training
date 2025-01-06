
let display = document.getElementById('timer');
let lapDisplay = document.getElementById('laps');

let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;
let count = 0;

function start(){

    if(!isRunning){

        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateDisplay, 10);
        isRunning = true;

    }

}

function stop(){

    if(isRunning){

        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;

    }

}

function reset(){

    clearInterval(timer);
    display.textContent='00:00:00:00'
    elapsedTime = 0;
    startTime = 0;
    isRunning = false;
    lapDisplay.innerHTML = ''
    count = 0;

}

function lap(){

    count++;

    const newP = document.createElement('p');

    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60).toString();
    let milisecs = Math.floor(elapsedTime %  1000 / 10);  

    hours = String(hours).padStart(2,'0');
    minutes = String(minutes).padStart(2,'0');
    seconds = String(seconds).padStart(2,'0');
    milisecs = String(milisecs).padStart(2,'0');

    newP.textContent = `${count} | ${hours}:${minutes}:${seconds}:${milisecs}`;

    lapDisplay.appendChild(newP);

}

function updateDisplay(){

    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60).toString();
    let milisecs = Math.floor(elapsedTime %  1000 / 10);  

    hours = String(hours).padStart(2,'0');
    minutes = String(minutes).padStart(2,'0');
    seconds = String(seconds).padStart(2,'0');
    milisecs = String(milisecs).padStart(2,'0');


    display.textContent = `${hours}:${minutes}:${seconds}:${milisecs}`;

}