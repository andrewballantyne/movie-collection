import PropTypes from 'prop-types';

export const singleMovieProp = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  series: PropTypes.string,
  seriesWeight: PropTypes.number, // weight within' a series (who came before what -- essentially)
  borrowed: PropTypes.bool.isRequired,
  wanted: PropTypes.bool.isRequired,
  addDate: PropTypes.number.isRequired, // timestamp
  image: PropTypes.string,
});

export const multiMovieProp = PropTypes.arrayOf(singleMovieProp);
