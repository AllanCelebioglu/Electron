import { BrowserWindow } from 'electron';
import * as path from 'path';
export function createMainWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, '../../../preload.js'),
            nodeIntegration: false,
            contextIsolation: true
        }
    });
    win.loadFile(path.join(__dirname, '../../../renderer/index.html'));
    win.webContents.openDevTools();
}
