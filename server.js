const express = require('express');
const cors = require('cors') // This is new
const app = express();

require("./server/config/config.mongo")

app.use(express.json(), express.urlencoded({extended:true}));
app.use(cors()) // This is new
require('./server/routes/manage.route')(app);


app.listen(9001, () => {
    console.log("Listening at Port 9001")
})