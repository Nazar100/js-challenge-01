window.addEventListener("keydown", playSound);

function playSound(e) {
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  const key = document.querySelector(`.key[data-key='${e.keyCode}']`);

  //   console.log(audio);
  if (!audio) {
    return;
  }
  audio.currentTime = 0;
  audio.play();

  key.classList.add("active");

  setTimeout(() => {
    key.classList.remove("active");
  }, 300);
}
