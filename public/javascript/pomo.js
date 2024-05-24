document.addEventListener('DOMContentLoaded', () => {
    const workInput = document.getElementById('work-time');
    const breakInput = document.getElementById('break-time');
    const timerDisplay = document.getElementById('timer-display');
    const startPauseBtn = document.getElementById('start-pause-btn');
    const resetBtn = document.getElementById('reset-btn');

    let isRunning = false;
    let isWorkTime = true;
    let timer;
    let timeLeft = parseInt(workInput.value) * 60;

    function updateDisplay() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    function startTimer() {
        if (isRunning) {
            clearInterval(timer);
            startPauseBtn.textContent = 'Start';
        } else {
            timer = setInterval(() => {
                timeLeft--;
                updateDisplay();

                if (timeLeft <= 0) {
                    clearInterval(timer);
                    isWorkTime = !isWorkTime;
                    timeLeft = (isWorkTime ? parseInt(workInput.value) : parseInt(breakInput.value)) * 60;
                    updateDisplay();
                    startTimer(); // Automatically start the next session
                }
            }, 1000);
            startPauseBtn.textContent = 'Pause';
        }
        isRunning = !isRunning;
    }

    function resetTimer() {
        clearInterval(timer);
        isRunning = false;
        isWorkTime = true;
        timeLeft = parseInt(workInput.value) * 60;
        updateDisplay();
        startPauseBtn.textContent = 'Start';
    }

    startPauseBtn.addEventListener('click', startTimer);
    resetBtn.addEventListener('click', resetTimer);

    workInput.addEventListener('change', () => {
        if (!isRunning) {
            timeLeft = parseInt(workInput.value) * 60;
            updateDisplay();
        }
    });

    breakInput.addEventListener('change', () => {
        if (!isRunning && !isWorkTime) {
            timeLeft = parseInt(breakInput.value) * 60;
            updateDisplay();
        }
    });

    // Initialize display
    updateDisplay();
});
