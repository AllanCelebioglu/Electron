const { contextBridge, ipcRenderer } = require('electron');
const mqtt = require('mqtt');

contextBridge.exposeInMainWorld('electronAPI', {
  openFile: () => ipcRenderer.invoke('dialog:openFile'),
  mqtt: {
    connect: (url) => mqtt.connect(url),
    publish: (topic, message) => mqtt.publish(topic, message),
    subscribe: (topic) => mqtt.subscribe(topic),
    onMessage: (callback) => mqtt.on('message', callback),
    onConnect: (callback) => mqtt.on('connect', callback),
    onDisconnect: (callback) => mqtt.on('disconnect', callback),
    onError: (callback) => mqtt.on('error', callback),
  }
});