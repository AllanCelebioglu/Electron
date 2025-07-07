import { app } from 'electron';
import { createMainWindow } from './src/config/main/window';
import { registerIpcHandlers } from './src/config/main/ipc';

app.whenReady().then(() => {
  createMainWindow();
  registerIpcHandlers();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
}); 