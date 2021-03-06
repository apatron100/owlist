import Project from '../models/project';
import * as msg from './errors';

let response = (status, data) => ({ 'success': status, 'message': (status ? msg.SUCCESS : msg.ERROR), data });

export const all = (req,res) => {
  Project.find({}).exec((err, projects) => {
    if (err) {
      console.log(err);
      return res.status(500).json(response(false));
    }
    response.data = projects;
    console.log('projects');
    return res.status(200).json(response(true, projects));
  });
}


export const add = (req,res) => {
  console.log(req.body);
  const newProject = new Project(req.body);
  newProject.save((err, project) => {
    if (err) {
      console.log(err);
      return res.status(500).json(response(false));
    }
    return res.status(200).json(response(true, project));
  })
}

export const update = (req,res) => {
  Project.findOneAndUpdate({ _id:req.body.id }, req.body, { new:true }, (err,project) => {
    if (err) {
      console.log(err);
      return res.status(500).json(response(false));
    }

    return res.status(200).json(response(true, project));
  });
}

export const findOne = (req,res) => {
  Project.find({_id:req.params.id}).exec((err,project) => {
    if (err) {
      console.log(err);
      return res.status(500).json(response(false));
    }
    if (project) {
      return res.status(200).json(response(true, project));
    }
  })
}

export const remove = (req,res) => {
  Project.findByIdAndRemove(req.params.id, (err,Project) => {
    if (err) {
      console.log(err);
      return res.status(500).json(response(false));
    }
    return res.status(200).json(response(true));
  });
}

export default {
  all,
  findOne,
  add,
  update,
  remove
};
