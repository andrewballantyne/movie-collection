import { ADD_MOVIES } from '/actions/movies';

const recentDuration = 1000 * 60 * 60 * 24 * 30; // 30 days
const buildRecent = (movies) => {
  const list = [];
  const now = Date.now();
  movies.forEach((movie) => {
    if (now - movie.addDate < recentDuration) {
      list.push(movie);
    }
  });
  return list;
};

const initialState = {
  all: [],
  recent: [],
};

const movies = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        all: action.movies,
        recent: buildRecent(action.movies),
      };
    default:
      return state;
  }
};

export default movies;
