const Chat = require('../controllers/chat.controller');

module.exports = (app) => {
    app.get('/api/chatter', Chat.findAllChats);
    app.get('/api/chatter/add', Chat.findAllChats);
    app.get('/api/chatter/:id', Chat.findOneChatById);
    app.post('/api/chatter/create', Chat.createNewChat);
    app.delete('/api/chatter/:id', Chat.findOneChatAndDelete);
    app.put('/api/chatter/update/:id', Chat.findChatAndUpdate);
}