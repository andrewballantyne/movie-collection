import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Inner, Outer } from './styles';

class VerticallyCenter extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children } = this.props;

    return (
      <Outer>
        <Inner>
          {children}
        </Inner>
      </Outer>
    );
  }
}

export default VerticallyCenter;
