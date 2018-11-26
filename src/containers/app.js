import React from 'react';
import superagent from 'superagent';

import Header from '../components/header';
import Form from './form.js';

// Components used to render the results of the API calls
import WeatherAPI from '../components/api/darkSky.js';
import YelpAPI from '../components/api/yelp.js';
import MeetingAPI from '../components/api/meetup.js';
import MoviesAPI from '../components/api/movies.js';
import TrailsAPI from '../components/api/trails.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search_query: '',
      serverURL: 'https://city-explorer-backend.herokuapp.com',
      formatted_query: '',
      latitude: '',
      longitude: '',
      mapSource: '',
      resultsView: 'hide',
      weather: [],
      yelp: [],
      meetups: [],
      movies: [],
      trails: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getResource = this.getResource.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    console.log(state);
  }

  getResource(path, location) {
    superagent('get', `${this.state.serverURL}/${path}`)
      .query({ data: location })
      .then(results => { this.setState({ [path]: results.body }); })
      .catch(error => console.error(error));
  }

  handleSubmit(search) {
    let url = `${this.state.serverURL}/location`;
    superagent('get', url)
      .query({ data: search })
      .then(location => {
        console.log(location.body);
        let { search_query, formatted_query, latitude, longitude } = location.body;
        const mapSource = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude}%2c%20${longitude}&zoom=13&size=600x300&maptype=roadmap&key=AIzaSyDp0Caae9rkHUHwERAFzs6WN4_MuphTimk`;

        this.getResource('weather', location.body);
        this.getResource('yelp', location.body);
        this.getResource('meetups', location.body);
        this.getResource('movies', location.body);
        this.getResource('trails', location.body);

        this.setState({ search_query, formatted_query, latitude, longitude, mapSource });
      })
      .catch(error => console.error(error));
  }

  render() {
    return (
      <div className="App">

        <Header />
        <Form onSubmit={this.handleSubmit} />
        <img src={this.state.mapSource} alt="Map of Search Location"></img>
        <h3>Here are the results for {this.state.formatted_query}</h3>
        <WeatherAPI data={this.state.weather} />
        <YelpAPI data={this.state.yelp} />
        <MeetingAPI data={this.state.meetups} />
        <MoviesAPI data={this.state.movies} />
        <TrailsAPI data={this.state.trails} />

      </div>
    );
  }

}

export default App;
