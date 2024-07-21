const prisma = require('../../../prisma/prisma');
const courseSchema = require('../../validation/course/course');

// Get All Courses
const getAllCourse = async (req, res) => {
  const courses = await prisma.course.findMany();

  for (let index = 0; index < courses.length; index++) {
    const course = courses[index];
    course.syllabus = JSON.parse(course.syllabus);
  }
  res.json(courses);
};

// Get Course by Id
const getCourse = async (req, res) => {
  const course = await prisma.course.findFirst({
    where: {
      id: parseInt(req.params.id),
    },
    include: {
      author: {
        select: {
          fullName: true,
        },
      },
    },
  });

  res.json({ ...course, syllabus: JSON.parse(course.syllabus) });
};

// Create a new course
const createCourse = async (req, res) => {
  const { error, value } = courseSchema.course.validate({
    ...req.body,
    thumbnail: req.file.path,
  });

  // If Joi validation fails, send an error response
  if (error) return res.status(400).json({ message: error.details[0].message });

  try {
    await prisma.course.create({
      data: value,
    });
    // Send a success response with the created user object
    res.status(201).json({
      message: 'Course Created',
      data: { ...value, syllabus: JSON.parse(value.syllabus) },
    });
  } catch (e) {
    console.error(e);
    return res.status(400).json({ message: 'Error Occured', error: e });
  }
};

// Update an existing course
const updateCourse = async (req, res) => {
  const { error, value } = courseSchema.updateCourse.validate({
    ...req.body,
    id: req.params.id,
  });

  // If Joi validation fails, send an error response
  if (error) return res.status(400).json({ message: error.details[0].message });

  try {
    await prisma.course.update({
      where: {
        id: value.id,
      },
      data: value,
    });
    // Send a success response with the created user object
    res.status(201).json({
      message: 'Course Updated',
      data: value,
    });
  } catch (e) {
    console.error(e);
    return res
      .status(400)
      .json({ message: 'Error Occured while updating course', error: e });
  }
};

// delete an existing course
const deleteCourse = async (req, res) => {
  const { error, value } = courseSchema.deleteCourse.validate({
    id: req.params.id,
  });

  // If Joi validation fails, send an error response
  if (error) return res.status(400).json({ message: error.details[0].message });

  // Check if a course with the  id exists
  const course = await prisma.course.findFirst({
    where: {
      id: value.id,
    },
  });
  if (!course)
    return res.status(204).json({ message: "Course doesn't exists" });

  try {
    await prisma.course.delete({
      where: value,
    });
    // Send a delete response
    res.status(202).json({
      message: 'Course Deleted',
    });
  } catch (e) {
    console.error(e);
    return res
      .status(400)
      .json({ message: 'Error Occured while deleting course', error: e });
  }
};

module.exports = {
  getAllCourse,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
};
