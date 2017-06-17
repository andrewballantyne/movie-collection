import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Movie } from '/components';
import { multiMovieProp } from '/prop_types/movie';

class MovieGroup extends PureComponent {
  static propTypes = {
    movies: multiMovieProp.isRequired,
    title: PropTypes.string.isRequired,
  };

  render() {
    const { movies, title } = this.props;

    if (movies.length === 0) return null;

    return (
      <div>
        <h2>{title} ({movies.length})</h2>
        <div>
          {movies.map(movie => (
            <Movie key={movie.id} data={movie} />
          ))}
        </div>
      </div>
    );
  }
}

export default MovieGroup;
