"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleOpenFileDialog = handleOpenFileDialog;
const electron_1 = require("electron");
async function handleOpenFileDialog() {
    try {
        const result = await electron_1.dialog.showOpenDialog({
            properties: ['openFile'],
            filters: [
                { name: 'Videos', extensions: ['mp4', 'mkv', 'avi', 'mov', 'webm'] }
            ]
        });
        if (result.canceled || result.filePaths.length === 0) {
            return null;
        }
        else {
            return result.filePaths[0];
        }
    }
    catch (error) {
        console.error('Error opening file dialog:', error);
        return null;
    }
}
