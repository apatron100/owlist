import React, { Component } from 'react';
import Page from '../pages/Page';
import CalendarContainer from '../containers/Calendar';

class Calendar extends Component {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle = () => {
    return 'Calendar | Owlist';
  };

  pageMeta = () => {
    return [
      { name: 'description', content: 'Your Calendar' }
    ];
  };

  pageLink = () => {
    return [];
  };

  render() {
    return (
      <Page {...this.getMetaData()}>
        <CalendarContainer {...this.props} />
      </Page>
    );
  }
}

export default Calendar;

