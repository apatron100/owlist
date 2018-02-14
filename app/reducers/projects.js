import { combineReducers } from 'redux';
import * as types from '../types';

const project = (
  state = {},
  action
) => {
  switch (action.type) {
    case types.CREATE_PROJECT_REQUEST:
      return {
        user: action._id,
        title: action.title,
        content: action.content,
        date: action.Date,
        parentId: action.parentId,
        tasks: action.tasks,
        comments: action.comments,
        users: action.users
      };
    default:
      return state;
  }
};


const projects = (
  state = [],
  action
) => {
  switch (action.type) {
    case types.REQUEST_SUCCESS:
      if (action.data) return action.data;
      return state;
    case types.CREATE_PROJECT_REQUEST:
      return [...state, project(undefined, action)];
    case types.CREATE_PROJECT_FAILURE:
      return state.filter(p => p.id !== action.id);
    case types.DESTROY_PROJECT:
      return state.filter(p => p.id !== action.id);
    default:
      return state;
  }
};

const newProject = (
  state = '',
  action
) => {
  switch (action.type) {
    case types.TYPING:
      return action.newProject;
    case types.CREATE_PROJECT_REQUEST:
      return '';
    default:
      return state;
  }
};

const projectReducer = combineReducers({
    project,
    projects,
    newProject
});

export default projectReducer;
