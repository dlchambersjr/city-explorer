import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
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