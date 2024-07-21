const prisma = require('../../../prisma/prisma');

const saveMessage = async (senderId, receiverId, message) => {
  try {
    const senderIdInt = parseInt(senderId);
    const receiverIdInt = parseInt(receiverId);

    // Start the transaction
    const result = await prisma.$transaction(async (prisma) => {
      // Find the conversation
      let conversation = await prisma.conversation.findFirst({
        where: {
          AND: [
            { participants: { some: { id: senderIdInt } } },
            { participants: { some: { id: receiverIdInt } } }
          ]
        },
        include: { messages: true }
      });

      // If no conversation exists, create a new one
      if (!conversation) {
        conversation = await prisma.conversation.create({
          data: {
            participants: {
              connect: [
                { id: senderIdInt },
                { id: receiverIdInt }
              ]
            }
          }
        });
      }

      // Save the message to the database
      const newMessage = await prisma.message.create({
        data: {
          message: message,
          sender: { connect: { id: senderIdInt } },
          receiver: { connect: { id: receiverIdInt } },
          Conversation: { connect: { id: conversation.id } }
        },
        include: {
          sender: true,
          receiver: true,
          Conversation: true
        }
      });

      return newMessage;
    });

    return result;
  } catch (error) {
    console.error("Error saving conversation to database", error);
    throw error; // Re-throw the error to ensure it can be handled by the caller
  }
};

module.exports = { saveMessage };
