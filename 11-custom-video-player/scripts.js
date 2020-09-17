const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

function togglePlay() {
    video[video.paused ? 'play' : 'pause']();
};

function updateIcon() {
    toggle.textContent = this.paused ? '►' : '❚ ❚';
};

function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
};

function handleRangeUpdate() {
    video[this.name] = this.value;
};

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
};

function scrub(e) {
    video.currentTime = (e.offsetX / progress.offsetWidth) * video.duration;

}


video.addEventListener('click', togglePlay);
video.addEventListener('play', updateIcon);
video.addEventListener('pause', updateIcon);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(btn => btn.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
