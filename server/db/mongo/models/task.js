// import mongoose from 'mongoose';
// import mongooseDelete from 'mongoose-delete';
// import FeatureSchema from './feature';

// const Schema = mongoose.Schema;

// // Task
// const TaskSchema = new FeatureSchema();

// TaskSchema.add({
//     assignedById: { type: Schema.Types.ObjectId, ref: 'User' },
//     assignedToId: { type: Schema.Types.ObjectId, ref: 'User' }
// });
// TaskSchema.plugin(mongooseDelete, { deletedAt: true });

// FeatureSchema.discriminator('Task', TaskSchema);
// const Task = mongoose.model('Task', TaskSchema);
// export default Task;

// // // /**
// // //  * Schema Definitions
// // //  *
// // //  */
// // // import mongoose from 'mongoose';
// // // import mongooseDelete from 'mongoose-delete';


// // // const TaskSchema = new mongoose.Schema({
// // //   id: String,
// // //   title: String,
// // //   decscription: String,
// // //   assignedById: String,
// // //   assignedToId: String,
// // //   date: { type: Date, default: Date.now }
// // // }, {
// // //   timestamps: true
// // // });

// // // TaskSchema.plugin(mongooseDelete, { deletedAt: true });

// // // // Compiles the schema into a model, opening (or creating, if
// // // // nonexistent) the 'Topic' collection in the MongoDB database
// // // export default mongoose.model('Topic', TaskSchema);
// // // /**
// // //  * Schema Definitions
// // //  *
// // //  */
// // // import mongoose from 'mongoose';
// // // import mongooseDelete from 'mongoose-delete';
// // // import Task from './task';
// // // import User from './user';

// // // const ProjectSchema = new mongoose.Schema({
// // //   title: String,
// // //   tasks: [Task.TaskSchema],
// // //   users: [{ type: User.Schema.Types.ObjectId, ref: 'User' }],
// // //   completed: { type: Date, default: Date.now }
// // // }, {
// // //   timestamps: true
// // // });
// // // // mongoose.plugin(mongooseDelete, { deletedAt: true, deletedBy: true });
// // // ProjectSchema.plugin(mongooseDelete, { deletedAt: true });

// // // // Compiles the schema into a model, opening (or creating, if
// // // // nonexistent) the 'Topic' collection in the MongoDB database
// // // export default mongoose.model('Topic', ProjectSchema);
