import { combineReducers } from 'redux';

import movies from './movies';
import sort from './sort';

export default combineReducers({
  movies,
  sort,
});
