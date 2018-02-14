// /* eslint consistent-return: 0, no-else-return: 0*/
// import md5 from 'spark-md5';
// import * as types from '../types';
// import { commentService } from '../services';

// function destroy(id) {
//     return { type: types.DESTROY_COMMENT, id };
// }

// function createCommentRequest(data) {
//     return {
//         type: types.CREATE_COMMENT_REQUEST,
//         id: data.id,
//         // count: data.count,
//         text: data.text
//     };
// }

// function createCommentSuccess() {
//     return {
//         type: types.CREATE_COMMENT_SUCCESS
//     };
// }

// function createCommentFailure(data) {
//     return {
//         type: types.CREATE_COMMENT_FAILURE,
//         id: data.id,
//         error: data.error
//     };
// }

// function createCommentDuplicate() {
//     return {
//         type: types.CREATE_COMMENT_DUPLICATE
//     };
// }

// export function typing(text) {
//     return {
//         type: types.TYPING,
//         newComment: text
//     };
// }

// // This action creator returns a function,
// // which will get executed by Redux-Thunk middleware
// // This function does not need to be pure, and thus allowed
// // to have side effects, including executing asynchronous API calls.
// export function createComment(text) {
//     return (dispatch, getState) => {
//         // If the text box is empty
//         if (text.trim().length <= 0) return;

//         const id = md5.hash(text);
//         // Redux thunk's middleware receives the store methods `dispatch`
//         // and `getState` as parameters
//         const { comment } = getState();
//         const data = {
//             id,
//             text
//         };

//         // Conditional dispatch
//         // If the comment already exists, make sure we emit a dispatch event
//         if (comment.comments.filter(commentItem => commentItem.id === id).length > 0) {
//             // Currently there is no reducer that changes state for this
//             // For production you would ideally have a message reducer that
//             // notifies the user of a duplicate comment
//             return dispatch(createCommentDuplicate());
//         }

//         // First dispatch an optimistic update
//         dispatch(createCommentRequest(data));

//         return commentService().createComment({ id, data })
//             .then((res) => {
//                 if (res.status === 200) {
//                     // We can actually dispatch a CREATE_COMMENT_SUCCESS
//                     // on success, but I've opted to leave that out
//                     // since we already did an optimistic update
//                     // We could return res.json();
//                     return dispatch(createCommentSuccess());
//                 }
//             })
//             .catch(() => {
//                 return dispatch(createCommentFailure({ id, error: 'Oops! Something went wrong and we couldn\'t create your comment'}));
//             });
//     };
// }

// export function destroyComment(id) {
//     return (dispatch) => {
//         return commentService().deleteComment({ id })
//             .then(() => dispatch(destroy(id)))
//             .catch(() => dispatch(createCommentFailure({id,
//                 error: 'Oops! Something went wrong and we couldn\'t add your comment'})));
//     };
// }
