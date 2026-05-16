const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require('./routes/todoRoutes');

const app = express();
const port = 7000;
app.use(cors());
app.use(express.json());
app.use('/todo', router);

const liveUrl = "mongodb://morrison:morrison001@ac-acwpk9y-shard-00-00.xsnrajc.mongodb.net:27017,ac-acwpk9y-shard-00-01.xsnrajc.mongodb.net:27017,ac-acwpk9y-shard-00-02.xsnrajc.mongodb.net:27017/NOTEDB?ssl=true&replicaSet=atlas-kidg83-shard-0&authSource=admin&appName=Cluster0"


mongoose.connect(liveUrl)
.then(() => console.log("MongoDb Connected"))
.catch((err) => console.error("Connection Error: ", err));

app.get('/', (req, res) => {
    res.send("Welcome to My Note App");
});



app.listen(port, () => {
    console.log(`Server is running on localhost:${port}`);
});