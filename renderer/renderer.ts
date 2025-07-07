const screenEl = document.getElementById('screen') as HTMLElement;
const videoEl = document.getElementById('video') as HTMLVideoElement;
const promptEl = document.getElementById('prompt') as HTMLElement;

let selecting = false;

export {};

declare global {
  interface Window {
    electronAPI: {
      openFile: () => Promise<string | null>;
    };
  }
}

async function handleScreenClick(): Promise<void> {
  if (selecting || !videoEl.paused) return;
  selecting = true;
  const filePath: string | null = await window.electronAPI.openFile();
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

export function myFunction() { /* ... */ }