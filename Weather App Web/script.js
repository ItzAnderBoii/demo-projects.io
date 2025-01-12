let degreeData = document.getElementById('deg-data');
let temp_data = document.getElementById('temp-data');
let loc_data = document.getElementById('loc-data');
let switcher = document.getElementById('switch');
let pop_up_data = document.getElementById('pop-data');
let pop_up = document.getElementById('pop');
let data = 0;

switcher.onclick = function() {
    if(data == 1) {
        loc_data.textContent = "France";
        degreeData.textContent = "3 °C";
    }
    if(data == 0) {
        data = data + 1;
        console.log(data);

        // Resetting the animation
        pop_up.style.opacity = "0"; // Make it invisible
        pop_up.style.animation = "none"; // Remove the previous animation
        
        // Trigger a reflow to reset the animation state
        pop_up.offsetHeight; // This forces a reflow, which resets the animation

        // Now apply the animation again
        pop_up.style.opacity = "1"; // Make it visible
        pop_up.style.animation = "pop-up 3.5s"; // Apply the animation

        loc_data.textContent = "Namibia";
        degreeData.textContent = "28 °C";
    }
}
