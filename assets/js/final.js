let cpt = 0;
let heartsYellow = document.querySelectorAll('.hearts > img.heart_yellow');
let heartsRed = document.querySelectorAll('.hearts > img.heart_red');
let timerId;
let timeTimer = 60;

let timeRest = timeTimer; 

// Sélectionner l'élément où afficher le temps restant
const timerElement = document.getElementById('timer');
let sound = new Audio("../assets/sound/sound.mp3");
const soundHeartYellow = new Audio("../assets/sound/heart_yellow.mp3");
const soundHeartRed = new Audio("../assets/sound/heart_red.mp3");
const soundLost = new Audio("../assets/sound/lost.mp3");
const soundWin = new Audio("../assets/sound/win.mp3");



const question = document.getElementById('question');
const response = document.getElementById('response');
let cptResponse = 0;
let cptHeartYellow = 0;
let cptHeartRed = 0;

const url = 'https://imajys.fr/data.php';
let arQuestion, arRespoonse;
// Utilisation de l'API Fetch pour récupérer les données JSON
fetch(url).then(res => {
    console.log(res);
    return res.json();
}).then(data => {
    arQuestion = Object.keys(data.data);
    arRespoonse = Object.values(data.data);
    console.log(arQuestion);
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
            cptHeartYellow++;
            if(cptHeartYellow == 7) {
                sound.pause();
                sound.currentTime = 0;
                soundWin.play();
                question.textContent = "";
                response.textContent = "Bravo !!!";
                stopTimer();
            }else {
                question.textContent = arQuestion[cptResponse];
                response.textContent = arRespoonse[cptResponse];
                if(cptResponse < arRespoonse.length) cptResponse++;
            }
        }
    }
    // Coeur rouge
    else if (event.key === 'r') {
        if(cpt <= 10) {
            heartsRed[cpt].style.display = 'block';
            soundHeartRed.play();        
            cpt++;
            cptHeartRed++;
            if(cptHeartRed == 5) {
                sound.pause();
                sound.currentTime = 0;
                soundLost.play();
                question.textContent = "";
                response.textContent = "Quel Dommage...";
                stopTimer();
            } else {
                question.textContent = arQuestion[cptResponse];
                response.textContent = arRespoonse[cptResponse];
                if(cptResponse < arRespoonse.length) cptResponse++;
            }
        }
    }
    else if (event.key === ' ') {
        question.textContent = arQuestion[cptResponse];
        response.textContent = arRespoonse[cptResponse];
        if(cptResponse < arRespoonse.length) cptResponse++;
    }
    // supprimer un coeur
    // else if (event.key === "Backspace") {
    //     if(cpt > 0) cpt--;
    //     heartsYellow[cpt].style.display = 'none';
    //     heartsRed[cpt].style.display = 'none';
    // }
    else if (event.key === "Enter") {
        if(timeRest == timeTimer) {
            startTime();
            question.textContent = arQuestion[cptResponse];
            response.textContent = arRespoonse[cptResponse];
            if(cptResponse < arRespoonse.length) cptResponse++;
        }
    }
    else if (event.key === 'q') {
        stopTimer();
    }
    
});

function startTime() {
    sound.play();
    timerElement.textContent = timeRest.toString().padStart(2, '0');
    timerId = setInterval(function() {
        timeRest--;
        timerElement.textContent = timeRest.toString().padStart(2, '0');
        if (timeRest <= 0) {
            clearInterval(timerId);
            question.textContent = "";
            response.textContent = "Quel Dommage...";
        }
    }, 1000);
}

// Fonction pour arrêter le minuteur
function stopTimer() {
    clearInterval(timerId); // Arrêter le minuteur
    timerElement.textContent = '00'; // Effacer le contenu du timer
    timeRest = timeTimer;
    sound.pause();
    sound.currentTime = 0;        
}