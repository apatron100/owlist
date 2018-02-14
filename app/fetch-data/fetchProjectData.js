import { projectService } from '../services';

const fetchProjectData = () => {
  return projectService().getProjects()
  .then(res => res.data)
  // Returning [] as a placeholder now so it does not error out when this service
  // fails. We should be handling this in our DISPATCH_REQUEST_FAILURE
  .catch(() => []);
};

export default fetchProjectData;
