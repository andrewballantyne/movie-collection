import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Movie extends PureComponent {
  static propTypes = {
    data: PropTypes.string.isRequired,
  };

  render() {
    const { data } = this.props;

    return (
      <div>
        {data.name}
      </div>
    );
  }
}

export default Movie;
