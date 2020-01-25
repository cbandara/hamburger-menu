import React from 'react';
import './HamburgerToggleButton.css'

class HamburgerToggleButton extends React.Component {

  render() {
    return (
      <button className="toggle-button">
        <div className="toggle__line"></div>
        <div className="toggle__line"></div>
        <div className="toggle__line"></div>
      </button>
    );
  }
}

export default HamburgerToggleButton;