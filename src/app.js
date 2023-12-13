//DOM ELEMENTS TO INTERACT
const trailerVideo = document.getElementById("trailerVideo");
const figCaption = document.getElementById("imageTrailerFigcaption");
const overlayDiv = document.getElementById("overlayDiv");
const imagePoster = document.getElementById("imagePoster");

// FUNCTION TO HIDE THE MINDHUNTER POSTER AND SHOW THE TRAILER
window.changeToVid = function changeToVid(element) {
    element.classList.add("hidden");
    imagePoster.classList.add("hidden");
    trailerVideo.classList.remove("hidden");
    figCaption.innerHTML = `Tráiler oficial de Mindhunter. | Video proporcionado por <a href="https://www.youtube.com/watch?v=LR3G1lWbnUU" target="_blank">Netflix</a>`
    trailerVideo.autoplay = "true";
    trailerVideo.load();
};

//FUNCTION TO ADD AN OVERLAY WHEN HOVERING THE IMAGE
window.addOverlay = function addOverlay(element, e){
    e.preventDefault();
    overlayDiv.classList.remove("hidden");
};

window.removeOverlay = function removeOverlay(element) {
    overlayDiv.classList.add("hidden");
};

trailerVideo.addEventListener('ended', function() {
    // show image here
    imagePoster.classList.remove("hidden")
    figCaption.innerHTML = `Póster oficial de Mindhunter, temporada 2. | Imagen de <a href="https://www.rottentomatoes.com/tv/mindhunter/s02" target="_blank">Rotten Tomatoes</a>`
    trailerVideo.classList.add("hidden")
}, false);