 function removeTransition(e) {
    this.classList.remove('playing');
  }
  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    audio.currentTime = 0;  //"overwrites" sound on multiple keydowns
    audio.play();
    key.classList.add('playing'); //transition
  }
  window.addEventListener('keydown', playSound);
  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition))
