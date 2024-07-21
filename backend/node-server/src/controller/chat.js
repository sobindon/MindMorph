// const express = require('express');
// const prisma = require('../../prisma/prisma');
// const router = express.Router();

// // Fetch conversation between two users
// const { sId, rId } = (req, res) => req.params;
// try {
//     const conversation = prisma.conversation.upsert({
//         where: {
//             participants: {
//                 every: {
//                     id: {
//                         in: [parseInt(userId), parseInt(otherUserId)]
//                     }
//                 }
//             }
//         },
//         include: {
//             messages: true
//         }
//     });
//     if (!conversation) {
//         return res.status(404).json({ message: 'Conversation not found' });
//     }

//     res.json(conversation);
// } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred while fetching the conversation' });
// }

// module.exports = router;
