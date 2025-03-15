let osMain = document.getElementById("m-os");
let osOpen = document.getElementById("m-os-open");
let statusOS = false;
// fucntions //
osMain.onclick = function() {
    if(statusOS == false) {
        osOpen.style.display = "flex";
        statusOS = true;

        // del anim //
        osOpen.style.animation = "none";

        // activate anim //
        osOpen.style.animationDelay = ".3s"
        osOpen.style.animation = "anim_1 .3s linear";
    } else {
        statusOS = false;
        osOpen.style.display = "none";
    }
}