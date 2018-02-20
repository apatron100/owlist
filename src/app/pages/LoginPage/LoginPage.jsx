import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Page from '../../components/Page';
import NavigationPanel from '../../components/Login/l-navigationPanel';
import Modal from '../../components/Login/l-modal';

import { userAction } from '../../../actions';

class LoginPage extends Component {
  constructor(props) {
    super(props);

    // reset login status
    this.props.dispatch(userAction.logout());

    this.state = {
      username: '',
      password: '',
      submitted: false,
      mounted: false
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({ mounted: true });
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ mounted: false, submitted: true });
    const { username, password } = this.state;
    const { dispatch } = this.props;

    if (username && password) {
      dispatch(userAction.login(username, password));
    }
  }

  render() {
    const { loggingIn } = this.props;
    const { username, password, submitted, mounted } = this.state;

    let child;

    if (mounted) {
      child = (
        <div className="App_test">
          <NavigationPanel />
          <Modal onSubmit={this.handleSubmit} />
        </div>
      );
    }

    return (
      <Page title="LoginPage" id="loginpage">
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {child}
        </ReactCSSTransitionGroup>
      </Page>
    );
  }
}

// mapStateToProps: assign information in store to be available inside component
const mapStateToProps = state => {
  const { loggingIn } = state.authentication;
  return {
    loggingIn
  };
};

// provide functions as props to your component that have access to the dispatch
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapDispatchToProps, mapStateToProps)(LoginPage);
