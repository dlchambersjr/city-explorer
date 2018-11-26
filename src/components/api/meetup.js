import React from 'react';

class MeetupApi extends React.Component {
  render() {
    return (

      <section>
        <h3>Results from the Meetup API</h3>
        <ul>
          {this.props.data.map((meeting, index) => (

            <li key={index}>
              <a href={meeting.link}>{meeting.name}</a>
              <p>Hosted by: {meeting.host}</p>
              <p>Created on: {meeting.creation_date}</p>
            </li>

          ))}
        </ul>
      </section>

    );
  }
}
export default MeetupApi;