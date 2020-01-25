import React from 'react';
import Menu from './components/Menu/Menu';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import './App.css';

function App() {
  return (
    <div style={{ height: '100%' }}>
      <Menu></Menu>
      <SideDrawer></SideDrawer>
      <Backdrop></Backdrop>
      <main style={{ marginTop: '64px' }}>
        <p>Main Page Content</p>
      </main>

    </div>
  );
}

export default App;
