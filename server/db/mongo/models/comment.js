// import mongoose from 'mongoose';
// import mongooseDelete from 'mongoose-delete';
// import timestamps from 'mongoose-timestamp';

// const Schema = mongoose.Schema;

// const CommentSchema = new Schema({
//     user: { type: Schema.Types.ObjectId, ref: 'User' },
//     title: String,
//     content: String,
//     date: { type: Date, default: Date.now },
//     parentId: Schema.Types.ObjectId,
// });
// CommentSchema.plugin(mongooseDelete, { deletedAt: true });
// CommentSchema.plugin(timestamps);

// export default mongoose.model('Comment', CommentSchema);
