import { Request, Response } from "express";
import Task from "../../models/Task";

const createTask = async (req: Request, res: Response) => {
  try {
    const { title, description, priority, dueDate } = req.body;

    const task = await Task.create({
      title,
      description,
      priority,
      dueDate,
      status: "Pending",
      createdBy: req.body.account._id,
    });

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({
      message: "Failed to create task",
    });
  }
};

export default createTask;