let audio;
let divScoreBlue = document.getElementById('scoreBlue');
let divScoreYellow = document.getElementById('scoreYellow');
let divScoreRed = document.getElementById('scoreRed');

document.addEventListener('keydown', function(event) {
    event.preventDefault();
    
    // Point à l'équipe bleue
    if (event.key === "b") {
        let scoreBlue = parseInt(divScoreBlue.textContent);
        scoreBlue++;
        divScoreBlue.textContent = scoreBlue;
    }
    // Point à l'équipe jaune
    else if (event.key === "j") {
        let scoreYellow = parseInt(divScoreYellow.textContent);
        scoreYellow++;
        divScoreYellow.textContent = scoreYellow;
    }
    // Point à l'équipe rouge
    else if (event.key === "r") {
        let scoreRed = parseInt(divScoreRed.textContent);
        scoreRed++;
        divScoreRed.textContent = scoreRed;
    }
    // finale 
    else if (event.key === "Enter") {
        window.location.href = "finale.html";
    }

    // Gestion des jingles
    if(event.key == "F1" || event.key == "F2" || event.key == "F3" || event.key == "F4" || event.key == "F5" || event.key == "F6" || event.key == "F7" || event.key == "F8" || event.key == "F9" || event.key == "F10" || event.key == "F11" || event.key == "F12") {
        if (audio && !audio.paused) {
            audio.pause();
        }

        // Manche 1 Question 1 
        if (event.key === "F1") {
            audio = new Audio("../assets/sound/Manche_1_Question_1_Encore_un_matin.mp3");
        }
        // Manche 1 Question 2 
        else if (event.key === "F2") {
            audio = new Audio("../assets/sound/Manche_1_Question_2_clip_de_la_ferme_des_fatals_picards.mp3");
        }
        // Manche 1 Question 3 
        else if (event.key === "F3") {
            audio = new Audio("../assets/sound/Manche_1_Question_3_Publicité_Coca-Cola_Light.mp3");
        }
        // Manche 1 Question 4
        else if (event.key === "F4") {
            audio = new Audio("../assets/sound/Manche_1_Question_4_BA_CESAR_2016.mp3");
        }
        // Manche 1 Question 5 
        else if (event.key === "F5") {
            audio = new Audio("../assets/sound/Manche_1_Question_5_Soprano_Mon_précieux.mp3");
        }
        // Manche 1 Question 6 
        else if (event.key === "F6") {
            audio = new Audio("../assets/sound/Manche_1_Question_6_Joe_Cocker_You_Can_Leave_Your_Hat_On.mp3");
        }
        // Manche 2 Question 1 
        if (event.key === "F7") {
            audio = new Audio("../assets/sound/Manche_2_Question_1_Le_plus_beau_cadeau_du_monde.mp3");
        }
        // Manche 2 Question 2 
        else if (event.key === "F8") {
            audio = new Audio("../assets/sound/Manche_2_Question_2_Boulevard_des_Airs_Emmène-moi.mp3");
        }
        // Manche 2 Question 3 
        else if (event.key === "F9") {
            audio = new Audio("../assets/sound/Manche_2_Question_3_Zouk_Machine_Maldon.mp3");
        }
        // Manche 2 Question 4
        else if (event.key === "F10") {
            audio = new Audio("../assets/sound/Manche_2_Question_4_ELEGANCE_Vacances_j_oublie_tout.mp3");
        }
        // Manche 2 Question 5 
        else if (event.key === "F11") {
            audio = new Audio("../assets/sound/Manche_2_Question_5_Movie_Company_Intros.mp3");
        }
        // Manche 2 Question 6 
        else if (event.key === "F12") {
            audio = new Audio("../assets/sound/Manche_2_Question_6_Joe_Cocker_You_Can_Leave_Your_Hat_On.mp3");
        }
        audio.play();
    }
});