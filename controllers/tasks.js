const Task = require('../models/Task')
const {createCustomError} = require('../errors/custom-error')

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({})
    res.status(200).json({ message:"Successfully retrieved all tasks",
      tasks 
    })
  }
  catch(error) {
    return res.status(500).json({
      Error: "internal Server error occoured",
      route: "get/api/v1/task/"
    })
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    console.log(task)
      return res.status(201).json({
        message:"Successfully created task",
        task
      })
      
    
  } catch(error) {
    // console.log(error.message)
    return res.status(500).json({
      Error: "internal Server error occoured",
      route: "put/api/v1/task/"
    })
  }
};

const getTask = async (req, res, next) => {
  try {

    const { id: taskID } = req.params
    const task = await Task.findOne({ _id: taskID })
    if (!task) {
      return res.status(404).json({msg:`No task with id :${taskID}`})
  
    }
    res.status(200).json({ message:"Successfully retrieved task",task })
  } catch(error) {
    return res.status(500).json({
      Error: "Internal Serve error occoured",
      route: "get/api/vi/task/:id"
    })
  }
};

const deleteTask = async (req, res, next) => {
  try{
    const { id: taskID } = req.params
    const task = await Task.findOneAndDelete({ _id: taskID })
    if (!task) {
      return res.status(404).json({msg:`No task with id :${taskID}`})
  
    }
    res.status(200).json({ message:"Successfully deleted task",
      task 
    })
  } catch(error) {
    return res.status(500).json({
      Error: "Internal Serve error occoured",
      route: "delete/api/v1/task/:id"
    })
  }
};

const updateTask = async (req, res, next) => {
  try {
    const { id: taskID } = req.params

    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
    })

    if (!task) {
      return res.status(404).json({msg:`No task with id :${taskID}`})
  
    }

    res.status(200).json({ message:"Task updated successfully",
      task 
    })

  } catch {
    return res.status(500).json({
      Error: "Internal Server error occoured",
      route: "patch/task/:id"
    })
  }
};



module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
}
