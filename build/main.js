"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const window_1 = __importDefault(require("./utils/window"));
const ipc_1 = require("./middleware/ipc");
electron_1.app.whenReady().then(() => {
    (0, window_1.default)();
    (0, ipc_1.registerIpcHandlers)();
});
electron_1.app.on('window-all-closed', () => {
    if (process.platform !== 'darwin')
        electron_1.app.quit();
});
