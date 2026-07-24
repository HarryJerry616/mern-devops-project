import express from "express";

import checkBearerToken from "../middlewares/check-bearer-token";

import createTask from "../controllers/task/create-task";
import getTasks from "../controllers/task/get-tasks";
import updateTask from "../controllers/task/update-task";
import deleteTask from "../controllers/task/delete-task";

const router = express.Router();

// Create Task
router.post("/", [checkBearerToken], createTask);

// Get All Tasks
router.get("/", [checkBearerToken], getTasks);

// Update Task
router.put("/:id", [checkBearerToken], updateTask);

// Delete Task
router.delete("/:id", [checkBearerToken], deleteTask);

export default router;