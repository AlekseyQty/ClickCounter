button = document.querySelector('.main-button');
paragraph = document.querySelector('#clicks');
time = document.querySelector('#time-ms');
timeSec = document.querySelector('#time-s');
clickDone = document.querySelector('#clicks-done');
test = document.querySelector('.test');

var clickCount = 0;
var isEnd = false;
var isStart = false;
var t;
var mill = 0;
var sec = 0;

function restart() {
    test.style.visibility = 'hidden';
    clearTimeout(t);
    button.innerHTML = 'Click';
    timeSec.innerHTML = ``;
    time.innerHTML = ``;
    clickDone.innerHTML = '';
    paragraph.innerHTML = '';
    clickCount = 0;
    isEnd = false;
    isStart = false;
    mill = 0;
    sec = 0;
}
function showClicks(e) {
    if (isEnd) {
        return;
    }
    if (!isStart) {
        isStart = true;
        timer();
    }
    clickCount++;
    paragraph.innerHTML = `${clickCount}`;
};

function updateTimer () {
    mill++;
    if (mill>10) {
        mill=0;
        sec++;
    }
    if (sec>=10) {
        timeSec.innerHTML = `${sec}`;
        time.innerHTML = `${mill}`;
        stopTimer();
        return;
    }
    timeSec.innerHTML = `${sec}`;
    time.innerHTML = `${mill}`;
    timer();
}

function stopTimer() {
    isEnd = true;
    button.innerHTML = 'Click';
    test.style.visibility = 'visible';
    // button.disabled = true;
    // setTimeout(() => button.disabled = false,3000);
    time.innerHTML = '';
    timeSec.innerHTML = '';
    paragraph.innerHTML = `Clicks: ${clickCount}`;
    clickDone.innerHTML = `Your CPS: ${clickCount/sec}`;
}


function timer() {
    t = setTimeout(updateTimer,100);
}

button.addEventListener("click",showClicks);
test.addEventListener("click",restart);