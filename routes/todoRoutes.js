const express = require("express");
const router = express.Router();
const { newTodo, updateTodo, getAllTodos, getOneTodo, deleteTodo } = require('../controller/todoController');

router.post('/create-todo', newTodo);
router.patch('/update-todos/:id', updateTodo);
router.get('/get-all-todos', getAllTodos);
router.get('/get-one-todo/:id', getOneTodo);
router.delete('/delete-todos/:id', deleteTodo);

module.exports = router;