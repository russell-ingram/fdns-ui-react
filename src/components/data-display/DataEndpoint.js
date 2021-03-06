import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { IconButton, InputAdornment, OutlinedInput } from '@material-ui/core';

import FileCopyIcon from '@material-ui/icons/FileCopy';

// set the prop types from predefined shapes or standard types
const propTypes = {
  /** The URL or data you wish to be copied. */
  endpoint: PropTypes.string,
};

// set the defaults
const defaultProps = {
  endpoint: window.location.href,
};

// define the class
class DataEndpoint extends Component {

  // copy event passed
  handleCopy = (e) => {
    if (this.input) {
      // the default input is not able to be copied for some reason so this workaround was implemented
      const dummyTextArea = document.createElement('textarea');
      document.body.appendChild(dummyTextArea);
      dummyTextArea.value = this.input.value;
      dummyTextArea.select();
      dummyTextArea.setSelectionRange(0, 99999);
      document.execCommand('copy');
      document.body.removeChild(dummyTextArea);
    }
  }

  // main render method
  render() {
    const { endpoint } = this.props;
    const adornment = (
      // Hide this if the browser doesn't support this functionality
      (document && document.queryCommandSupported && document.queryCommandSupported('copy')) &&
      <InputAdornment position="start">
        <IconButton
          aria-label="Copy link"
          onClick={this.handleCopy}
        >
          <FileCopyIcon />
        </IconButton>
      </InputAdornment>
    );


    return (
      <div className="data-endpoint">
        <OutlinedInput
          id="data-endpoint-input"
          inputRef={(input) => {
            this.input = input
          }}
          label="Label"
          aria-label="label here"
          labelWidth={120}
          disabled={true}
          style={{ margin: 8 }}
          value={endpoint}
          fullWidth
          readOnly={true}
          endAdornment={adornment}
        />
      </div>
    )
  }
}

// set the props, defaults and export
DataEndpoint.propTypes = propTypes;
DataEndpoint.defaultProps = defaultProps;

export default DataEndpoint;