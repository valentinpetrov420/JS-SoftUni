function timer() {
    let startBtn = $('#start-timer');
    let stopBtn = $('#stop-timer');
    startBtn.on('click', start);
    stopBtn.on('click', stop);

    let time = 0;
    let isRunning = false;
    let timer;

    function start() {
        if (!isRunning) {
            timer = setInterval(step, 1000);
            isRunning = true;
        }
    }

    function stop() {
        clearInterval(timer);
        isRunning = false;
    }

    function step() {
        time++;
        $('#hours').text(("0" + Math.trunc(time / 3600)).slice(-2));
        $('#minutes').text(("0" + Math.trunc((time / 60) % 60)).slice(-2));
        $('#seconds').text(("0" + Math.trunc(time % 60)).slice(-2));
    }
}