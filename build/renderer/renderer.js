"use strict";
const screenEl = document.getElementById('screen');
const videoEl = document.getElementById('video');
const promptEl = document.getElementById('prompt');
let selecting = false;
async function handleScreenClick() {
    if (selecting || !videoEl.paused)
        return;
    selecting = true;
    const filePath = await window.electronAPI.openFile();
    if (filePath) {
        videoEl.src = filePath;
        videoEl.style.display = 'block';
        promptEl.style.display = 'none';
        videoEl.play();
    }
    selecting = false;
}
screenEl.addEventListener('click', handleScreenClick);
videoEl.addEventListener('play', () => {
    // Disable prompt and click while playing
    promptEl.style.display = 'none';
});
videoEl.addEventListener('ended', () => {
    // Show prompt and re-enable click when video ends
    videoEl.style.display = 'none';
    promptEl.style.display = 'inline';
});
