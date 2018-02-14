/**
 * Schema Definitions
 *
 */
import mongoose from 'mongoose';
import mongooseDelete from 'mongoose-delete';
import timestamps from 'mongoose-timestamp';

const CalendarSchema = new mongoose.Schema({
  id: String,
  name: String,
  events: {},
});

CalendarSchema.plugin(mongooseDelete, { overrideMethods: true, deletedAt: true });
CalendarSchema.plugin(timestamps);
// Compiles the schema into a model, opening (or creating, if
// nonexistent) the 'Calendar' collection in the MongoDB database
const Calendar = mongoose.model('Calendar', CalendarSchema);

export default {
    Calendar
};
