import React from 'react';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';
import '!style-loader!css-loader!react-big-calendar/lib/css/react-big-calendar.css';
// import styles from '../css/components/react-big-calendar';
// import classNames from 'classnames/bind';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

// const cx = classNames.bind(styles);

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
const Calendar = () => {
    return (
        <BigCalendar
            style={{height: '420px'}}
            events={[]}
        />
    );
};

export default Calendar;
