const fs = require('fs');

function deleteFile(filePath) {
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error('Error deleting file:');
      throw err;
    }
    console.log('File deleted successfully!');
  });
}

module.exports = deleteFile;
