import express from 'express';
const todoRouter = express.Router();
import upload from '../config/multer.js';
import {newTodo, newTodoWithImage, updateTodo, getAllTodos, getOneTodo, deleteTodo} from '../controller/todoController.js';

todoRouter.post('/create-todo', newTodo);
todoRouter.post('/create-todo-with-image', upload.single('image'), newTodoWithImage);
todoRouter.patch('/update-todos/:id', updateTodo);
todoRouter.get('/get-all-todos', getAllTodos);
todoRouter.get('/get-one-todo/:id', getOneTodo);
todoRouter.delete('/delete-todos/:id', deleteTodo);


export default todoRouter;