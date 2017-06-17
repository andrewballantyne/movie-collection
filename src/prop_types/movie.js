import PropTypes from 'prop-types';

export const singleMovieProp = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
});

export const multiMovieProp = PropTypes.arrayOf(singleMovieProp);
