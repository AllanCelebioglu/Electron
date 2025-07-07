import { ipcMain } from 'electron';
import { handleOpenFileDialog } from './modules/videoPlayer';

export function registerIpcHandlers(): void {
  ipcMain.handle('dialog:openFile', handleOpenFileDialog);
} 