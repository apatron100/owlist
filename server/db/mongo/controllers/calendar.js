import _ from 'lodash';
import Calendar from '../models/calendar';

// user
// title
// content
// date
// parent

/**
 * List
 */
export function all(req, res) {
    Calendar.find({}).exec((err, topics) => {
        if (err) {
            console.log('Error in first query');
            return res.status(500).send('Something went wrong getting the data');
        }

        return res.json(topics);
    });
}

/**
 * Add a Topic
 */
export function add(req, res) {
    Calendar.create(req.body, (err) => {
        console.log(req.body);
        if (err) {
            console.log(err);
            return res.status(400).send(err);
        }
        return res.status(200).send('OK');
    });
}
/**
 * Update a topic
 */
export function update(req, res) {
    const omitKeys = ['id', '_id', '_v'];
    const data = _.omit(req.body, omitKeys);
    Calendar.findOneAndUpdate({ id: req.params.id }, data, (err) => {
        if (err) {
            console.log('Error in first query');
            return res.status(500).send('Something went wrong getting the data');
        }
        return res.status(200).send('Updated successfully');
    });
}
/**
 * Remove a topic
 */
export function remove(req, res) {
    const query = { id: req.params.id };
    Calendar.delete(query, (err) => {
        if (err) {
            console.log('Error on delete');
            return res.status(500).send('We failed to delete for some reason');
        }

        return res.status(200).send('Removed Successfully');
    });
}

export default {
    all,
    add,
    update,
    remove
};
