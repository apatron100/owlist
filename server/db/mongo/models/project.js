// import mongoose from 'mongoose';
// import FeatureSchema from './feature';
// import TaskSchema from './task';

// const ProjectSchema = new TaskSchema({
//     tasks: [TaskSchema],
//   });

// module.exports = FeatureSchema.discriminator('Project', ProjectSchema);

// // const ProjectSchema = new FeatureSchema();
// // ProjectSchema.add({
// //     tasks: [TaskSchema],
// // });
// // ProjectSchema.plugin(mongooseDelete, { deletedAt: true });

// // const Project = mongoose.model('Project', ProjectSchema);

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
