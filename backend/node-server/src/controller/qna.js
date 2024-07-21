const prisma = require('../../prisma/prisma')
const qnaSchema = require('../validation/qna')

const createQna = async (req, res) => {
    const { error, value } = qnaSchema.qna.validate({
        ...req.body
    });
    // If Joi validation fails, send an error response
    if (error) return res.status(400).json({ message: error.details[0].message });

    try {
        //Create a Question
        await prisma.qnA.create({
            data: value
        });
        return res.status(201).json(result);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

const createQnaReply = async (request, response) => {
    const { error, value } = qnaSchema.qnaReply.validate({
        ...request.body
    })
    // If Joi validation fails, send an error response
    if (error) return response.status(400).json({ message: error.details[0].message });

    try {
        const id = parseInt(request.params.id)
        // It's a reply, update responseCount for the parent question
        result = await prisma.$transaction([
            prisma.qnAReply.create({
                data: {
                    userId: value.userId,
                    description: value.description,
                    idQnA: id
                }
            }),
            prisma.qnA.update({
                where: { id },
                data: { responseCount: { increment: 1 } }
            })
        ]);
    } catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}

const deleteQna = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        // Check if the QnA entry exists
        const qnaEntry = await prisma.qnA.findUnique({ where: { id } });
        if (!qnaEntry) {
            return res.status(404).json({ message: 'QnA entry not found' });
        } else {
            await prisma.$transaction([
                //Delete Question(id) from Qna
                prisma.qnA.delete({
                    where: {
                        id: id
                    }
                }),
                //Delete Answers of Question(id)
                prisma.qnAReply.deleteMany({
                    where: {
                        idQnA: id
                    }
                })
            ])
        }
        return res.status(200).json({ message: 'QnA entry deleted successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

const deleteQnaReply = async (request, response) => {
    const id = parseInt(request.params.id)
    try {
        await prisma.qnAReply.delete({ where: { id } })
        return response.status(200).json({ message: 'QnA Reply deleted successfully' });
    } catch (error) {
        
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
module.exports = { createQna, createQnaReply, deleteQna, deleteQnaReply }

