import mongoose from 'mongoose';
import mongooseDelete from 'mongoose-delete';

const CommentSchema = new mongoose.Schema({
    title: String,
    text: String,
    parentId: { type: mongoose.Schema.Types.ObjectId },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  }, {
    timestamps: true
  }
);

CommentSchema.plugin(mongooseDelete, { deletedAt: true });

export default mongoose.model('Comment', CommentSchema);
