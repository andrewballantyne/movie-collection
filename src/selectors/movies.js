import { NAME_ASC } from '/constants/sort';

const handleSort = sortOption => (a, b) => {
  switch (sortOption) {
    case NAME_ASC:
      return a.name.localeCompare(b.name);
    default:
      return 0;
  }
};

const getLocalState = state => state.movies;

export const getMovies = state => getLocalState(state).all;
export const getNewMovies = state => getLocalState(state).recent;

export const getSortedMovies = (state, sortOption) =>
  getMovies(state).sort(handleSort(sortOption));
export const getSortedNewMovies = (state, sortOption) =>
  getNewMovies(state).sort(handleSort(sortOption));
