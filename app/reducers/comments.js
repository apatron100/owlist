import { combineReducers } from 'redux';
import * as types from '../types';

const comment = (
  state = {},
  action
) => {
  switch (action.type) {
    case types.CREATE_COMMENT_REQUEST:
      return {
        user: action._id,
        title: action.title,
        content: action.content,
        date: action.Date,
        parentId: action.parentId,
        important: action.important
      };
    default:
      return state;
  }
};

const comments = (
  state = [],
  action
) => {
  switch (action.type) {
    case types.REQUEST_SUCCESS:
      if (action.data) return action.data;
      return state;
    case types.CREATE_COMMENT_REQUEST:
      return [...state, comment(undefined, action)];
    case types.CREATE_COMMENT_FAILURE:
      return state.filter(t => t.id !== action.id);
    case types.DESTROY_COMMENT:
      return state.filter(t => t.id !== action.id);
    default:
      return state;
  }
};

const newComment = (
  state = '',
  action
) => {
  switch (action.type) {
    // case types.TYPING:
    //   return action.newComment;
    case types.CREATE_COMMENT_REQUEST:
      return '';
    default:
      return state;
  }
};

const commentReducer = combineReducers({
  comment,
  comments,
  newComment
});

export default commentReducer;
