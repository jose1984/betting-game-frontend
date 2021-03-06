import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';

const App: React.FC = () => (
  <div>
    <Router>
      <Navbar></Navbar>
    </Router>
  </div>
);

export default App;
