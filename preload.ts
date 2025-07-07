import { contextBridge, ipcRenderer } from 'electron';
//const mqtt = require('mqtt');

contextBridge.exposeInMainWorld('electronAPI', {
  openFile: (): Promise<string | null> => ipcRenderer.invoke('dialog:openFile'),
});