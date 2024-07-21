const express = require('express')
const router = express.Router()

// Route for receiving messages
router.get('/chat', (req, res) => {


    // Your logic to retrieve messages for the user from the database goes here
    res.render('chat.ejs')
});


// Route for sending messages
router.post('/chat', (req, res) => {
    const { senderId, receiverId, message } = req.body;

    const roomId = [senderId, receiverId].sort().join()

    // Your logic to save the message to the database goes here

    // Emit the message to the receiver's socket
    io.to(roomId).emit('roomId', { senderId, message });

    res.json({ success: true });
});



module.exports = router