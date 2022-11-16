const mongoose = require('mongoose');

const ChatSchema  = new mongoose.Schema({
    message:{
        type: String,
        required: [true, "Message required!"],
        required: [3, "Must be 3 characters or more!"]
    },
    title:{
        type: String,
        required: [true, "Title required!"],
        required: [3, "Must be 3 characters or more!"]
    },
    description:{
        type: String,
        required: [true, "Description required!"],
        required: [3, "Must be 3 characters or more!"]
    },
    image:{
        type: String,
        required: [false, "Empty"]
    },
    comment:{
        type:[String],
        required: [true, "Enter in something!"],
        required: [3, "Must have more than 3 characters!"]
    }
})

const Chat = mongoose.model("Chat", ChatSchema);

module.exports = Chat;