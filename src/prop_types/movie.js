import PropTypes from 'prop-types';

export const singleMovieProp = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  borrowed: PropTypes.bool.isRequired,
  wanted: PropTypes.bool.isRequired,
  addDate: PropTypes.number.isRequired, // timestamp
});

export const multiMovieProp = PropTypes.arrayOf(singleMovieProp);
