import _ from 'lodash';
import { Project } from '../models/features';

// const Project = Feature.Project;

/**
 * List
 */
export function all(req, res) {
    Project.find({}).exec((err, projects) => {
    if (err) {
      console.log('Error in first query');
      return res.status(500).send('Something went wrong getting the data');
    }
    return res.json(projects);
  });
}

/**
 * Add a Project
 */
export function add(req, res) {
    Project.create(req.body, (err) => {
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
  const query = { id: req.params.id };
  const omitKeys = ['id', '_id', '_v', 'tasks', 'comments'];
  const data = _.omit(req.body, omitKeys);
  Project.findOneAndUpdate(query, data, (err) => {
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
  Project.delete(query, (err) => {
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
