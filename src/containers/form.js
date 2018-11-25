import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const location = event.target.location.value;
    this.props.onSubmit(location);
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