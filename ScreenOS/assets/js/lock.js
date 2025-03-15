let lockscreen_asset = document.getElementById("locked");
let lockscreen_status = "true";
let screenOs = document.getElementById("deviceScr");
let homeUI = document.getElementById("homeOS");

screenOs.onclick = function() {
    if(lockscreen_status == "true") {
        lockscreen_asset.style.display = "none";
        homeUI.style.display = "flex";

        // play anim // 
        homeUI.style.animation = "none";
        homeUI.style.animation = "app_trans .5s";
        
    }
}

