const express = require('express');
const router = express.Router();
const {
  getAllCourse,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
} = require('../../controller/course/course');
const upload = require('../../middleware/fileUpload');

const {
  getLatestCourse,
  getTrendingCourse,
} = require('../../controller/course/courseChoice');

// Course Choice
router.get('/latest', getLatestCourse);
router.get('/trending', getTrendingCourse);

router.get('', getAllCourse);
router.get('/:id', getCourse);
router.post('/', upload('courseThumbnail', 'thumbnail'), createCourse);
router.patch('/:id', upload('courseThumbnail', 'thumbnail'), updateCourse);
router.delete('/:id', deleteCourse);

module.exports = router;
