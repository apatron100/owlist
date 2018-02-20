import mongoose from 'mongoose';
import mongooseDelete from 'mongoose-delete';
import Task from './task';

const ProjectSchema = new mongoose.Schema({
    title: String,
    text: String,
    tasks: [Task],
    users: {}
  }, {
    timestamps: true
  }
);

ProjectSchema.plugin(mongooseDelete, { deletedAt: true });

export default mongoose.model('Topic', ProjectSchema);
