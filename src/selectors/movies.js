const getLocalState = state => state.movies;

export const getMovies = state => getLocalState(state).all;
export const getNewMovies = state => getLocalState(state).recent;
