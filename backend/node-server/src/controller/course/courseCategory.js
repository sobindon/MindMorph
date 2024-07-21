const prisma = require("../../../prisma/prisma");
const courseCategorySchema = require("../../validation/course/courseCategory");

//get courseCategory
const getCourseCategory = async (req, res) => {
    const id = parseInt(req.params.id)
    const getCourseCategory = await prisma.courseCategory.findUnique({
        where: {
            id: id
        }
    })
    if (getCourseCategory) return res.status(200).json({ message: "Found courseCategory", getCourseCategory: getCourseCategory });
}

//create courseCategory
const createCourseCategory = async (req, res) => {
    const { error, value } = courseCategorySchema.validate({
        ...req.body
    })
    // If Joi validation fails, send an error response
    if (error) return res.status(400).json({ message: error.details[0].message });

    try {
        const existingCourseCategory = await prisma.courseCategory.findFirst({
            where: {
                name: value.name,
                courseDomainId: value.courseDomainId
            }
        })
        if (!existingCourseCategory) {
            await prisma.courseCategory.create({
                data: value
            })
            res.status(201).json({ message: "Course Category Created" });
        } else {
            res.status(201).json({ message: "Course Category already exists" });
        }
    } catch (error) {
        return res.status(400).json({ message: "Error Occured while creating courseCategory", error: error });
    }
}
const updateCourseCategory = async (req, res) => {
    const id = parseInt(req.params.id)
    const { error, value } = courseCategorySchema.validate({
        ...req.body
    })
    // If Joi validation fails, send an error response
    if (error) return res.status(400).json({ message: error.details[0].message });
    try {
        await prisma.courseCategory.update({
            where: {
                id: id
            },
            data: value
        })
        res.status(201).json({ message: "Course Category updated" });
    } catch (error) {
        return res.status(400).json({ message: "Error Occured while updating courseDomain", error: error });
    }
}

const deleteCourseCategory = async (req, res) => {
    const id = parseInt(req.params.id)
    try {
        const existingCourseCategory = await prisma.courseCategory.findUnique({
            where: {
                id: id
            }
        })

        if (existingCourseCategory) {
            await prisma.courseCategory.delete({
                where: {
                    id: id
                },

            })
            res.status(202).json({ message: "courseCategory Deleted" });
        } else {
            res.status(404).json({ message: "courseCategory not found" });
        }
    } catch (e) {
        console.error(e);
        return res.status(204).json({ message: "Error Occured while deleting courseCategory", error: e });
    }
}



module.exports = { getCourseCategory, updateCourseCategory, createCourseCategory, deleteCourseCategory }