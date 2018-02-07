import mongoose from 'mongoose';
import extend from 'mongoose-schema-extend';
import mongooseDelete from 'mongoose-delete';
import timestamps from 'mongoose-timestamp';

const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const FeatureSchema = new Schema({
    user: { type: ObjectId, ref: 'User' },
    title: String,
    content: String,
    date: { type: Date, default: Date.now },
}, { collection: 'Features', discriminatorKey: '_type' });

FeatureSchema.plugin(mongooseDelete, { deletedAt: true });
FeatureSchema.plugin(timestamps);

const CommentSchema = FeatureSchema.extend({
    parent: { type: ObjectId }
});

const TaskSchema = FeatureSchema.extend({
    assignedById: [{ type: ObjectId, ref: 'User' }],
    assignedToId: [{ type: ObjectId, ref: 'User' }],
    users: [{ type: ObjectId, ref: 'User' }],
});

const ProjectSchema = FeatureSchema.extend({
    tasks: [TaskSchema],
    users: [{ type: ObjectId, ref: 'User' }]
});

const Feature = mongoose.model('Feature', FeatureSchema);
const Comment = mongoose.model('Comment', CommentSchema);
const Task = mongoose.model('Task', TaskSchema);
const Project = mongoose.model('Project', ProjectSchema);

export default {
    Feature,
    Comment,
    Task,
    Project
};
