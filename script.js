// Select necessary elements
const video = document.getElementById('video');
const playPauseButton = document.getElementById('player__button');
const rewindButton = document.getElementById('rewind');
const forwardButton = document.getElementById('forward');
const volumeControl = document.getElementById('volume');
const playbackSpeedControl = document.getElementById('playbackSpeed');
const progressBar = document.getElementById('progress__filled');

// Toggle play and pause
playPauseButton.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playPauseButton.textContent = '❚ ❚'; // Change to pause symbol
    } else {
        video.pause();
        playPauseButton.textContent = '►'; // Change to play symbol
    }
});

// Rewind 10 seconds
rewindButton.addEventListener('click', () => {
    video.currentTime -= 10;
});

// Skip forward 25 seconds
forwardButton.addEventListener('click', () => {
    video.currentTime += 25;
});

// Set volume
volumeControl.addEventListener('input', (e) => {
    video.volume = e.target.value;
});

// Set playback speed
playbackSpeedControl.addEventListener('input', (e) => {
    video.playbackRate = e.target.value;
});

// Update progress bar as video plays
video.addEventListener('timeupdate', () => {
    const progress = (video.currentTime / video.duration) * 100;
    progressBar.style.width = `${progress}%`;
});
