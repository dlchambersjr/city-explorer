import React from 'react';

class GoogleApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search_query: '',
      path: '/location',
      formatted_query: '',
      latitude:'',
      longitude:'',
    };
  }


  render() {
    return (
      <React.Fragment>
        <h1>this is where the MAP goes</h1>
      </React.Fragment>
    );
  }
}

export default GoogleApi;