//Historia
video=document.querySelector('video');
playBoton = document.getElementById("play");
pauseBoton= document.getElementById("pause");

playBoton.addEventListener('click',()=>{
    video.play()
});
pauseBoton.addEventListener('click',()=>{
    video.pause();
});
