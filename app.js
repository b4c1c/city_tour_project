// Line 1 - 5 is to test JS file. Running fine 

// let about = document.getElementById('about')
// about.style.color = 'red'
// console.log(about);

let icon = document.getElementById("icon")

icon.onclick = function(){
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")){
        icon.src = "images/sun.png";        
    } else {
        icon.src = "images/moon.png"
    }
}

