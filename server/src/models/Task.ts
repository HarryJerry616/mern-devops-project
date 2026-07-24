import { type Document, model, Schema } from 'mongoose'

interface ITask extends Document {
  title: string
  description: string
  status: string
  priority: string
  dueDate: Date
  createdBy: Schema.Types.ObjectId
}

const instance = new Schema<ITask>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['Pending', 'Completed'],
      default: 'Pending',
    },
    priority: {
      type: String,
      enum: ['Low', 'Medium', 'High'],
      default: 'Medium',
    },
    dueDate: {
      type: Date,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'Account',
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

export default model<ITask>('Task', instance)