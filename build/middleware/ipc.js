"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerIpcHandlers = registerIpcHandlers;
const electron_1 = require("electron");
const videoPlayer_1 = require("../modules/videoPlayer");
function registerIpcHandlers() {
    electron_1.ipcMain.handle('dialog:openFile', videoPlayer_1.handleOpenFileDialog);
}
