import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const location = event.target.search.value;
    this.props.onSubmit(location);
  }

  render() {
    return (

      <form id="search-form" onSubmit={this.handleSubmit}>
        <label htmlFor="search">Search for a location</label>
        <input
          id='input-search'
          type='text'
          name='search'
          placeholder='Enter a location here'
        />
        <button type="submit">Explore!</button>
      </form>

    );
  }
}



export default Form;