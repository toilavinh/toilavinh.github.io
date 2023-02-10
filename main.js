var recommended = document.getElementById('recommended')
var video_mp4 = document.getElementById('box-video')

recommended.addEventListener("click", event=> {
    recommended.style.display = "none"
    video_mp4.style.display = "block";
})


// ==== Dark mode ====
var change_color = document.querySelector(".control-color");
var bg = document.querySelector(".wrapper")
var link = document.querySelectorAll(".link")

change_color.addEventListener("click", event=> {
    bg.classList.toggle("bg-red");
    change_color.classList.toggle("bg-color");

    for (var i = 0; i<link.length; i++) {
        link[i].classList.toggle("bg-red");
    }

    
})