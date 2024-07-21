const {saveMessage} = require('./chatService')
const jwt = require('jsonwebtoken');
const {conversationSchema} = require('../../validation/chat')

function initializeSocket(io) {
    let activeUsers = {};

    io.on("connection", async (socket) => {
        // console.log("Socket connected");

        // Authenticate socket connection using JWT token
        const token = socket.handshake.query.token;
        if (!token) {
            io.to(socket.id).emit("receive-message", "Token not provided");
            return socket.disconnect();
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
            const userId = decoded.userId;
            socket.userId = userId;


            // Add user to active users
            activeUsers[userId] = socket.id;
            console.log('Active Users: ', activeUsers);

            // Send all active users to the new user
            io.emit("active-users", Object.keys(activeUsers));
        } catch (error) {
            console.log("Authentication error: Invalid token");
            socket.disconnect();
        }

        socket.on("", () => {
            io.emit("active-users", Object.keys(activeUsers))
        })

        // Handle socket disconnection
        socket.on("disconnect", () => {
            if (socket.userId && activeUsers[socket.userId]) {
                delete activeUsers[socket.userId];
                console.log(`User ${socket.userId} disconnected`);
                io.emit("active-users", Object.keys(activeUsers)); // Update active users list
            }
        });

        // Handle sending messages
        socket.on("send-message", async (data) => {
            // Validate Conversation
            const { error, value } = conversationSchema.validate(JSON.parse(data));

            // If Joi validation fails, send an error response
            if (error) 
            return io.emit("error-on-send-message", error.details[0].message); 
            const senderId = socket.userId;


            // console.log("Message sent from userId: ", senderId, '  to:', receiverId, '  ', message);
            const message = value.message

            // Save `value` to db
            const response = saveMessage(senderId, value.receiverId, message);


            const receiverSocketId = activeUsers[value.receiverId];
            // Check if receiver is active
            if (receiverSocketId) {
                io.to(receiverSocketId).emit("receive-message", { senderId, message });
            } else {
                console.log(`User ${value.receiverId} is not active`);
                // Optionally handle if receiver is not active
            }


            













        });
    });
}

module.exports = initializeSocket;
