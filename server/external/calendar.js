import axios from 'axios';

// const CALENDAR_ID = 'tb8ckdrm61bdsj6jfm7khob4u5@group.calendar.google.com';
// const API_KEY = 'AIzaSyAOuDzSlG24RPBn3OKVAyjW3OK_EJhCUbp';
// let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`;
// const token = "IUzI1NiIsInR5c";
// import { apiEndpoint } from '../../config/app';
// import createRestApiClient from '../../app/utils/createRestApiClient';
//
// export default () => {
//     const client = createRestApiClient().withConfig({ baseURL: apiEndpoint });
//     return {
//         events: ({ email, password }) => client.request({
//             method: 'POST',
//             url: '/sessions',
//             data: {
//                 email,
//                 password
//             }
//         });
//     };
// };

module.exports = {
    events(req, res) {
        const url = `https://www.googleapis.com/calendar/v3/calendars/${req.calendarId}/events?key=${req.apiKey}`;
        const token = req.token;
        axios
            .get(url, {
                "headers": {"Authorization": "Bearer " + token}
            })
            .then(response => {
                console.log(response)
                res.send(response) // <= send data to the client
            })
            .catch(err => {
                console.log(err)
                res.send({ err }) // <= send error
            })
    }
};
