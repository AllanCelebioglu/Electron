import { dialog } from 'electron';

export async function handleOpenFileDialog(): Promise<string | null> {
  try {
    const result = await dialog.showOpenDialog({
      properties: ['openFile'],
      filters: [
        { name: 'Videos', extensions: ['mp4', 'mkv', 'avi', 'mov', 'webm'] }
      ]
    });
    if (result.canceled || result.filePaths.length === 0) {
      return null;
    } else {
      return result.filePaths[0];
    }
  } catch (error) {
    console.error('Error opening file dialog:', error);
    return null;
  }
} 