const btnEl = document.querySelector(".btn");
const close = document.querySelector(".close-icon");
const trailerContainer = document.querySelector(".trailer-container");
const video = document.querySelector("video");
btnEl.addEventListener("click", ()=>{
    trailerContainer.classList.remove("active");
});

close.addEventListener("click", ()=>{
    trailerContainer.classList.add("active");
    video.pause();
    video.currentTime = 0;
});