const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/chatter',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});