// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import classNames from 'classnames/bind';
// import EntryBox from '../components/EntryBox';
// import MainSection from '../components/MainSection';
// import { createProject, typing, destroyProject } from '../actions/projects';
// import styles from '../css/components/project';

// const cx = classNames.bind(styles);

// class Project extends Component {
//   render() {
//     const {newProject, projects, typing, createProject, destroyProject } = this.props;
//     return (
//       <div className={cx('project')}>
//         <EntryBox
//           project={newProject}
//           onEntryChange={typing}
//           onEntrySave={createProject} />
//         <MainSection
//           projects={projects}
//           onDestroy={destroyProject} />
//       </div>
//     );
//   }
// }

// Project.propTypes = {
//   projects: PropTypes.array.isRequired,
//   typing: PropTypes.func.isRequired,
//   createProject: PropTypes.func.isRequired,
//   destroyProject: PropTypes.func.isRequired,
//   newProject: PropTypes.string
// };

// function mapStateToProps(state) {
//   return {
//     projects: state.project.projects,
//     newProject: state.project.newProject
//   };
// }

// // Read more about where to place `connect` here:
// // https://github.com/rackt/react-redux/issues/75#issuecomment-135436563
// export default connect(mapStateToProps, { createProject, typing, destroyProject })(Project);
