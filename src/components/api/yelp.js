import React from 'react';

class YelpApi extends React.Component {

  render() {
    return (
      <React.Fragment>
        <div>
          <h3>Results from the Yelp API</h3>
          <ul>
            {this.props.data.map((place, index) => (
              <li key={index}>
                <a href={place.url}>{place.name}</a>
                <p>The average rating is {place.rating} out of 5 and the average cost is {place.price} out of 4</p>
                <p>{place.image_url}</p>
                <img src={place.image_url} />
              </li>
            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }

}

export default YelpApi;