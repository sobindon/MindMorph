const prisma = require('../../../prisma/prisma')
const validator = require('../../validation/assignment.student')

const submitAssignment = async(req,res)=>{
    const {error,value} = validator.assignmentSubmition.validate({...req.body})
    // If Joi validation fails, send an error response
    if (error) return res.status(400).json({ message: error.details[0].message });

    try {
        const existingAssignment = await prisma.assignmentSubmission.findFirst({
            where:{
                assignmentId:value.assignmentId,
                studentId: value.studentId,
            }
        })
        if(!existingAssignment){
            const assignment = await prisma.assignmentSubmission.create({
                data: {
                    assignmentId: value.assignmentId,
                    studentId: value.studentId,
                    attachment: value.attachment,
                    comment: value.comment
                }
            })
            if (assignment) {
                return res.status(200).json({ message: "Assignment Submitted" });
            }
        }else{
            return res.status(200).json({ message: "Assignment Already Submitted" });
        }
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
    
}

const getAllAssignments = async(req,res)=>{
    const enrolledCourseid = parseInt(req.params.enrolledCourseid)

    try{
        const assignment = await prisma.assignment.findMany({
            where:{
                courseId:enrolledCourseid
            }
        })
        if(assignment){
            return res.status(200).json({ "Your assignments are:": assignment })
        }
    }catch(error){
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

const updateAssignment = async (req, res) => {
    const { error, value } = validator.assignmentSubmition.validate({ ...req.body });
    // If Joi validation fails, send an error response
    if (error) return res.status(400).json({ message: error.details[0].message });

    try {
        const getassignment = await prisma.assignmentSubmission.findFirst({
            where: {
                assignmentId: value.assignmentId,
                studentId: value.studentId
            }
        });

        if (getassignment) {
            const assignment = await prisma.assignmentSubmission.update({
                where: {
                    id: getassignment.id // Use the unique identifier
                },
                data: {
                    attachment: value.attachment,
                    comment: value.comment
                }
            });

            if (assignment) {
                return res.status(200).json({ message: "Assignment Updated" });
            }
        } else {
            return res.status(404).json({ message: "Assignment not found" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}


module.exports = {submitAssignment,getAllAssignments,updateAssignment}