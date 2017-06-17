import { connect } from 'react-redux';

import Content from '/components/Content';
import { getSortedMovies, getSortedNewMovies } from '/selectors/movies';
import { getSortOption } from '/selectors/sort';

export default connect(
  (state) => {
    const currentSort = getSortOption(state);
    return {
      allMovies: getSortedMovies(state, currentSort),
      newMovies: getSortedNewMovies(state, currentSort),
    };
  },
)(Content);
