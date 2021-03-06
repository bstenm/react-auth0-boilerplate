import React from 'react';
import { connect } from 'react-redux';
import Component from './[ComponentName]';

export class Container extends React.Component {

      render() {
            return (
                  <Component { ...this.props } />
            );
      }
};

export default connect( null, null )( Container );

