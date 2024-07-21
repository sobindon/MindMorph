const prisma = require("../../../prisma/prisma");
const courseDomainSchema = require("../../validation/course/courseDomain");

const getCourseDomain = async (req, res) => {
    const id = parseInt(req.params.id)
    try {
        const courseDomain = await prisma.courseDomain.findUnique({
            where: {
                id: id
            }
        })
        return res.status(202).json({ message: "found courseDomain", courseDomain })
    } catch (error) {
        res.status(400).json({ message: "error occured while getting course" })
    }
}

//create courseDomain
const createCourseDomain = async (req, res) => {
    const { error, value } = courseDomainSchema.courseDomain.validate({
        ...req.body
    })
    // If Joi validation fails, send an error response
    if (error) return res.status(400).json({ message: error.details[0].message });

    try {
        const courseDomain = await prisma.courseDomain.create({
            data: value
        })
        res.status(201).json({
            message: "Course Category Created",
            data: courseDomain
        });

    } catch (error) {
        console.error(error);
        return res.status(400).json({ message: "Error Occured while creating courseDomain", error: error });
    }
}

//update courseDomain
const updateCourseDomain = async (req, res) => {
    const { error, value } = courseDomainSchema.courseDomain.validate({
        ...req.body,

    })
    const id = parseInt(req.params.id)
    // If Joi validation fails, send an error response
    if (error) return res.status(400).json({ message: error.details[0].message });

    try {
        const updatedCourseDomain = await prisma.courseDomain.update({
            where: {
                id: id
            },
            data: value
        })
        console.error(updatedCourseDomain);
        res.status(201).json({ message: "courseDomain Updated" });
    } catch (e) {
        console.error(e);
        return res.status(400).json({ message: "Error Occured while updating courseDomain" });
    }

}

//delete courseDomain
const deleteCourseDomain = async (req, res) => {
    // const { error, value } = courseDomainSchema.courseDomain.validate({
    //     ...req.body,

    // })
    const id = parseInt(req.params.id)
    // // If Joi validation fails, send an error response
    // if (error) return res.status(400).json({ message: error.details[0].message });

    try {
        const existingCourseDomain = await prisma.courseDomain.findUnique({
            where: {
                id: id
            }
        })

        if (existingCourseDomain) {
            await prisma.courseDomain.delete({
                where: {
                    id: id
                },

            })
            res.status(202).json({ message: "courseDomain Deleted" });
        } else {
            res.status(404).json({ message: "courseDomain not found" });
        }
    } catch (e) {
        console.error(e);
        return res.status(204).json({ message: "Error Occured while deleting courseDomain", error: e });
    }
}



module.exports = { getCourseDomain, createCourseDomain, updateCourseDomain, deleteCourseDomain }