/**
 * Schema Definitions
 *
 */
import mongoose from 'mongoose';
import mongooseDelete from 'mongoose-delete';
import timestamps from 'mongoose-timestamp';

const TopicSchema = new mongoose.Schema({
  id: String,
  text: String,
  count: { type: Number, min: 0 },
  date: { type: Date, default: Date.now }
});
// mongoose.plugin(mongooseDelete, { deletedAt: true, deletedBy: true });
TopicSchema.plugin(mongooseDelete, { deletedAt: true });
TopicSchema.plugin(timestamps);
// Compiles the schema into a model, opening (or creating, if
// nonexistent) the 'Topic' collection in the MongoDB database
export default mongoose.model('Topic', TopicSchema);

