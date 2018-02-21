import React, { Component } from "react";
import SideBar from '..//Sidebar/d-sidebar';
import MainContent from '../d-maincontent';



import {
  Route, Switch,
} from 'react-router-dom'


class Dashboard extends Component {
render() {
    return (
      <div id="whole-page-container" className="wrapper">
		<div className='row no-gutters'>
			<SideBar />
			<MainContent />
		</div>
      </div>
    );
  }
}

export default Dashboard;
