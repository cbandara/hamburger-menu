import React from 'react';
import './HamburgerToggleButton.css'

const HamburgerToggleButton = props => (
  <button className="toggle-button">
    <div className="toggle__line"></div>
    <div className="toggle__line"></div>
    <div className="toggle__line"></div>
  </button>
)

export default HamburgerToggleButton;