

// touche espace : mise en route du timer
document.addEventListener('keydown', function(event) {
   
});
// touche q : arrêt du timer
document.addEventListener('keydown', function(event) {
    if (event.key === 'q') {
        stopTimer();
        console.log("Minuteur arrêté !");
    }
});
