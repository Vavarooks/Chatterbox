const mongoose = require('mongoose');

const ChatSchema  = new mongoose.Schema({
    message:{
        type: String,
        required: [true, "Message required!"],
        required: [3, "Must be 3 characters or more!"]
    },
    image:{
        type: String,
        required: [false, "Empty"]
    }
})

const Chat = mongoose.model("Chat", ChatSchema);

module.exports = Chat;