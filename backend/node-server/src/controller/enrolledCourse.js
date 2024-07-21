const prisma = require('../../prisma/prisma')
const enrollSchema = require('../validation/enrolledCourse')

const getEnrolledCourses = async (request, response) => {
    const userId = parseInt(request.params.id)
    try {
        items = await prisma.enrolledCourse.findMany({
            where: {
                userId: userId
            }
        })
        return response.status(200).json({ items })
    } catch (error) {
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}

const enrollCourse = async (request, response) => {
    const { error, value } = enrollSchema.enrolledCourse.validate({
        ...request.body
    })
    // If Joi validation fails, send an error response
    if (error) return res.status(400).json({ message: error.details[0].message });

    try {
        const isEnrolled = await prisma.enrolledCourse.findFirst({
            where: {
                userId: value.userId,
                courseId: value.courseId
            }
        })
        if (!isEnrolled) {
            await prisma.enrolledCourse.create({
                data: value
            })
        } else {
            return response.status(200).json({ message: "Already enrolled" })
        }
        return response.status(200).json({ message: "Successfully enrolled" })
    } catch (error) {
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}

const unenroll = async (request, response) => {
    const id = parseInt(request.params.id)
    try {
        await prisma.enrolledCourse.delete({
            where: {
                id: id
            }
        })
        return response.status(200).json({ message: "Un-Enrolled successfully" })
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

module.exports = { getEnrolledCourses, enrollCourse, unenroll }