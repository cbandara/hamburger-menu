import React from 'react';
import './SideDrawer.css';

class SideDrawer extends React.Component {

  render() {
    return (
      <nav className="side-drawer">
        <ul>
          <li><a href="/">About</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
      </nav>
    )
  }
}

export default SideDrawer;