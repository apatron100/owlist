import { Project, Task, Comment } from '../models/feature';

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
// export function update(req, res) {
//   const query = { id: req.params.id };
//   const isIncrement = req.body.isIncrement;
//   const isFull = req.body.isFull;
//   const omitKeys = ['id', '_id', '_v', 'isIncrement', 'isFull'];
//   const data = _.omit(req.body, omitKeys);

//   if (isFull) {
//     Project.findOneAndUpdate(query, data, (err) => {
//       if (err) {
//         console.log('Error on save!');
//         return res.status(500).send('We failed to save for some reason');
//       }

//       return res.status(200).send('Updated successfully');
//     });
//   } else {
//     Project.findOneAndUpdate(query, { $inc: { count: isIncrement ? 1 : -1 } }, (err) => {
//       if (err) {
//         console.log('Error on save!');
//         return res.status(500).send('We failed to save for some reason');
//       }

//       return res.status(200).send('Updated successfully');
//     });
//   }
// }

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
//   update,
  remove
};
