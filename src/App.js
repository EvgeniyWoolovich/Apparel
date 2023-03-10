import React from 'react';
import Header from './components/Header/Header';
import NavBar from './components/Navbar/NavBar';
import './App.css';
import Profile from './components/Profile/Profile';


const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <Profile />
    </div>
  );
}

export default App;

