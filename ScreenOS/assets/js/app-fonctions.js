// island features //
let dynamicIslandOs = document.getElementById("dynamicIsland");
let dynamicIslandError = document.getElementById("dyerr");

// apps id //
let appstatusnotif = "false";
let youtubeapp = document.getElementById("ytlaunch");

// functions //
dynamicIslandOs.onclick = function() {
    if(appstatusnotif == "true") {
        dynamicIslandOs.style.width = "30%";
        dynamicIslandOs.style.height = "15px";
        dynamicIslandOs.style.transition = "none";
        dynamicIslandOs.style.transitionDelay = ".5s";
        dynamicIslandOs.style.transition = "width .5s ease-in-out, height 1s ease-in-out";
        appstatusnotif = "false";
        // dynamic error app //
        dynamicIslandError.style.marginTop = "1%";
        dynamicIslandError.style.opacity = "1";
        dynamicIslandError.style.transition = "none";
        dynamicIslandError.style.transitionDelay = ".5s";
        dynamicIslandError.style.opacity = "0";
        dynamicIslandError.style.transition = "opacity .5s ease-in-out";
        dynamicIslandError.style.display = "none";
    }
}
youtubeapp.onclick = function() {
    
    if(appstatusnotif == "false") {
 // dynamic fonc //
    dynamicIslandOs.style.width = "70%";
    dynamicIslandOs.style.height = "20px";
    dynamicIslandOs.style.transition = "none";
    dynamicIslandOs.style.transitionDelay = ".5s";
    dynamicIslandOs.style.transition = "width 1s ease-in-out, height 1s ease-in-out";
    appstatusnotif = "true";

 // dynamic error app //
    dynamicIslandError.style.marginTop = "1%";
    dynamicIslandError.style.opacity = "0";
    dynamicIslandError.style.transition = "none";
    dynamicIslandError.style.transitionDelay = ".5s";
    dynamicIslandError.style.opacity = "1";
    dynamicIslandError.style.transition = "opacity 1s";
    dynamicIslandError.style.display = "flex";
    } 

   

    
}