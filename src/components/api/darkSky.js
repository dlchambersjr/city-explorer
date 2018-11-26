import React from 'react';

class DarkSkyApi extends React.Component {

  render() {
    return (
      <React.Fragment>
        <div>
          <h3>Results from the DarkSky API</h3>
          <ul>
            {this.props.data.map((day, index) => (
              <li key={index}>The forcast for {day.time} is: {day.forecast}</li>
            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default DarkSkyApi;