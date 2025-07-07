import { ipcMain } from 'electron';
import { handleOpenFileDialog } from './modules/videoPlayer';
export function registerIpcHandlers() {
    ipcMain.handle('dialog:openFile', handleOpenFileDialog);
}
