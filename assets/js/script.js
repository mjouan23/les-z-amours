let cpt = 0;
let heartsYellow = document.querySelectorAll('.hearts > img.heart_yellow');
let heartsRed = document.querySelectorAll('.hearts > img.heart_red');

document.addEventListener('keydown', function(event) {
    // Coeur jaune
    if (event.key === 'j') {
        if(cpt <= 10) {
            heartsYellow[cpt].style.display = 'block';
            cpt++; 
        }
    }
    // Coeur rouge
    else if (event.key === 'r') {
        if(cpt <= 10) {
            heartsRed[cpt].style.display = 'block';
            cpt++; 
        }
    }
    // supprimer un coeur
    else if (event.key === "Backspace") {
        if(cpt > 0) cpt--;
        heartsYellow[cpt].style.display = 'none';
        heartsRed[cpt].style.display = 'none';
    }
    else if (event.key === ' ') {
        startTime();
    }
    else if (event.key === 'q') {
        stopTimer();
    }
});

let timerId;
let timeTimer = 30

let timeRest = timeTimer; 

// Sélectionner l'élément où afficher le temps restant
const timerElement = document.getElementById('timer');

function updateTimer() {
    timerElement.textContent = timeRest;
}

function timerStopped() {
    clearInterval(timerId);
    console.log("Déclencher un son de fin !!!"); 
}

function startTime() {
    updateTimer();
    timerId = setInterval(function() {
        timeRest--;
        updateTimer();
        if (timeRest <= 0) {
            timerStopped();
        }
    }, 1000);
}

// Fonction pour arrêter le minuteur
function stopTimer() {
    clearInterval(timerId); // Arrêter le minuteur
    timerElement.textContent = '0'; // Effacer le contenu du timer
    timeRest = timeTimer;
}