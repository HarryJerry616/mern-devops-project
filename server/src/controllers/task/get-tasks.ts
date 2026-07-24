import { Request, Response } from "express";
import Task from "../../models/Task";

const getTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await Task.find({
      createdBy: req.body.account._id,
    });

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch tasks",
    });
  }
};

export default getTasks;