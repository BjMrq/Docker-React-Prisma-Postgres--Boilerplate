import React, { Fragment, Component } from 'react';
import TagManager from 'react-gtm-module';

class GtmScript extends Component {
  componentDidMount() {
    if (window.location.href.match(/vizzmd.netlify/)) {
      const tagManagerArgs = {
        gtmId: ''
      };
      TagManager.initialize(tagManagerArgs);
    }
  }

  render() {
    return (
      <Fragment>
        {this.props.children}
      </Fragment>
    );
  }
}

export default GtmScript;
