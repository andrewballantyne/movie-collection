import { NAME_ASC, SERIES_ASC } from '/constants/sort';

const handleSort = sortOption => (a, b) => {
  switch (sortOption) {
    case SERIES_ASC:
      if (!a.series && !b.series) {
        // No series, just compare name
        return a.name.localeCompare(b.name);
      } else if (!a.series) {
        return a.name.localeCompare(b.series);
      } else if (!b.series) {
        return a.series.localeCompare(b.name);
      } else if (a.series === b.series) {
        return a.seriesWeight - b.seriesWeight;
      }
      return a.series.localeCompare(b.series);
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
