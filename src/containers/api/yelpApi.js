import React from 'react';

class YelpApi extends React.Component {

  render() {
    return (
      <React.Fragment>
        <div>
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

export default YelpApi;