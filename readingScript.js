let timerDuration = 95; // 3 minutes in seconds
const timerElement = document.getElementById('timer');
const popupImages = ['michonne2.png', 'negan.png', 'rhea1.png', 'jane.png', 'michonne1.png', 'maggie.png', 'rhea2.png', 'rick.png', 'dexter.png', 'michonne3.png'];
let isPopupOpen = false;

function updateTimer() {
    let minutes = Math.floor(timerDuration / 60);
    let seconds = timerDuration % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    timerElement.textContent = `Time Left: ${minutes}:${seconds}`;
    if (timerDuration > 0) {
        timerDuration--;
        setTimeout(updateTimer, 1000);
    } else {
        window.location.href = 'questions.html';
    }
}

function showRandomPopup() {
    if (isPopupOpen) return;

    let image = popupImages[Math.floor(Math.random() * popupImages.length)];
    let popup = document.createElement('div');
    popup.className = 'popup';
    popup.innerHTML = `
        <img src="${image}" alt="Popup" />
        <span class="popup-close">&times;</span>
    `;
    popup.querySelector('.popup-close').addEventListener('click', () => {
        isPopupOpen = false;
        popup.remove();
        setTimeout(showRandomPopup, Math.floor(Math.random() * 5000) + 3000); // Random delay between 3-8 seconds
    });
    document.getElementById('popupImages').appendChild(popup);
    popup.style.display = 'block';
    isPopupOpen = true;
}

function createPopups() {
    showRandomPopup();
}

document.getElementById('doneButton').addEventListener('click', function() {
    window.location.href = 'questions.html';
});

updateTimer();
createPopups();
