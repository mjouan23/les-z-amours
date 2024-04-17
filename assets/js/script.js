let cpt = 0;
let heartsYellow = document.querySelectorAll('.hearts > img.heart_yellow');
let heartsRed = document.querySelectorAll('.hearts > img.heart_red');
let timerId;
let timeTimer = 60;

let timeRest = timeTimer; 

// Sélectionner l'élément où afficher le temps restant
const timerElement = document.getElementById('timer');
const sound = document.getElementById('sound');
const soundHeartYellow = document.getElementById('soundHeartYellow');
const soundHeartRed = document.getElementById('soundHeartRed');
const response = document.getElementById('response');
let cptResponse = 0;

const url = 'https://imajys.fr/data.php';
let arRespoonse;
// Utilisation de l'API Fetch pour récupérer les données JSON
fetch(url).then(res => {
    console.log(res);
    return res.json();
}).then(data => {
    arRespoonse = Object.values(data.data);
}).catch(error => {
    console.error('There was a problem with your fetch operation:', error);
});


document.addEventListener('keydown', function(event) {
    // Coeur jaune
    if (event.key === 'j') {
        if(cpt <= 10) {
            heartsYellow[cpt].style.display = 'block';
            soundHeartYellow.play();
            cpt++;
            response.textContent = arRespoonse[cptResponse];
            if(cptResponse < arRespoonse.length) cptResponse++;
        }
    }
    // Coeur rouge
    else if (event.key === 'r') {
        if(cpt <= 10) {
            heartsRed[cpt].style.display = 'block';
            soundHeartRed.play();        
            cpt++;
            response.textContent = arRespoonse[cptResponse];
            if(cptResponse < arRespoonse.length) cptResponse++;
        }
    }
    else if (event.key === "Enter") {
        response.textContent = arRespoonse[cptResponse];
        if(cptResponse < arRespoonse.length) cptResponse++;
    }
    // supprimer un coeur
    else if (event.key === "Backspace") {
        if(cpt > 0) cpt--;
        heartsYellow[cpt].style.display = 'none';
        heartsRed[cpt].style.display = 'none';
    }
    else if (event.key === ' ') {
        startTime();
        response.textContent = arRespoonse[cptResponse];
        if(cptResponse < arRespoonse.length) cptResponse++;
    }
    else if (event.key === 'q') {
        stopTimer();
    }
    
});

function startTime() {
    timerElement.textContent = timeRest.toString().padStart(2, '0');
    timerId = setInterval(function() {
        timeRest--;
        timerElement.textContent = timeRest.toString().padStart(2, '0');
        if (timeRest <= 0) {
            clearInterval(timerId);
        }
    }, 1000);
    sound.play();
}

// Fonction pour arrêter le minuteur
function stopTimer() {
    clearInterval(timerId); // Arrêter le minuteur
    timerElement.textContent = '60'; // Effacer le contenu du timer
    timeRest = timeTimer;
    sound.pause();
    sound.currentTime = 0;        
}