const { response } = require('express');
const prisma = require('../../../prisma/prisma')
const courseReviewSchema = require('../../validation/course/courseReview')

const getCourseReviews = async (request, response) => {
    const courseId = parseInt(request.params.id);
    try {
        const results = await prisma.courseReview.findMany({ where: { courseId } })
        return response.status(200).json({ results })
    } catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}

const createCourseReview = async (request, response) => {
    // Check if id is provided, if not, it's a new review
    const { error, value } = courseReviewSchema.courseReview.validate({
        ...request.body
    });
    // If Joi validation fails, send an error response
    if (error) return response.status(400).json({ message: error.details[0].message });
    try {
        await prisma.courseReview.create({
            data: value
        });
        return response.status(200).json({ message: "New Review added" });
    } catch (error) {
        console.log("error creating review");
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}

const courseReviewReply = async (request, response) => {
    const { error, value } = courseReviewSchema.courseReviewReply.validate({
        ...request.body
    });
    // If Joi validation fails for reply, send an error response
    if (error) return response.status(400).json({ message: error.details[0].message });

    const id = parseInt(request.params.id);
    try {
        // Set idCourseReview to the parent review's id
        const result = await prisma.courseReviewReply.create({
            data: {
                userId: value.userId,
                description: value.description,
                idCourseReview: id
            }
        });
        return response.status(201).json({ message: result });
    } catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}

const deleteCourseReview = async (req, res) => {
    const id = parseInt(request.params.id);
    try {
        // Check if the review entry exists
        const reviewEntry = await prisma.courseReview.findUnique({ where: { id } });

        if (!reviewEntry) {
            return response.status(404).json({ message: 'Review entry not found' });
        }
        else {
            await prisma.$transaction([
                // Delete 
                prisma.courseReview.delete({
                    where: id
                }),
                prisma.courseReviewReply.deleteMany({
                    where: {
                        idCourseReview: id
                    }
                })
            ])
        }
        return response.status(200).json({ message: 'Review Entry deleted successfully' });
    } catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
};

const deleteCourseReviewReply = async (request, response) => {
    const id = parseInt(request.params.id);

    try {
        await prisma.courseReviewReply.delete({
            where: {
                id: id
            }
        })
        return response.status(200).json({ message: 'Review deleted successfully' });
    } catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
module.exports = { getCourseReviews, createCourseReview, courseReviewReply, deleteCourseReview, deleteCourseReviewReply }