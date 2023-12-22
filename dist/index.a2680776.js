!function(){//DOM ELEMENTS TO INTERACT
let e=document.getElementById("trailerVideo"),t=document.getElementById("imageTrailerFigcaption"),d=document.getElementById("overlayDiv"),n=document.getElementById("imagePoster");// FUNCTION TO HIDE THE MINDHUNTER POSTER AND SHOW THE TRAILER
window.changeToVid=function(d){d.classList.add("hidden"),n.classList.add("hidden"),e.classList.remove("hidden"),t.innerHTML=`Tr\xe1iler oficial de Mindhunter. | Video proporcionado por <a href="https://www.youtube.com/watch?v=LR3G1lWbnUU" target="_blank">Netflix</a>`,e.autoplay="true",e.load()},//FUNCTION TO ADD AN OVERLAY WHEN HOVERING THE IMAGE
window.addOverlay=function(e,t){t.preventDefault(),d.classList.remove("hidden")},window.removeOverlay=function(e){d.classList.add("hidden")},e.addEventListener("ended",function(){// show image here
n.classList.remove("hidden"),t.innerHTML=`P\xf3ster oficial de Mindhunter, temporada 2. | Imagen de <a href="https://www.rottentomatoes.com/tv/mindhunter/s02" target="_blank">Rotten Tomatoes</a>`,e.classList.add("hidden")},!1)}();//# sourceMappingURL=index.a2680776.js.map

//# sourceMappingURL=index.a2680776.js.map
