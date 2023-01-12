const express = require("express");
const router = express.Router();
const {getTask, getAllTasks, deleteTask, createTask, updateTask} = require("../controllers/tasks")


router.get("/", getAllTasks);
router.get("/get-task/:id", getTask);
router.post("/create-task", createTask);
router.delete("/delete-task/:id", deleteTask);
router.patch("/update-task/:id", updateTask);











module.exports= router;