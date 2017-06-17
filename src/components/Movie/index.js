import React, { PureComponent } from 'react';

import { VerticallyCenter } from '/components';
import { singleMovieProp } from '/prop_types/movie';
import { Banner, MovieContainer, MovieImage, MovieName } from './styles';

class Movie extends PureComponent {
  static propTypes = {
    data: singleMovieProp.isRequired,
  };

  render() {
    const { data } = this.props;

    return (
      <MovieContainer fade={data.borrowed}>
        <MovieImage>
          {data.borrowed && <Banner>Borrowed</Banner>}
          <VerticallyCenter>
            No Image
          </VerticallyCenter>
        </MovieImage>
        <MovieName>
          <VerticallyCenter>
            {data.name}
          </VerticallyCenter>
        </MovieName>
      </MovieContainer>
    );
  }
}

export default Movie;
