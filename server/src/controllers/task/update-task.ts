import { Request, Response } from "express";
import Task from "../../models/Task";

const updateTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const task = await Task.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

if (!task) {
    res.status(404).json({
        message: "Task not found",
    });
    return;
}

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({
      message: "Failed to update task",
    });
    return;
  }
};

export default updateTask;