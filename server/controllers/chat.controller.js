const Chat = require('../models/chat.model');

module.exports.findAllChats = (req, res) =>{
    Chat.find()
        .then(findAll => res.json(findAll))
        .catch(err => res.status(400).json(err))
}

module.exports.findOneChatById = (req,res) =>{
    Chat.findOne({_id: req.params.id})
        .then(oneChat => res.json(oneChat))
        .catch(err => res.json({error: err}))
}

module.exports.createNewChat = (req,res) =>{
    Chat.create(req.body)
        .then(newChat => {
            // res.json(newChat),
            Chat.findOne({_id})
        })
        .catch(err => res.status(400).json(err))
}

module.exports.findChatAndUpdateComment = (req,res) =>{
    console.log(req.body);
    Chat.findOneAndUpdateComment({_id: req.params.id}, req.body, {new:true, runValidators:true})
        .then(updateOneComment => res.json(updateOneComment))
        .catch(err => res.status(400).json(err))
}

module.exports.findOneChatAndDelete = (req,res) =>{
    Chat.deleteOne({_id: req.params.id})
        .then(deleteOneMessage => res.json(deleteOneMessage))
        .catch(err => res.json({error: err}))
}

module.exports.findChatAndUpdate = (req,res) =>{
    console.log(req.body);
    Chat.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
        .then(updateOneMessage => res.json(updateOneMessage))
        .catch(err => res.status(400).json(err))
}