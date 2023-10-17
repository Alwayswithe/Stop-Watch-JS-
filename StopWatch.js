let sec = 0;
let less_than_sec = 0;
let timeStopId;
let isTimeRunning;


let displayTime = document.querySelector('.js_display_time');


document.querySelector('.js_start_button').addEventListener('click', () => {
    start();
})

document.querySelector('.js_stop_button').addEventListener('click', () => {
    stop();
})

document.querySelector('.js_reset_button').addEventListener('click', () => {
    reset();
})

// FUNCTION AREA

function start() {
    if (isTimeRunning) {
        return;
    }
    isTimeRunning = true;

    timeStopId = setInterval(() => {
        less_than_sec++;
        if (less_than_sec === 100) {
            sec++;
            less_than_sec = 0;
        }

        if (sec < 10) {
            if (less_than_sec < 10) {
                displayTime.innerHTML = `${'0' + sec}:${'0' + less_than_sec}`
            }
            else {
                displayTime.innerHTML = `${'0' + sec}:${less_than_sec}`
            }
        }
        else {
            if (less_than_sec < 10) {
                displayTime.innerHTML = `${sec}:${'0' + less_than_sec}`
            }
            else {
                displayTime.innerHTML = `${sec}:${less_than_sec}`
            }
        }
    }, 10)
}

function stop() {
    clearInterval(timeStopId);
    isTimeRunning = false;
}

function reset() {
    clearInterval(timeStopId);
    isTimeRunning = false;
    sec = 0;
    less_than_sec = 0;
    displayTime.innerHTML = '00:00';
}