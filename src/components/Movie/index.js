import React, { PureComponent } from 'react';

import { VerticallyCenter } from '/components';
import { singleMovieProp } from '/prop_types/movie';
import { buildImagePath } from '/utils/image';
import { Banner, MovieContainer, MovieImage, MovieName, SeriesBanner } from './styles';

class Movie extends PureComponent {
  static propTypes = {
    data: singleMovieProp.isRequired,
  };

  render() {
    const { data } = this.props;

    return (
      <MovieContainer fade={data.borrowed}>
        {data.series && <SeriesBanner>{data.series}</SeriesBanner>}
        <MovieImage>
          {data.borrowed && <Banner>Borrowed</Banner>}
          <VerticallyCenter>
            {data.cover
              ? <img alt={`Cover for ${data.name}`} src={buildImagePath(data.cover)} />
              : 'No Image'
            }
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
