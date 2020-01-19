import React from 'react';
import Menu from './components/Menu/Menu';
import SideDrawer from './components/SideDrawer/SideDrawer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <SideDrawer></SideDrawer>
      <main style={{ marginTop: '64px' }}>
        <p>Main Page Content</p>
      </main>

    </div>
  );
}

export default App;
