import { apiEndpoint } from '../../config/app';
import createRestApiClient from '../utils/createRestApiClient';

export default () => {
  const client = createRestApiClient().withConfig({ baseURL: apiEndpoint });
  return {
    getComments: () => client.request({
      method: 'GET',
      url: '/comment'
    }),
    deleteComment: ({ id }) => client.request({
      method: 'DELETE',
      url: `/comment/${id}`
    }),
    updateComment: ({ id, data }) => client.request({
      method: 'PUT',
      url: `/comment/${id}`,
      data
    }),
    createComment: ({ id, data }) => client.request({
      method: 'POST',
      url: `/comment/${id}`,
      data
    })
  };
};
