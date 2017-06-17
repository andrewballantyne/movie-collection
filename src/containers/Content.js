import { connect } from 'react-redux';

import Content from '/components/Content';
import { getMovies, getNewMovies } from '/selectors/movies';

export default connect(
  state => ({
    allMovies: getMovies(state),
    newMovies: getNewMovies(state),
  }),
)(Content);
