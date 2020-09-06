function playAudio(number) {
    const key = document.querySelector(`div[data-key="${number}"]`)
    const audio = document.querySelector(`audio[data-key="${number}"]`)
    if (audio) {
        audio.currentTime = 0;
        audio.play();
        key.classList.remove('playing')
        key.classList.add('playing')
    } else {
        return;
    }

}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', (e) => { playAudio(e.keyCode) })

const pads = Array.from(document.getElementsByClassName('key'));
pads.forEach(pad => {
    pad.onclick = (e) => { playAudio(+e.target.getAttribute('data-key')); }
});