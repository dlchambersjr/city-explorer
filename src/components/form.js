import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = async event => {
    event.preventDefault();
    let serverUrl = 'https://city-explorer-backend.herokuapp.com'

  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='location'
            placeholder='Please enter a location...'
          />
          <button>Explore!</button>
        </form>
      </React.Fragment>
    );
  }

}

export default Form;