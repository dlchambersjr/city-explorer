import React from 'react';

class HikingApi extends React.Component {

  render() {
    return (
      <React.Fragment>
        <div>
          <h3>Results from the Hiking Project API</h3>
          <ul>
            {this.props.data.map((trail, index) => (

              <li key={index}>
                <p>Hike Name: <a href={trail.trail_url}>{trail.name}</a>, Location: {trail.location}, Distance: {trail.length} miles</p>
                <p>On {trail.condition_date} at {trail.condition_time}, trail conditions were reported as: {trail.conditions}</p>
                <p>This trail has a rating of {trail.stars} stars (out of {trail.star_votes} votes)</p>
                <p>{trail.summary}</p>
              </li>

            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default HikingApi;