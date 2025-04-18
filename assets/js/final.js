

let cpt = 0;
let heartsYellow = document.querySelectorAll('.hearts > img.heart_yellow');
let heartsRed = document.querySelectorAll('.hearts > img.heart_red');
let timerId;
let timeTimer = 90;
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
let lastHeart;
let pause = false;

// Récupération des paramètres de l'URL
const params = new URLSearchParams(window.location.search);
const winner = params.get('winner');
response.textContent = winner;

const url = 'https://imajys.fr/data.php?winner=' + encodeURIComponent(winner);
let arQuestion, arResponse, nbResponse;
// Utilisation de l'API Fetch pour récupérer les données JSON
fetch(url).then(res => {
    return res.json();
}).then(data => {
    arQuestion = Object.keys(data.data);
    arResponse = Object.values(data.data);
    nbResponse = arResponse.length-1;
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
            lastHeart = 'j';
            if(cptHeartYellow == 7) {
                sound.pause();
                sound.currentTime = 0;
                soundWin.play();
                question.textContent = "";
                response.innerHTML = "Bravo !!!";
                stopTimer();
                setTimeout(playVideoGift, 5000);
            }else {
                question.textContent = arQuestion[cptResponse].replace("question", "Q");
                response.innerHTML = arResponse[cptResponse];
                if(cptResponse < nbResponse) cptResponse++;
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
            lastHeart = 'r';
            if(cptHeartRed == 5) {
                sound.pause();
                sound.currentTime = 0;
                soundLost.play();
                question.textContent = "";
                response.innerHTML = "Quel Dommage...";
                stopTimer();
                setTimeout(playVideoGift, 5000);
            } else {
                question.textContent = arQuestion[cptResponse].replace("question", "Q");
                response.innerHTML = arResponse[cptResponse];
                if(cptResponse < nbResponse) cptResponse++;
            }
        }
    }
    else if (event.key === ' ') {
        question.textContent = arQuestion[cptResponse].replace("question", "Q");
        response.innerHTML = arResponse[cptResponse];
        if(cptResponse < nbResponse) cptResponse++;
    }
    // supprimer un coeur
    else if (event.key === "Backspace") {
        // On décrémente le compteur global
        if(cpt > 0) cpt--;
        // On décrémente le compteur de coeur jaune ou rouge en fonction du dernier coeur ajouté
        if(lastHeart == 'j')
            cptHeartYellow--;
        else if (lastHeart == 'r')
            cptHeartRed--;

        heartsYellow[cpt].style.display = 'none';
        heartsRed[cpt].style.display = 'none';
    }
    else if (event.key === "Enter") {
        // Si jamais démarer, lancer le jeu
        if(timeRest == timeTimer) {
            startTime();
            question.textContent = arQuestion[cptResponse].replace("question", "Q");
            response.innerHTML = arResponse[cptResponse];
            if(cptResponse < nbResponse) cptResponse++;
        }
        // Sinon mettre sur pause le compteur
        else if(pause) {
            startTime();
            pause = false;
        } else {
            clearInterval(timerId);
            sound.pause();
            pause = true;
        }
    }
    
});

function startTime() {
    sound.play();
    timerElement.textContent = timeRest.toString().padStart(2, '0');
    timerId = setInterval(function() {
        timeRest--;
        
        timerElement.textContent = timeRest.toString().padStart(2, '0');
        if (timeRest <= 0) {
            soundLost.play();
            clearInterval(timerId);
            question.textContent = "";
            response.innerHTML = "Quel Dommage...";
            setTimeout(playVideoGift, 5000);
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

function playVideoGift() {
    video = document.createElement('video');
    video.src = '../assets/video/lot.mp4';
    videoContainer.appendChild(video);
    video.play();
}