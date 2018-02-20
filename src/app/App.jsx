import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { removeNotification } from '../actions/notification';
import Notifications from './components/Notifications';
import Routes from './routes.jsx';

class App extends Component {
  render() {
    return (
      <div id="root">
        <ul>
          <Notifications
            notifications={this.props.notifications}
            removeFunc={this.props.removeNotification}
          />
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          {/* <li>
            <Link to="/something">A broken page link</Link>
          </li> */}
        </ul>
        <Routes />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  notifications: state.notification.notifications
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ removeNotification }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
