import React from 'react';

class MovieApi extends React.Component {

  render() {
    return (

      <section>
        <h3>Results from the Movies API</h3>
        <ul>
          {this.props.data.map((movie, index) => (
            <li key={index}>
              <p><span>{movie.title}</span> was relased on {movie.released_on}. Out of {movie.total_votes} total votes, {movie.title} has an average vote of {movie.average_votes} and a popularity score of {movie.popularity}.</p>
              <img src={movie.image_url} alt="movie poster" />
              <p>{movie.overview}</p>
            </li>
          ))}
        </ul>
      </section>

    );
  }
}

export default MovieApi;