import domtoimage from 'dom-to-image-more';
import { saveAs } from 'file-saver';
export const downloadButton = document.getElementById('downloadButton')

export function downloadScreenshot(elementId, filename) {
  const element = document.getElementById(elementId);

  if (element) {
    domtoimage.toBlob(element)
      .then(blob => {
        saveAs(blob, `${filename}.png`);
      })
      .catch(error => {
        console.error('Failed to capture screenshot:', error);
      });
  } else {
    console.error('Element not found');
  }
}

// Usage example:
// Assuming there's an element with the id 'captureElement' in your HTML
