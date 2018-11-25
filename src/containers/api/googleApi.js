import React from 'react';
// import superagent from 'superagent';

class GoogleApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search_query: '',
      path: '/location',
      formatted_query: '',
      latitude: '',
      longitude: '',
    };

    // const getLocation = event => {
    //   event.preventDefault();
    //   const url = this.props.server + this.state.path;
    //   console.log(url);


    //   return url;
    // };
  }

  render() {
    return (
      <React.Fragment>
        <img  ></img>
        <h3>Here are the results for FORMATTED QUERY {this.props.location}</h3>
        <h3>server URL {this.props.server}{this.state.path}</h3>
      </React.Fragment>
    );
  }
}

export default GoogleApi;