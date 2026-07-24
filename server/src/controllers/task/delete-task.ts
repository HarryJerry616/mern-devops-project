import { Request, Response } from "express";
import Task from "../../models/Task";

const deleteTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const task = await Task.findByIdAndDelete(id);

    if (!task) {
    res.status(404).json({
        message: "Task not found",
    });
    return;
}

    res.status(200).json({
      message: "Task deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete task",
    });
    return;
  }
};

export default deleteTask;