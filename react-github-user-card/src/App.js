import React from 'react';
import './App.css';
import Profile from "./components/Profile";
import Followers from "./components/Followers";


function App() {
  return (
    <div>
      <Profile />
      <h2>Followers:</h2>
      <Followers />
    </div>
  )
}

export default App;
