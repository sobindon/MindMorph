const prisma = require("../../../prisma/prisma");
const socialSchema = require("../../validation/socialHandle");

const createSocialHandles = async (req, res) => {
    const { error, value } = socialSchema.socialHandleSchema.validate({
        ...req.body,
    });
    console.log(value);
    // If Joi validation fails, send an error response
    if (error) return res.status(400).json({ message: error.details[0].message });

    try {

        // Social handle doesn't exist, create a new one
        await prisma.socialHandle.create({
            data: value
        });
        return res.status(201).json({ message: "created" });
    }
    catch (e) {
        console.error(e);
        return res.status(400).json({ message: "Error occurred while creating", error: e });
    }
};

const updateSocialHandles = async (req, res) => {
    const { error, value } = socialSchema.socialHandleSchema.validate({
        ...req.body
    });
    console.log(value);
    // If Joi validation fails, send an error response
    if (error) return res.status(400).json({ message: error.details[0].message });

    try {
        const socialHandleUpdate = await prisma.socialHandle.update({
            where: {
                userId: value.userId
            },
            data: value

        })

        return res.status(202).json({ message: "updated" });

    }
    catch (e) {
        console.error(e);
        return res.status(400).json({ message: "Error occurred while updating", error: e });
    }
};

const deleteSocialHandles = async (req, res) => {
    const { error, value } = socialSchema.socialHandleSchema.validate({
        ...req.body
    });
    console.log(value);
    // If Joi validation fails, send an error response
    if (error) return res.status(400).json({ message: error.details[0].message });

    try {

        await prisma.socialHandle.delete({
            where: {
                userId: value.userId
            },

        });
        return res.status(202).json({ message: "deleted", socialHandle: value });
    }
    catch (e) {
        console.error(e);
        return res.status(204).json({ message: "Error occurred while deleting", error: e });
    }
};


module.exports = { createSocialHandles, updateSocialHandles, deleteSocialHandles };
