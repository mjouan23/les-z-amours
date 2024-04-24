let audio;
let divScoreBlue = document.getElementById('divScoreBlue');
let divScoreYellow = document.getElementById('divScoreYellow');
let divScoreRed = document.getElementById('divScoreRed');
let scoreBlue = 0, scoreYellow = 0, scoreRed = 0, winner;

document.addEventListener('keydown', function(event) {
    
    // Point à l'équipe bleue
    if (event.key === "b") {
        scoreBlue = parseInt(divScoreBlue.textContent);
        scoreBlue = scoreBlue + 5;
        divScoreBlue.textContent = scoreBlue;
    }
    else if (event.key === "n") {
        scoreBlue = parseInt(divScoreBlue.textContent);
        scoreBlue = scoreBlue - 5;
        divScoreBlue.textContent = scoreBlue;
    }
    // Point à l'équipe jaune
    else if (event.key === "j") {
        scoreYellow = parseInt(divScoreYellow.textContent);
        scoreYellow = scoreYellow + 5;
        divScoreYellow.textContent = scoreYellow;
    }
    else if (event.key === "k") {
        scoreYellow = parseInt(divScoreYellow.textContent);
        scoreYellow = scoreYellow - 5;
        divScoreYellow.textContent = scoreYellow;
    }
    // Point à l'équipe rouge
    else if (event.key === "r") {
        scoreRed = parseInt(divScoreRed.textContent);
        scoreRed = scoreRed + 5;
        divScoreRed.textContent = scoreRed;
    }
    else if (event.key === "t") {
        scoreRed = parseInt(divScoreRed.textContent);
        scoreRed = scoreRed - 5;
        divScoreRed.textContent = scoreRed;
    }
    // finale 
    else if (event.key === "Enter") {
        if (scoreYellow > scoreBlue && scoreYellow > scoreRed) {
            winner = "Marie&Marc";
        }
        else if (scoreRed > scoreBlue && scoreRed > scoreYellow) {
            winner = "Nathalie&Didier";
        } else {
            
            winner = "Cindy&Jérémy";
        }

        window.location.href = "finale.html?winner=" + encodeURIComponent(winner);
    }

    if (event.key === "o") {
        if (audio && !audio.paused) {
            audio.pause();
        }
        audio = new Audio("../assets/sound/Manche_1_Question_4_tennis.mp3");
        audio.play();

    }
    if (event.key === "g") {
        if (audio && !audio.paused) {
            audio.pause();
        }
        audio = new Audio("../assets/sound/generique.mp3");
        audio.play();

    }
    if (event.key === ' ') {
        if (video && !video.paused) {
            video.pause();
            videoContainer.removeChild(video);
        } else if (audio && !audio.paused) {
            audio.pause();
        }
    }

    // Gestion des jingles
    if(event.key == "1" || event.key == "2" || event.key == "3" || event.key == "4" || event.key == "5" || event.key == "6" || event.key == "7" || event.key == "8") {
        // Créez un élément vidéo
        
        // Vérifiez si la div contient un élément vidéo
        var videoElement = videoContainer.querySelector('video');

        // Si un élément vidéo existe, supprimez-le
        if (videoElement) {
            videoContainer.removeChild(videoElement);
        }
        video = document.createElement('video');

        
        // Manche 1 Question 1 
        if (event.key === "1") {
            video.src = '../assets/video/Manche_1_Question_1_Encore un matin.webm';
        }
        // Manche 1 Question 2 
        else if (event.key === "2") {
            video.src = '../assets/video/Manche_1_Question_2_clip_de_la_ferme_des_fatals picards.webm';
        }
        // Manche 1 Question 3 
        else if (event.key === "3") {
            video.src = '../assets/video/Manche_1_Question_3_BA_CESAR_2016.mp4';
        }
        // Manche 1 Question 4
        else if (event.key === "4") {
            video.src = '../assets/video/Manche_1_Question_4_Joe_Cocker_You_Can_Leave_Your_Hat_On.mp4';
        } 
        // Manche 2 Question 1 
        else if (event.key === "5") {
            video.src = '../assets/video/Manche_2_Question_1_Boulevard_des_Airs_Emmène_moi.mp4';
        }
        // Manche 2 Question 2 
        else if (event.key === "6") {
            video.src = '../assets/video/Manche_2_Question_2_Zouk_Machine_Maldon.mp4';
        }
        // Manche 2 Question 3 
        if (event.key === "7") {
            video.src = '../assets/video/Manche_2_Question_3_Movie_Company_Intros.mp4';
        }
        // Manche 2 Question 4 
        else if (event.key === "8") {
            video.src = '../assets/video/Manche_2_Question_4_ Joe_Cocker_You Can_Leave_Your_Hat_On.mp4';
        }
        video.controls = false; // Affiche les contrôles de la vidéo (play, pause, volume, etc.)

        
        videoContainer.appendChild(video);

        // Supprimez la vidéo à la fin de la lecture
        video.addEventListener('ended', function() {
            videoContainer.removeChild(video);
        });
        video.play();

    }
});