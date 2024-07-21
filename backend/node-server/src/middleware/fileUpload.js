const { mkdir } = require('node:fs/promises');
const { join, extname } = require('node:path');
const { stat } = require('node:fs');

const multer = require('multer');
const { v4: uuidv4 } = require('uuid');

async function makeDirectoryIfNotExist(projectFolder) {
  // create directory auto if not exist
  const dirCreation = await mkdir(projectFolder, { recursive: false });
  return dirCreation;
}

function saveTo(directory) {
  //   console.log('eee: ', __dirname);
  const projectFolder = join('media', directory);
  stat(projectFolder, (err, stats) => {
    if (!stats.isDirectory())
      makeDirectoryIfNotExist(projectFolder).catch(console.error);
  });

  return multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, projectFolder);
    },
    filename: (req, file, cb) => {
      cb(null, uuidv4() + extname(file.originalname)); //+ file.originalname
    },
  });
}

function uploadFile(path, nameAttribute) {
  /*
    path -> storage path
    nameAttribute -> name in HTML form field
  */
  const storage = saveTo(path);
  return multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 5 }, // Limit file size to 0.5MB (optional)
    fileFilter: (req, file, cb) => {
      const allowedTypes = [
        'image/jpeg',
        'image/png',
        'image/jpg',
        'image/webp',
      ];
      if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(
          null,
          false,
          new Error(
            'Only images of type .jpeg, .png, .jpg and .webp are allowed!'
          )
        );
      }
    },
  }).single(nameAttribute);
}

module.exports = uploadFile;
