// /* eslint consistent-return: 0, no-else-return: 0*/
// import md5 from 'spark-md5';
// import * as types from '../types';
// import { projectService } from '../services';

// function destroy(id) {
//   return { type: types.DESTROY_PROJECT, id };
// }

// function createProjectRequest(data) {
//   return {
//     type: types.CREATE_PROJECT_REQUEST,
//     user: data._id,
//     title: data.title,
//     content: data.content,
//     date: data.Date,
//     parentId: data.parentId,
//     tasks: {},
//     comments: {},
//     users: {}
//   };
// }

// function createProjectSuccess() {
//   return {
//     type: types.CREATE_PROJECT_SUCCESS
//   };
// }

// function createProjectFailure(data) {
//   return {
//     type: types.CREATE_PROJECT_FAILURE,
//     id: data.id,
//     error: data.error
//   };
// }

// function createProjectDuplicate() {
//   return {
//     type: types.CREATE_PROJECT_DUPLICATE
//   };
// }

// export function typing(text) {
//   return {
//     type: types.TYPING,
//     newProject: text
//   };
// }

// // This action creator returns a function,
// // which will get executed by Redux-Thunk middleware
// // This function does not need to be pure, and thus allowed
// // to have side effects, including executing asynchronous API calls.
// export function createProject(text) {
//   return (dispatch, getState) => {
//     // If the text box is empty
//     if (text.trim().length <= 0) return;

//     const id = md5.hash(text);
//     // Redux thunk's middleware receives the store methods `dispatch`
//     // and `getState` as parameters
//     const { project } = getState();
//     const data = {
//       count: 1,
//       id,
//       text
//     };

//     // Conditional dispatch
//     // If the project already exists, make sure we emit a dispatch event
//     if (project.projects.filter(projectItem => projectItem.id === id).length > 0) {
//       // Currently there is no reducer that changes state for this
//       // For production you would ideally have a message reducer that
//       // notifies the user of a duplicate project
//       return dispatch(createProjectDuplicate());
//     }

//     // First dispatch an optimistic update
//     dispatch(createProjectRequest(data));

//     return projectService().createProject({ id, data })
//       .then((res) => {
//         if (res.status === 200) {
//           // We can actually dispatch a CREATE_PROJECT_SUCCESS
//           // on success, but I've opted to leave that out
//           // since we already did an optimistic update
//           // We could return res.json();
//           return dispatch(createProjectSuccess());
//         }
//       })
//       .catch(() => {
//         return dispatch(createProjectFailure({ id, error: 'Oops! Something went wrong and we couldn\'t create your project'}));
//       });
//   };
// }

// export function destroyProject(id) {
//   return (dispatch) => {
//     return projectService().deleteProject({ id })
//       .then(() => dispatch(destroy(id)))
//       .catch(() => dispatch(createProjectFailure({id,
//         error: 'Oops! Something went wrong and we couldn\'t add your vote'})));
//   };
// }
