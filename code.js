document.getElementById("playButtonText").innerHTML = "Reproducir";
var play = false;

function playFunction(){
  if (document.getElementById("playButtonText").innerHTML === "Reproducir") {
    loop();
    play = true;
    document.getElementById("playButtonText").innerHTML = "Detener";
  }else {
    play = false;
    document.getElementById("playButtonText").innerHTML = "Reproducir";
  }
}


function setKey(){
  var snd = new Audio("notes/c.wav");
  snd.volume = Math.random() * (0.7 - 0.3) + 0.3;
  return snd;
}

function myFunction() {
  snd.play();
}

var random_time = 1000;

function loop () {
   setTimeout(function () {
      if (play) {
        loop();
      }
      snd = setKey();
      snd.play();
      random_time = Math.random() * (2000 - 1000) + 1000;
      console.log(random_time);
      console.log(snd.volume);

   }, random_time)
}
// loop();
