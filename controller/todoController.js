import Todomodel from '../model/todoModel.js';


const newTodo = async (req, res) =>{
    try {
        const {title, details} =  req.body
        const newTodo =  await Todomodel.create({title , details});
        res.status(201).json({ message: "Task created successfully", data: newTodo });
    } catch (error) {
        res.status(500).json({ message: error.message, error : error.message });
  } 
}

const newTodoWithImage = async (req, res) => {
    try {
        const {title, details} =  req.body;
        const image = req.file?.path;
        const newTodo =  await Todomodel.create({title , details, image});
        res.status(201).json({ message: "Task created successfully", data: newTodo });
    } catch (error) {
        res.status(500).json({ message: error.message, error : error.message });
  }
}

const updateTodo = async (req, res) => {
    try {
        const {id} = req.params; 
        const updatedTodo = await Todomodel.findByIdAndUpdate(id, {completed : true}, {new : true});
        res.status(200).json({message : "Todo updated", data : updatedTodo});
    } catch (error) {
        res.status(500).json({ message: error.message, error : error.message });
    }
};  

const getAllTodos = async (req, res) => {
    try {
        const allTodos = await Todomodel.find();
        res.status(200).json({message : "All todos retrieved", data : allTodos});
    } catch (error) {
        res.status(500).json({ message: error.message, error : error.message });
    }
}

const getOneTodo = async (req, res) => {
    try {
        const {id} = req.params;
        const oneTodo = await Todomodel.findById(id);
        res.status(200).json({message : "Todo retrieved", data : oneTodo});
    } catch (error) {
        res.status(500).json({ message: error.message, error : error.message });
    }
}

const deleteTodo = async (req, res) => {
    try {
        const {id} = req.params;
        await Todomodel.findByIdAndDelete(id);
        res.status(200).json({message : "Todo deleted"});
    } catch (error) {
        res.status(500).json({ message: error.message, error : error.message });
    }
}


export {newTodo, newTodoWithImage, updateTodo, getAllTodos, getOneTodo, deleteTodo}