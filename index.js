import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/database.js';
import todoRouter from './routes/todoRoutes.js';
import userRouter from './routes/userRoutes.js';
dotenv.config();

const app = express();
const port = process.env.PORT
app.use(express.static('public'));
app.use(cors());
app.use(express.json());
app.use('/todo', todoRouter);
app.use('/user', userRouter);

connectDB();

app.get('/', (req, res) => {
    res.send("Welcome to My Note App");
});



app.listen(port, () => {
    console.log(`Server is running on localhost:${port}`);
});