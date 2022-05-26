import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login } from '../components/Login/Login';
import { Menu } from '../components/Menu/Menu';
import { AuthScreen } from '../screens/authScreen/authScreen';


function RoutesComponent() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthScreen />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  );
}

export default RoutesComponent;
