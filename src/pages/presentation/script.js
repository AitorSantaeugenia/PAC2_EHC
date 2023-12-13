// FUNCION PARA LOS READ MORE READ LESS
window.readMorereadLess = function readMorereadLess(paragraph) {
    let dots = document.getElementsByClassName("dots")
    let moreText = document.getElementsByClassName("more")
    let btnText = document.getElementsByClassName("myBtn")

    if(paragraph === 0){
        if (dots[0].style.display === "none") {
            dots[0].style.display = "inline";
            btnText[0].innerHTML = "Leer más"; 
            moreText[0].style.display = "none";
          } else {
            dots[0].style.display = "none";
            btnText[0].innerHTML = "Leer menos"; 
            moreText[0].style.display = "inline";
          }
    }else if(paragraph === 1){
        if (dots[1].style.display === "none") {
            dots[1].style.display = "inline";
            btnText[1].innerHTML = "Leer más"; 
            moreText[1].style.display = "none";
          } else {
            dots[1].style.display = "none";
            btnText[1].innerHTML = "Leer menos"; 
            moreText[1].style.display = "inline";
          }
    }else if (paragraph === 2){
        if (dots[2].style.display === "none") {
            dots[2].style.display = "inline";
            btnText[2].innerHTML = "Leer más"; 
            moreText[2].style.display = "none";
          } else {
            dots[2].style.display = "none";
            btnText[2].innerHTML = "Leer menos"; 
            moreText[2].style.display = "inline";
          }
    }else if (paragraph === 3){
        if (dots[3].style.display === "none") {
            dots[3].style.display = "inline";
            btnText[3].innerHTML = "Leer más"; 
            moreText[3].style.display = "none";
          } else {
            dots[3].style.display = "none";
            btnText[3].innerHTML = "Leer menos"; 
            moreText[3].style.display = "inline";
          }
    }else if (paragraph === 4){
        if (dots[4].style.display === "none") {
            dots[4].style.display = "inline";
            btnText[4].innerHTML = "Leer más"; 
            moreText[4].style.display = "none";
          } else {
            dots[4].style.display = "none";
            btnText[4].innerHTML = "Leer menos"; 
            moreText[4].style.display = "inline";
          }
    }else if (paragraph === 5){
        if (dots[5].style.display === "none") {
            dots[5].style.display = "inline";
            btnText[5].innerHTML = "Leer más"; 
            moreText[5].style.display = "none";
          } else {
            dots[5].style.display = "none";
            btnText[5].innerHTML = "Leer menos"; 
            moreText[5].style.display = "inline";
          }
    }else if (paragraph === 6){
        if (dots[6].style.display === "none") {
            dots[6].style.display = "inline";
            btnText[6].innerHTML = "Leer más"; 
            moreText[6].style.display = "none";
          } else {
            dots[6].style.display = "none";
            btnText[6].innerHTML = "Leer menos"; 
            moreText[6].style.display = "inline";
          }
    }else if (paragraph === 7){
        if (dots[7].style.display === "none") {
            dots[7].style.display = "inline";
            btnText[7].innerHTML = "Leer más"; 
            moreText[7].style.display = "none";
          } else {
            dots[7].style.display = "none";
            btnText[7].innerHTML = "Leer menos"; 
            moreText[7].style.display = "inline";
          }
    }else if (paragraph === 8){
        if (dots[8].style.display === "none") {
            dots[8].style.display = "inline";
            btnText[8].innerHTML = "Leer más"; 
            moreText[8].style.display = "none";
          } else {
            dots[8].style.display = "none";
            btnText[8].innerHTML = "Leer menos"; 
            moreText[8].style.display = "inline";
          }
    }else{
        if (dots[9].style.display === "none") {
            dots[9].style.display = "inline";
            btnText[9].innerHTML = "Leer más"; 
            moreText[9].style.display = "none";
          } else {
            dots[9].style.display = "none";
            btnText[9].innerHTML = "Leer menos"; 
            moreText[9].style.display = "inline";
          }
    }

  }