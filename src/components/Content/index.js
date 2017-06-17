import React, { PureComponent } from 'react';

import { MovieGroup } from '/components';
import { multiMovieProp } from '/prop_types/movie';

class Content extends PureComponent {
  static propTypes = {
    allMovies: multiMovieProp.isRequired,
    newMovies: multiMovieProp.isRequired,
  };

  render() {
    const { allMovies, newMovies } = this.props;

    return (
      <div>
        <MovieGroup title="New Additions" movies={newMovies} />
        <MovieGroup title="All Movies" movies={allMovies} />
      </div>
    );
  }
}

export default Content;
