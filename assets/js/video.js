// Récupérer la référence de la vidéo
var video = document.getElementById('videoElement');

// Demander l'accès à la webcam
navigator.mediaDevices.getUserMedia({ video: true })
.then(function(stream) {
    // Afficher le flux de la webcam dans la vidéo
    video.srcObject = stream;
})
.catch(function(err) {
    console.log('An error occurred: ' + err);
});